// Product array: name is displayed, id is used as the value
const products = [
    { id: "Laptop X100", name: "Laptop X100" },
    { id: "Smartwatch Z", name: "Smartwatch Z" },
    { id: "4K Television", name: "4K Television" },
    { id: "Bluetooth Speaker", name: "Bluetooth Speaker" },
    { id: "Home AC Unit", name: "Home AC Unit" },
    { id: "Water Purifier", name: "Water Purifier" },
    { id: "Smart Thermostat", name: "Smart Thermostat" },
    { id: "Ceiling Fan", name: "Ceiling Fan" },
    { id: "LED Light Bulb", name: "LED Light Bulb" },
    { id: "Solar Inverter", name: "Solar Inverter" },
    { id: "Home Router", name: "Home Router" },
    { id: "Electric Kettle", name: "Electric Kettle" },
    { id: "Air Humidifier", name: "Air Humidifier" },
    { id: "Emergency Lantern", name: "Emergency Lantern" }
];

document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("product");

    // Populate product select dropdown
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;         // value used in form submission
        option.textContent = product.name; // text shown to user
        select.appendChild(option);
    });

    // Optional: ensure at least one checkbox is selected on form submit
    const form = document.getElementById("reviewForm");
    form.addEventListener("submit", function (e) {
        const checkboxes = form.querySelectorAll("input[type='checkbox']");
        const oneChecked = Array.from(checkboxes).some(cb => cb.checked);
    });
});
