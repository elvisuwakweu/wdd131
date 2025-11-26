// Array of Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 83000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-baptistry.jpeg"
    },
    {
        templeName: "London England",
        location: "London, England",
        dedicated: "1958, September, 7",
        area: 13000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-650241-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    }
];

// Select the container
const templeGrid = document.getElementById("temple-grid");

// Function to create temple cards
function displayTemples(templesArray) {
    templeGrid.innerHTML = ""; // Clear existing content

    templesArray.forEach(temple => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");

        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        templeGrid.appendChild(card);
    });
}

const grid = document.querySelector('.temple-grid');

// Function to display temples
function displayTemples(templeArray) {
    grid.innerHTML = ''; // Clear grid first
    templeArray.forEach(temple => {
        const card = document.createElement('figure');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';

        const caption = document.createElement('figcaption');
        caption.textContent = `${temple.templeName} | ${temple.location} | Dedicated: ${temple.dedicated} | Area: ${temple.area} sq ft`;

        card.appendChild(img);
        card.appendChild(caption);

        grid.appendChild(card);
    });
}

// Initial display (all temples)
displayTemples(temples);

// Footer dynamic content
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Filter buttons
const filterLinks = document.querySelectorAll('.nav-links a');
filterLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const filter = link.dataset.filter;

        let filtered;
        switch (filter) {
            case 'old':
                filtered = temples.filter(t => {
                    const year = parseInt(t.dedicated.split(',')[0]);
                    return year < 1900;
                });
                break;
            case 'new':
                filtered = temples.filter(t => {
                    const year = parseInt(t.dedicated.split(',')[0]);
                    return year > 2000;
                });
                break;
            case 'large':
                filtered = temples.filter(t => t.area > 90000);
                break;
            case 'small':
                filtered = temples.filter(t => t.area < 10000);
                break;
            default:
                filtered = temples;
        }

        displayTemples(filtered);
    });
});

// Footer dynamic content
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
