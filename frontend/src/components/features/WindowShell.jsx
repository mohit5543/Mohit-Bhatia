import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

function WindowShell({
  id,
  title,
  className = "",
  contentClassName = "",
  isDesktopOverride,
  onClose,
  children,
}) {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth > 768 : false
  );
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth > 768;
      setIsDesktop(desktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopMode = isDesktopOverride ?? isDesktop;

  return (
    <section
      id={id}
      className={`window-section ${className} ${desktopMode ? "is-desktop" : "is-mobile"}`}
    >
      <Motion.div className="window-frame">
        {desktopMode ? (
          <div className="window-bar">
            <div className="window-dots">
              <button
                type="button"
                className="window-dot close"
                aria-label={`Close ${title}`}
                onClick={onClose}
              />
              <span className="window-dot minimize" aria-hidden="true" />
              <span className="window-dot maximize" aria-hidden="true" />
            </div>
            <span className="window-title">{title}</span>
          </div>
        ) : null}

        <div className={`window-body ${contentClassName}`.trim()}>{children}</div>
      </Motion.div>
    </section>
  );
}

export default WindowShell;
