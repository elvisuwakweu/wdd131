const products = [
    "Water Purifier",
    "Smart Thermostat",
    "Ceiling Fan",
    "LED Light Bulb",
    "Solar Inverter",
    "Home Router",
    "Electric Kettle",
    "Air Humidifier",
    "Emergency Lantern"
];

const dropdown = document.getElementById("product");
products.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    dropdown.appendChild(option);
});
