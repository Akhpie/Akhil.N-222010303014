const express = require("express");
const axios = require("axios");

const app = express();
const port = 8008;

app.use(express.json());

async function fetchNumbers(url) {
  try {
    const response = await axios.get(url, { timeout: 500 });
    if (response.status === 200 && response.data.numbers) {
      return response.data.numbers;
    }
  } catch (error) {
    console.error(`Error fetching numbers from ${url}: ${error.message}`);
    return [];
  }
}

app.get("/numbers", async (req, res) => {
  const urls = req.query.url || [];
  const tasks = urls.map(fetchNumbers);

  try {
    const resultSets = await Promise.all(tasks);
    const mergedNumbers = [...new Set([].concat(...resultSets))].sort(
      (a, b) => a - b
    );
    res.json({ numbers: mergedNumbers });
  } catch (error) {
    console.error(`Error processing numbers: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while processing numbers" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
