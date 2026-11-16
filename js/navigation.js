
// 取得網址中的地區參數
const params = new URLSearchParams(window.location.search);
const region = params.get("region");

// 八大地區資料
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

// 各地區推薦景點
const destinationData = {
    hokkaido: [
        {
            name: "小樽運河",
            city: "北海道・小樽市",
            description: "充滿懷舊氣息的運河景色，沿岸有歷史倉庫與浪漫街景。",
            image: "../images/destinations/otaru.jpg"
        },
        {
            name: "富田農場",
            city: "北海道・中富良野町",
            description: "以薰衣草花田聞名，夏季能欣賞大片紫色花海。",
            image: "../images/destinations/furano.jpg"
        },
        {
            name: "登別地獄谷",
            city: "北海道・登別市",
            description: "壯觀的火山地形與溫泉地景，是北海道著名的自然景點。",
            image: "../images/destinations/noboribetsu.jpg"
        }
    ]
        ,

    kanto: [
        {
            name: "淺草寺",
            city: "東京都・台東區",
            description: "東京歷史悠久的寺廟之一，以雷門、仲見世商店街與傳統文化聞名。",
            image: "../images/destinations/sensoji.jpg"
        },
        {
            name: "東京鐵塔",
            city: "東京都・港區",
            description: "東京著名地標，可以從展望台欣賞城市景色。",
            image: "../images/destinations/tokyo-tower.jpg"
        },
        {
            name: "鎌倉大佛",
            city: "神奈川縣・鎌倉市",
            description: "日本具有代表性的青銅佛像，是鎌倉非常受歡迎的歷史景點。",
            image: "../images/destinations/kamakura.jpg"
        }
    ]
    ,

tohoku: [
    {
        name: "松島",
        city: "宮城縣・松島町",
        description: "日本三景之一，以海灣中散布的島嶼景觀聞名。",
        image: "../images/destinations/matsushima.jpg"
    },
    {
        name: "弘前城",
        city: "青森縣・弘前市",
        description: "以櫻花季的護城河與古城景色聞名。",
        image: "../images/destinations/hirosaki.jpg"
    },
    {
        name: "奧入瀨溪流",
        city: "青森縣・十和田市",
        description: "擁有瀑布、溪流與森林步道，是著名的自然景觀。",
        image: "../images/destinations/oirase.jpg"
    }
]
,

chubu: [
    {
        name: "富士山",
        city: "山梨縣・靜岡縣",
        description: "日本最具代表性的山岳地標，以優美的錐形山體與壯麗景色聞名。",
        image: "../images/destinations/mount-fuji.jpg"
    },
    {
        name: "白川鄉合掌村",
        city: "岐阜縣・白川村",
        description: "以傳統合掌造建築聞名，冬季雪景尤其迷人。",
        image: "../images/destinations/shirakawa-go.jpg"
    },
    {
        name: "上高地",
        city: "長野縣・松本市",
        description: "擁有清澈溪流、壯麗山脈與森林步道，是日本知名的山岳景勝地。",
        image: "../images/destinations/kamikochi.jpg"
    }
]
,

kinki: [
    {
        name: "清水寺",
        city: "京都府・京都市",
        description: "京都著名的古老寺院，以清水舞台與周邊古街景色聞名。",
        image: "../images/destinations/kiyomizu-dera.jpg"
    },
    {
        name: "大阪城",
        city: "大阪府・大阪市",
        description: "日本著名歷史城堡，春季櫻花與城堡景觀相當迷人。",
        image: "../images/destinations/osaka-castle.jpg"
    },
    {
        name: "奈良公園",
        city: "奈良縣・奈良市",
        description: "以自由活動的梅花鹿與豐富的歷史文化景點聞名。",
        image: "../images/destinations/nara-park.jpg"
    }
]
,

chugoku: [
    {
        name: "嚴島神社",
        city: "廣島縣・廿日市市",
        description: "以海上鳥居聞名，漲潮時彷彿漂浮在海面上，是日本三景之一。",
        image: "../images/destinations/itsukushima.jpg"
    },
    {
        name: "廣島和平紀念公園",
        city: "廣島縣・廣島市",
        description: "紀念廣島原子彈爆炸事件，傳達和平與反戰的重要意義。",
        image: "../images/destinations/hiroshima-peace.jpg"
    },
    {
        name: "倉敷美觀地區",
        city: "岡山縣・倉敷市",
        description: "保存傳統白壁建築與運河街景，充滿懷舊的日本風情。",
        image: "../images/destinations/kurashiki.jpg"
    }
]
,

shikoku: [
    {
        name: "道後溫泉",
        city: "愛媛縣・松山市",
        description: "日本歷史悠久的溫泉之一，以充滿特色的木造溫泉建築聞名。",
        image: "../images/destinations/dogo-onsen.jpg"
    },
    {
        name: "栗林公園",
        city: "香川縣・高松市",
        description: "日本著名的庭園之一，擁有池塘、松林與精緻的日式造景。",
        image: "../images/destinations/ritsurin.jpg"
    },
    {
        name: "鳴門漩渦",
        city: "德島縣・鳴門市",
        description: "因潮汐形成壯觀的海上漩渦，是瀨戶內海著名的自然景觀。",
        image: "../images/destinations/naruto-whirlpools.jpg"
    }
]
,

kyushu: [
    {
        name: "熊本城",
        city: "熊本縣・熊本市",
        description: "日本著名歷史名城，以雄偉的城郭建築與深厚的歷史文化聞名。",
        image: "../images/destinations/kumamoto-castle.jpg"
    },
    {
        name: "由布院溫泉",
        city: "大分縣・由布市",
        description: "以溫泉、特色商店街與金鱗湖的夢幻景色聞名。",
        image: "../images/destinations/yufuin.jpg"
    },
    {
        name: "櫻島",
        city: "鹿兒島縣・鹿兒島市",
        description: "日本著名的活火山之一，能欣賞壯觀的火山地形與海灣景色。",
        image: "../images/destinations/sakurajima.jpg"
    }
]
};

// 找出網址指定的地區
const selectedRegion = regionInfo[region];

// 更新頁面內容
if (selectedRegion) {
    document.getElementById("region-name").textContent =
        selectedRegion.name;

    document.getElementById("region-english").textContent =
        selectedRegion.english;

    document.getElementById("region-description").textContent =
        selectedRegion.description;

    document.title =
        selectedRegion.name + "旅遊指南 | Japan Travel Explorer";
}

// 顯示推薦景點
const destinationList = document.getElementById("destination-list");

if (destinationList && destinationData[region]) {
    destinationList.innerHTML = destinationData[region]
        .map(destination => `
            <div class="destination-card">

                <img
                    src="${destination.image}"
                    alt="${destination.name}"
                    class="destination-image"
                >

                <div class="destination-content">
                    <h3>${destination.name}</h3>

                    <p class="destination-city">
                        ${destination.city}
                    </p>

                    <p class="destination-description">
                        ${destination.description}
                    </p>
                </div>

            </div>
        `)
        .join("");
}
// 如果該地區尚未建立景點資料
if (destinationList && !destinationData[region]) {
    destinationList.innerHTML = `
        <p class="destination-empty">
            景點資料正在準備中，敬請期待。
        </p>
    `;
}
