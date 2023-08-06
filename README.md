# puppeteer-scraper

# Poshmark Web Scraper for Ecommerce Website

## Introduction

This repository contains a Node.js web scraping tool using Puppeteer to download images from your sister's Poshmark store. The purpose of this tool is to assist you in creating an ecommerce website for her, utilizing the items listed on her Poshmark store.

## Prerequisites

Before using this web scraper tool, you need to have the following installed:

1. Node.js: Node.js is a JavaScript runtime environment. If you don't have it installed, you can download it from the official website: https://nodejs.org/

## Installation

1. Clone or download this repository to your local machine.

2. Navigate to the project folder and install the required dependencies by running the following command:

   ```bash
   npm install puppeteer
   ```

## Usage

Update the URL:

Replace 'YOUR_URL_HERE' in the scraper.js file with the URL of your sister's Poshmark store. Make sure the URL points to the page containing the images you want to download.

Create the output directory:

In the scraper.js file, the downloaded images will be saved in a folder named images in your project directory. Before running the scraper, create the images folder in the project directory or update the outputDir variable to the desired output directory.

Run the scraper:

Open your terminal or command prompt, navigate to the project folder containing scraper.js, and run the following command:

bash
Copy code
node scraper.js
The scraper will open the specified Poshmark store URL, scrape the images with the tag .slideshow\_\_container picture img, and download them to the images folder.
