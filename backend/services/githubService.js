const axios = require("axios");

const GITHUB_USERNAME = "mohit5543";

async function getRepositories() {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos`
        );

        return response.data;
    } catch (error) {
        console.error("Error fetching Github repos:", error.message);
        return[];
    }
}

module.exports = { getRepositories }; 