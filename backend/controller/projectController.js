const { getRepositories } = require("../services/githubService");

async function getProjects(req, res ) {
    const repos = await getRepositories();

    res.json(repos);
}

module.exports = { getProjects };