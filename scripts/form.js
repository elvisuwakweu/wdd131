const products = [
    { id: 1, name: "Vacuum Cleaner" },
    { id: 2, name: "Washing Machine" },
    { id: 3, name: "Blender" },
    { id: 4, name: "Laptop" },
    { id: 5, name: "Air Fryer" }
];

const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
