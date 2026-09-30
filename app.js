/**
 * 【設定ファイル兼アプリケーションロジック】
 * このファイルの CONFIG オブジェクトを編集することで、Webページの内容を更新できます。
 * HTMLやCSSを編集する必要はありません。
 */

const CONFIG = {
    // お店の基本情報
    shopName: "名の無いタコスとバーガー屋",
    subtitle: "旅するタコスとバーガー屋",
    
    // お知らせ（空文字 "" の場合は非表示になります）
    announcement: "", // 例: "※本日は雨天のため、15時までの営業となります。"
  
    // ------------------------------------------------------------
    // 1. 料理メニューの登録
    // id: 料理を識別する一意の英数字
    // name: 料理名
    // description: 料理の説明
    // price: 価格（数値）
    // ※画像について: assets フォルダ内に「料理のID.jpg」（例: taco-01.jpg）という名前で
    // 画像ファイルを配置するだけで自動的に反映されます。
    // 画像ファイルが存在しない場合は自動で非表示になります。
    // ------------------------------------------------------------
    foods: [
      {
        id: "taco-01",
        name: "ファヒータタコス",
        description: "自家製のパプリカのチリソース、パプリカのマリネとオリーブをトッピングした野菜の甘みを生かしたタコス",
        price: 600,
        image: "IMG_4308.JPG"
      },
      {
        id: "burger-01",
        name: "メキシカンクランチバーガー",
        description: "トルティーヤチップスのザクザク食感に、<br>肉々しく焼き上げたパティ。<br>とろっと絡む目玉焼きと、アボカドタルタル&クリームチーズソースのまろやかさが重なります。<br>そこへサルサの爽やかな酸味と、<br>チリソースのピリッとした辛さ。<br>最後にふわっと広がるパクチーの香りが、いいアクセントに。",
        price: 1600,
        image: "IMG_4451.JPG",
        isSpecial: true
      },
      {
        id: "taco-02",
        name: "カルニタスタコス",
        description: "30時間煮込んだ豚の肩ロースに自家製サルサとピクルスオニオン、パクチーをトッピングした王道のタコス",
        price: 600,
        image: "IMG_4309.JPG"
      },
      {
        id: "taco-03",
        name: "セビーチェタコス",
        description: "ライムとレモンで漬け込んだスパイスの効いたえびにアボカドのタルタルソースを添えたサッパリしたタコス",
        price: 600,
        image: "IMG_4310.jpg"
      },
      {
        id: "burger-02",
        name: "バーベキューバーガー",
        description: "20種類以上のスパイスが香る自家製BBQソースに、甘さ際立つ特製コールスローソース。スモーキーな香りと甘さが重なる、奥行き豊かなBBQバーガー。<br>上記の画像は、おすすめのトッピングを乗たものです。<br>おすすめのトッピングはハラペーニョとプルドポーク。",
        price: 1400,
        image: "IMG_4513.JPG"
      },
      {
        id: "burger-03",
        name: "チーズバーガー",
        description: "肉の旨みとチーズのコクに、玉ねぎと赤ワインのコンフィの甘酸っぱさを重ねて。コチュジャンの甘辛さとスパイスが香る特製マヨソースで、頬張る楽しさをもうひとつ。<br>上記の画像は、おすすめのトッピングを乗せたものです。<br>おすすめのトッピングはアボカド。",
        price: 1350,
        image: "IMG_4514.JPG"
      },
      {
        id: "burger-04",
        name: "テリヤキバーガー",
        description: "自家製みたらし餡の甘じょっぱさに、レモンの酸味とごま油がほのかに香る、まろやかなマヨソース。ふたつの味が肉の旨味に重なる、王道でいて新しい一品。<br>上記の画像は、おすすめのトッピングを乗せたものです。<br>おすすめのトッピングは目玉焼き",
        price: 1300,
        image: "IMG_4515.JPG"
      }
    ],
  
    // ------------------------------------------------------------
    // 2. 出店予定の登録
    // date: "YYYY-MM-DD" 形式で入力してください。
    // foods: その日に提供する料理のIDを配列で指定します。
    // ------------------------------------------------------------
    events: [
        // --- 旅びと食堂ぷらっつなかせん ---
        ...([4, 5, 6, 8, 9, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(d => ({
            city: "尾鷲市",
            date: `2026-10-${d.toString().padStart(2, '0')}`,
            openTime: "11:00 - 15:00",
            venue: "旅びと食堂ぷらっつなかせん",
            address: "三重県尾鷲市中井町2-13",
            mapUrl: "https://maps.google.com/?q=三重県尾鷲市中井町2-13",
            foods: ["taco-01", "burger-01", "taco-02", "taco-03", "burger-02", "burger-03", "burger-04"],
            colorClass: "platts" // カレンダーの色分け用クラス
        }))),
        
        // --- サンキッチン ---
        ...([12, 13, 14, 15, 16, 17, 18].map(d => ({
            city: "丹波市",
            date: `2026-10-${d.toString().padStart(2, '0')}`,
            openTime: "11:00 - 17:00",
            venue: "サンキッチン",
            address: "兵庫県丹波市山南町池谷117-8",
            mapUrl: "https://maps.google.com/?q=兵庫県丹波市山南町池谷117-8",
            foods: ["taco-01", "burger-01", "taco-02", "taco-03", "burger-02", "burger-03", "burger-04"], // 全て設定
            colorClass: "sunk" // カレンダーの色分け用クラス
        })))
    ],
  
    // ------------------------------------------------------------
    // 3. よく行く出店場所（固定枠4つ）
    // カレンダーの下に固定で表示しておく場所と営業時間を指定します。
    // ------------------------------------------------------------
    customLocations: [
        {
            name: "旅びと食堂ぷらっつなかせん",
            hours: "11:00 - 15:00",
            address: "三重県尾鷲市中井町2-13"
        },
        {
            name: "サンキッチン",
            hours: "11:00 - 17:00",
            address: "兵庫県丹波市山南町池谷117-8"
        },
        {
            name: "（出店先 募集中）",
            hours: "-",
            address: "現在、新規出店先を探しています"
        },
        {
            name: "（出店先 募集中）",
            hours: "-",
            address: "現在、新規出店先を探しています"
        }
    ]
  };
  
  // =========================================================
  // アプリケーションロジック（通常は編集不要です）
  // =========================================================
  
  let currentDisplayedDate = new Date(); // カレンダー表示用
  
  document.addEventListener('DOMContentLoaded', () => {
      initApp();
  });
  
  function initApp() {
      // 1. 基本情報のセット
      document.getElementById('shop-name').textContent = CONFIG.shopName;
      document.getElementById('shop-subtitle').textContent = CONFIG.subtitle;
  
      // 2. お知らせのセット
      if (CONFIG.announcement && CONFIG.announcement.trim() !== "") {
          const annSection = document.getElementById('announcement-section');
          document.getElementById('announcement-text').textContent = CONFIG.announcement;
          annSection.classList.remove('hidden');
      }
  
      // 3. 日付処理と予定のフィルタリング
      const today = new Date();
      today.setHours(0, 0, 0, 0);
  
      // 過去のイベントを除外して日付順にソート
      const upcomingEvents = CONFIG.events
          .map(event => {
              const eventDate = new Date(event.date);
              eventDate.setHours(0, 0, 0, 0);
              return { ...event, parsedDate: eventDate };
          })
          .filter(event => event.parsedDate >= today)
          .sort((a, b) => a.parsedDate - b.parsedDate);
  
      // 4. 次回の出店・料理の描画
      if (upcomingEvents.length === 0) {
          document.getElementById('empty-state-section').classList.remove('hidden');
          document.getElementById('next-event-section').classList.add('hidden');
      } else {
          const nextEvent = upcomingEvents[0];
          renderNextEvent(nextEvent);
  
          if (nextEvent.foods && nextEvent.foods.length > 0) {
              renderFoods(nextEvent.foods);
          }
      }

      // 5. カレンダーの初期化と描画
      setupCalendarControls();
      renderCalendar();
      
      // 6. 固定枠（よく行く出店場所）の描画
      if (document.getElementById('custom-locations-section')) {
          renderCustomLocations();
      }
  }

  function renderCustomLocations() {
      const container = document.getElementById('custom-locations-container');
      const section = document.getElementById('custom-locations-section');
      
      if (!CONFIG.customLocations || CONFIG.customLocations.length === 0) {
          return;
      }
      
      let html = "";
      CONFIG.customLocations.forEach(loc => {
          html += `
              <div class="location-card">
                  <div class="location-name">${loc.name}</div>
                  <div class="location-info">
                      <span class="icon">⏰</span>
                      <span>${loc.hours}</span>
                  </div>
                  <div class="location-info">
                      <span class="icon">📍</span>
                      <span>${loc.address}</span>
                  </div>
              </div>
          `;
      });
      
      container.innerHTML = html;
      section.classList.remove('hidden');
  }
  
  function formatDate(dateObj) {
      const month = dateObj.getMonth() + 1;
      const date = dateObj.getDate();
      const days = ['日', '月', '火', '水', '木', '金', '土'];
      const dayStr = days[dateObj.getDay()];
      return `${month}月${date}日(${dayStr})`;
  }
  
  function renderNextEvent(event) {
      const section = document.getElementById('next-event-section');
      const dateStr = formatDate(event.parsedDate);
      
      let mapButtonHtml = "";
      if (event.mapUrl && event.mapUrl.trim() !== "") {
          mapButtonHtml = `<a href="${event.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn">Googleマップで会場を見る</a>`;
      }
  
      const html = `
          <div class="next-event-card">
              <div class="next-event-header">
                  <h3>次の旅先は ${event.city}</h3>
              </div>
              <div class="next-event-body">
                  <div class="info-row">
                      <div class="info-icon">📅</div>
                      <div class="info-content">
                          <div class="info-label">営業日</div>
                          <div class="info-value large">${dateStr}</div>
                      </div>
                  </div>
                  <div class="info-row">
                      <div class="info-icon">⏰</div>
                      <div class="info-content">
                          <div class="info-label">営業時間</div>
                          <div class="info-value">${event.openTime}</div>
                      </div>
                  </div>
                  <div class="info-row">
                      <div class="info-icon">🎪</div>
                      <div class="info-content">
                          <div class="info-label">会場名</div>
                          <div class="info-value">${event.venue}</div>
                          ${event.address ? `<div style="font-size:12px; color:#666; margin-top:4px;">${event.address}</div>` : ''}
                      </div>
                  </div>
                  ${mapButtonHtml}
              </div>
          </div>
      `;
      section.innerHTML = html;
      section.classList.remove('hidden');
  }
  
  function renderFoods(foodIds) {
      const container = document.getElementById('foods-container');
      const section = document.getElementById('foods-section');
      
      let specialHtml = "";
      let normalHtml = "";
      
      foodIds.forEach(id => {
          const food = CONFIG.foods.find(f => f.id === id);
          if (food) {
              const imgFile = food.image ? food.image : `${food.id}.jpg`;
              let imageHtml = `
                  <div class="food-image-wrapper">
                      <img src="assets/${imgFile}" alt="${food.name}" onerror="this.parentElement.style.display='none';">
                  </div>
              `;
              
              let cardClass = food.isSpecial ? "food-card special" : "food-card";
              let badgeHtml = food.isSpecial ? '<div class="special-badge">SPECIAL</div>' : '';
              
              let cardHtml = `
                  <div class="${cardClass}" data-id="${food.id}">
                      ${badgeHtml}
                      ${imageHtml}
                      <div class="food-body">
                          <h4 class="food-name">${food.name}</h4>
                          <p class="food-desc">${food.description}</p>
                          <div class="food-price">&yen;${food.price.toLocaleString()}</div>
                      </div>
                  </div>
              `;

              if (food.isSpecial) {
                  specialHtml += cardHtml;
              } else {
                  normalHtml += cardHtml;
              }
          }
      });

      html = specialHtml + normalHtml;
  
      if (html !== "") {
          container.innerHTML = html;
          section.classList.remove('hidden');
      }
  }
  
  /* --- カレンダーのロジック --- */
  function setupCalendarControls() {
      document.getElementById('prev-month').addEventListener('click', () => {
          currentDisplayedDate.setMonth(currentDisplayedDate.getMonth() - 1);
          renderCalendar();
      });
      document.getElementById('next-month').addEventListener('click', () => {
          currentDisplayedDate.setMonth(currentDisplayedDate.getMonth() + 1);
          renderCalendar();
      });
  }

  function renderCalendar() {
      const grid = document.getElementById('calendar-grid');
      const title = document.getElementById('calendar-month-title');
      
      const year = currentDisplayedDate.getFullYear();
      const month = currentDisplayedDate.getMonth();
      
      title.textContent = `${year}年 ${month + 1}月`;
      
      // 曜日ヘッダー
      const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
      let html = '';
      daysOfWeek.forEach(day => {
          html += `<div class="cal-day-header">${day}</div>`;
      });
      
      // カレンダーの計算
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      // 空白セル（前月分）
      for (let i = 0; i < firstDay; i++) {
          html += `<div class="cal-cell empty"></div>`;
      }
      
      const today = new Date();
      
      // 日付セル
      for (let d = 1; d <= daysInMonth; d++) {
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
          
          // イベントを検索
          const eventForDay = CONFIG.events.find(e => e.date === dateStr);
          
          let classes = ['cal-cell'];
          if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === d) {
              classes.push('today');
          }
          
          if (eventForDay && eventForDay.colorClass) {
              classes.push(eventForDay.colorClass);
          }
          
          let onclick = '';
          if (eventForDay) {
              // 簡単な詳細をアラートで表示（またはUI拡張可能）
              onclick = `onclick="alert('${eventForDay.venue}\\n営業時間: ${eventForDay.openTime}')"`;
          }
          
          html += `<div class="${classes.join(' ')}" ${onclick}>${d}</div>`;
      }
      
      grid.innerHTML = html;
  }
