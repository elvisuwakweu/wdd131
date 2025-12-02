// Product array (the assignment wants name used as option text and id used as value)
// Using product names as values to match rubric instructions
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
    products.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = p.name;
        select.appendChild(opt);
    });

    // Optional: small client-side validation to ensure at least one checkbox checked? (not required)
});
