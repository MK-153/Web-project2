// 模拟租房数据
const rentalData = [
    { location: "Shanghai", price: "5000Yuan/M", description: "1室1厅，靠近地铁" },
    { location: "Peking", price: "6000Yuan/M", description: "2室1厅，市中心" },
    { location: "Shenzhen", price: "4500Yuan/M", description: "1室1厅，安静小区" },
    { location: "Kantong", price: "5500Yuan/M", description: "2室1厅，周边配套齐全" }
];

// 显示租房信息
function displayRentals(data) {
    const rentalList = document.getElementById("rental-info");
    rentalList.innerHTML = "";

    data.forEach(rental => {
        const rentalItem = document.createElement("li");
        rentalItem.innerHTML = `
            <h3>${rental.location}</h3>
            <p>Rent price: ${rental.price}</p>
            <p>Description: ${rental.description}</p>
        `;
        rentalList.appendChild(rentalItem);
    });
}

// 搜索功能
function searchRental() {
    const locationInput = document.getElementById("location").value.toLowerCase();
    const filteredRentals = rentalData.filter(rental =>
        rental.location.toLowerCase().includes(locationInput)
    );
    displayRentals(filteredRentals);
}

// 默认显示所有租房信息
displayRentals(rentalData);
