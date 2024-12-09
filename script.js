const trashItems = [
    { name: "Vỏ Chuối", type: "organic" },
    { name: "Chai Nhựa", type: "recycle" },
    { name: "Pin Hỏng", type: "other" },
    { name: "Vỏ Cam", type: "organic" },
    { name: "Giấy Báo Cũ", type: "recycle" },
    { name: "Lõi Pin", type: "other" },
    { name: "Rau Củ Hư", type: "organic" },
    { name: "Chai Thuỷ Tinh", type: "recycle" },
    { name: "Túi Nhựa", type: "recycle" },
    { name: "Lá Cây Khô", type: "organic" },
    { name: "Vỏ Hộp Sữa", type: "recycle" },
    { name: "Thùng Carton", type: "recycle" },
    { name: "Thịt Hư", type: "organic" },
    { name: "Đinh Vít", type: "other" },
    { name: "Ống Hút Nhựa", type: "other" },
    { name: "Bìa Carton", type: "recycle" },
    { name: "Tã Lót", type: "other" },
    { name: "Xương Chặt", type: "organic" },
    { name: "Mảnh Sành Sứ", type: "other" },
    { name: "Chai Thuốc", type: "other" }
];

let score = 0;
let time = 100; // 30 giây
let timerInterval;

function createTrash() {
    const trashContainer = document.getElementById("trash-items");
    trashContainer.innerHTML = ""; // Xóa rác cũ
    const randomTrash = trashItems[Math.floor(Math.random() * trashItems.length)];
    const trash = document.createElement("div");
    trash.className = "trash";
    trash.innerText = randomTrash.name;
    trash.dataset.type = randomTrash.type;
    trashContainer.appendChild(trash);
}

function setupBins() {
    const bins = document.querySelectorAll(".bin");
    bins.forEach((bin) => {
        bin.addEventListener("click", function () {
            const trash = document.querySelector(".trash");
            if (trash && trash.dataset.type === bin.dataset.type) {
                score++;
                alert("Chính xác!");
            } else {
                alert("Sai rồi! Thử lại nhé.");
            }
            document.getElementById("score").innerText = score;
            createTrash();
        });
    });
}

function startTimer() {
    timerInterval = setInterval(function() {
        if (time > 0) {
            time--;
            document.getElementById("time").innerText = time;
        } else {
            clearInterval(timerInterval);
            alert("Hết giờ! Bạn đạt được " + score + " điểm.");
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    createTrash();
    setupBins();
    startTimer();
});
