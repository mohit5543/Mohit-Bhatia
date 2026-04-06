import { navigationLinks, profile } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

      <div className="footer-links">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
