var data = [
    {
        name: 'Intellisense for CSS class names in HTML',
        description: 'A VS Code extention that provides CSS class name completion for the HTML CLASS attribute based on the definitions found in your workspace or through external files referenced through the LINK element',
        author: 'Zignd',
        url: 'https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion',
        downloads: 8230718,
        stars: 3.50,
        price: 0.00,
        id: 'p1'
    },
    {
        name: 'GitLens',
        description: 'A tool for making Git work for you, designed to improve focus, productivity and collaboration with a powerful set of tools to help you better understand, write and review code',
        author: 'GitKraken',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
        downloads: 35763368,
        stars: 3.50,
        price: 0.00,
        selector: 'p2'
    }
];


// Constructor function for creating Package objects
function Package(data) {
    this.name = data.name;
    this.price = data.price;
    this.url = data.url;
    this.description = data.description;
    this.author = data.author;
    this.downloads = data.downloads;
    this.stars = data.stars;

    // Method to format downloads with commas
    this.getFormattedDownloads = function() {
        return this.downloads.toLocaleString();
    };
}

// Create Package objects from the mock database
const package1 = new Package(data[0]);
const package2 = new Package(data[1]);

// Function to insert package data into the DOM
function displayPackageData(packageObj, packageIndex) {
    document.getElementById(`package-${packageIndex}-name`).textContent = packageObj.name;
    document.getElementById(`package-${packageIndex}-url`).textContent = "Link to Package";
    document.getElementById(`package-${packageIndex}-url`).href = packageObj.url;
    document.getElementById(`package-${packageIndex}-description`).textContent = packageObj.description;
    document.getElementById(`package-${packageIndex}-author`).textContent = `Author: ${packageObj.author}`;
    document.getElementById(`package-${packageIndex}-downloads-count`).textContent = packageObj.getFormattedDownloads();
    document.getElementById(`package-${packageIndex}-stars-count`).textContent = packageObj.stars;
}

// Display data for both packages
displayPackageData(package1, 1);
displayPackageData(package2, 2);

// Function to get today's date
function getTodaysDate() {
    const today = new Date();

    // Extracting the date parts
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();

    // Formatting the date as MM/DD/YYYY
    return `${month}/${day}/${year}`;
}

// Display the date in the element with id "date"
document.getElementById('date').textContent = getTodaysDate();

getTodaysDate();


