const foods = [
    { name: "Phở bò", image: "./assets/pho-bo.jpg" },
    { name: "Bún chả", image: "./assets/bun-cha.jpg" },
    { name: "Cơm rang", image: "./assets/com-rang.jpg" },
    { name: "Bánh mì", image: "./assets/banh-mi.jpg" },
    { name: "Bún cá", image: "./assets/bun-ca.jpg" },
    { name: "Bún đậu", image: "./assets/bun-dau.jpg" },
    { name: "Bánh cuốn", image: "./assets/banh-cuon.jpg" },
    { name: "Anh Long", image: "./assets/anhlong.jpg" },




];
function randomFood() {
    const foodImage = document.getElementById("foodImage");
    const foodName = document.getElementById("foodName");
    const resultText = document.getElementById("resultText");
    const searchButton = document.getElementById("searchButton");
    foodImage.classList.add("animate");
    resultText.textContent = "";
    searchButton.style.display = "none"; // Ẩn nút tìm kiếm khi đang random
    let count = 0;
    const maxCount = 10;
    
    const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * foods.length);
        foodImage.src = foods[randomIndex].image;
        foodName.textContent = foods[randomIndex].name;
        count++;
        if (count >= maxCount) {
            clearInterval(interval);
            foodImage.classList.remove("animate");
            resultText.textContent = `Hôm nay em nên ăn ${foodName.textContent}!`;
            searchButton.style.display = "block"; // Hiển thị lại nút tìm kiếm khi xong
        }
    }, 150);
}


function searchFood() {
    const foodName = document.getElementById("foodName").textContent;
    const searchQuery = `Quán ${foodName} gần tôi`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
}