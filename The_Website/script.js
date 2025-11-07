// Mock rental data
const rentalData = [
    { location: "Shanghai", price: "¥5,000 / month", description: "1BR, 1 living room — near metro" },
    { location: "Peking", price: "¥6,000 / month", description: "2BR, 1 living room — city center" },
    { location: "Shenzhen", price: "¥4,500 / month", description: "1BR, quiet neighborhood" },
    { location: "Kantong", price: "¥5,500 / month", description: "2BR, well-connected area" }
];

// Display rental information
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

// Search function
function searchRental() {
    const locationInput = document.getElementById("location").value;
    const locationLower = locationInput.toLowerCase();
    
    // 检查是否有精确匹配（不区分大小写）
    const exactMatch = rentalData.find(rental => 
        rental.location.toLowerCase() === locationLower
    );
    
    if (exactMatch) {
        // 找到精确匹配时跳转到对应页面
        window.location.href = `${exactMatch.location}.html`;
    } else {
        // 无精确匹配时显示包含搜索词的结果
        const filteredRentals = rentalData.filter(rental =>
            rental.location.toLowerCase().includes(locationLower)
        );
        displayRentals(filteredRentals);
    }
}

// 默认显示所有租房信息
displayRentals(rentalData);
