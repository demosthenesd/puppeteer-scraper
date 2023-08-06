const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const currentDate = new Date();

(async () => {
  const url =
    "https://poshmark.com.au/listing/Decjuba-Peplum-Tank-Top-63c7223adbb0e7fdd512e5e4"; // Replace with the URL you want to scrape
  const outputDir = "./images/decjuba"; // Folder where downloaded images will be saved

  // Create the output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    // Get all image URLs matching the specified tag
    const imageUrls = await page.evaluate(() => {
      const imgElements = document.querySelectorAll(
        ".slideshow__container picture img"
      );
      return Array.from(imgElements).map((img) => img.src);
    });

    // Download and save the images

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const characters2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const generateRandomString = (length) => {
      let result = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }

      return result;
    };

    for (let i = 0; i < imageUrls.length; i++) {
      const randomIndex = Math.floor(Math.random(20, 48) * characters.length);
      const randomIndex2 = Math.floor(Math.random(1, 10) * characters2.length);
      const imageUrl = imageUrls[i];
      const imageName = `image_${generateRandomString(10)}${characters.charAt(
        randomIndex
      )}-${characters.charAt(randomIndex2)}-${
        i + 1 * Math.floor(Math.random() * randomIndex)
      }-${randomIndex2}${currentDate.getMilliseconds()}.jpg`;
      const imagePath = path.join(outputDir, imageName);

      const viewSource = await page.goto(imageUrl);
      fs.writeFileSync(imagePath, await viewSource.buffer());
      console.log(` ${imageName} downloaded successfully.`);
    }

    await browser.close();
    console.log("All images downloaded successfully.");
  } catch (err) {
    console.error("Error occurred:", err);
  }
})();
