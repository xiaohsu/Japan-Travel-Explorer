// 載入日本 SVG 地圖
async function loadJapanMap() {
    const container = document.getElementById("japan-map-container");

    try {
        const response = await fetch("images/map/japan-map.svg");

        if (!response.ok) {
            throw new Error("地圖檔案讀取失敗");
        }

        const svgText = await response.text();

        container.innerHTML = svgText;

        const svg = container.querySelector("svg");

        svg.classList.add("map-svg");
        // 八大地區名稱
const regions = [
    "hokkaido",
    "tohoku",
    "kanto",
    "chubu",
    "kinki",
    "chugoku",
    "shikoku",
    "kyushu"
];
// 八大地區的介紹資料
const regionInfo = {
    hokkaido: {
        name: "北海道",
        english: "HOKKAIDO",
        description: "日本最北端的地區，以壯麗雪景、遼闊自然風光、溫泉與新鮮海鮮聞名。"
    },
    tohoku: {
        name: "東北",
        english: "TOHOKU",
        description: "以豐富的自然景觀、傳統祭典、溫泉與四季分明的風景聞名。"
    },
    kanto: {
        name: "關東",
        english: "KANTO",
        description: "日本最繁華的都會區，以東京為中心，融合現代都市、購物、美食與歷史文化。"
    },
    chubu: {
        name: "中部",
        english: "CHUBU",
        description: "擁有日本阿爾卑斯山、富士山與傳統城鎮，是自然景觀與文化體驗兼具的地區。"
    },
    kinki: {
        name: "近畿",
        english: "KANSAI",
        description: "包含京都、大阪與奈良等知名城市，以古都文化、歷史建築與特色美食聞名。"
    },
    chugoku: {
        name: "中國",
        english: "CHUGOKU",
        description: "位於本州西部，擁有嚴島神社、廣島和平紀念公園與許多海岸風景。"
    },
    shikoku: {
        name: "四國",
        english: "SHIKOKU",
        description: "以自然景觀、瀨戶內海風光、道後溫泉與四國遍路文化聞名。"
    },
    kyushu: {
        name: "九州",
        english: "KYUSHU",
        description: "以火山地形、溫泉、美食與悠閒的南國氛圍吸引旅客。"
    }
};
// 滑鼠移入縣市時，讓整個地區高亮
const prefectures = svg.querySelectorAll(".prefecture");

prefectures.forEach(prefecture => {

    prefecture.addEventListener("mouseenter", () => {

        // 找出目前縣市所屬的地區
        const region = regions.find(name =>
            prefecture.classList.contains(name)
        );

        if (!region) return;
        // 更新右側地區資訊
document.getElementById("region-name").textContent =
    regionInfo[region].name;

document.getElementById("region-english").textContent =
    regionInfo[region].english;

document.getElementById("region-description").textContent =
    regionInfo[region].description;

        // 將同一地區的所有縣市設為高亮
        svg.querySelectorAll("." + region).forEach(area => {
            area.classList.add("region-active");
        });

    });

    prefecture.addEventListener("mouseleave", () => {

        // 移除所有地區的高亮
        svg.querySelectorAll(".region-active").forEach(area => {
            area.classList.remove("region-active");
        });

    });
    // 點擊地圖上的縣市，進入該地區介紹頁
prefecture.addEventListener("click", () => {

    const region = regions.find(name =>
        prefecture.classList.contains(name)
    );

    if (!region) return;

    window.location.href = `pages/region.html?region=${region}`;

});

});

    } catch (error) {
        console.error("地圖載入錯誤：", error);
        container.innerHTML = "<p>地圖載入失敗，請重新整理頁面。</p>";
    }
}

// 網頁載入後執行
loadJapanMap();