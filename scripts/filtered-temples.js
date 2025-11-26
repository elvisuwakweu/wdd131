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

    // ⭐ YOUR THREE NEW TEMPLES ⭐
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/fac2f821c9895e1acd1325cbdb3fa447c4bb4e19/full/3840%2C/0/default?download=true"
    },
    {
        templeName: "Boise Idaho",
        location: "Boise, Idaho, United States",
        dedicated: "1984, May, 25",
        area: 35400,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/7966d14e4b63698bddfbfbf57b6ed9dc1649fb5d/full/1920%2C/0/default?download=true"
    },
    {
        templeName: "Fort Lauderdale Florida",
        location: "Fort Lauderdale, Florida, USA",
        dedicated: "2014, May, 4",
        area: 30500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/7a66995069da049701afff92cdcd013e77a0bf0e/full/3840%2C/0/default?download=true"
    }
];


// SELECT GRID CONTAINER
const container = document.getElementById("temple-grid");


// FUNCTION: DISPLAY TEMPLES
function displayTemples(list) {
    container.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("figure");

        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        container.appendChild(card);
    });
}

// DEFAULT LOAD
displayTemples(temples);


// FILTER BUTTONS
document.getElementById("home").onclick = () => displayTemples(temples);

document.getElementById("old").onclick = () => {
    displayTemples(temples.filter(t => parseInt(t.dedicated.substring(0, 4)) < 1900));
};

document.getElementById("new").onclick = () => {
    displayTemples(temples.filter(t => parseInt(t.dedicated.substring(0, 4)) > 2000));
};

document.getElementById("large").onclick = () => {
    displayTemples(temples.filter(t => t.area > 90000));
};

document.getElementById("small").onclick = () => {
    displayTemples(temples.filter(t => t.area < 10000));
};


// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
