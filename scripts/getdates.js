// Dynamically set current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Display last modified date
document.querySelector("#lastModified").textContent = `Last modified: ${document.lastModified}`;
