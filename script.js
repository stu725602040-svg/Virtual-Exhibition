// ===== Global variables =====
let currentLanguage = "vi";
let currentTheme = "light";
let currentAudio = null;

// ===== Sample data =====
const artworks = [
  {
    id: 1,
    title: "Bác sĩ Phạm Ngọc Thạch",
    description:
      "Nguyên bộ trưởng Bộ Y tế Việt Nam Dân chủ Cộng hòa; Ngày 21/04/1945, tổ chức Thanh niên Tiền phong được thành lập và do bác sĩ Phạm Ngọc Thạch làm Chủ tịch Hội đồng quản trị.",
    category: "characters",
    image: "./image/pham_ngoc_thach.jpg",
  },
  {
    id: 2,
    title: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập",
    description:
      "Khoảng 14h ngày 2/9/1945, tức chỉ sau vài giờ đồng hồ kể từ sự kiện phát xít Nhật kí văn kiện đầu hàng, Chính phủ Lâm thời nước Việt Nam Dân chủ Cộng hòa đã ra mắt quốc dân đồng bào cả nước. Chủ tịch Hồ Chí Minh đọc bản tuyên ngôn độc lập, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.",
    category: "characters",
    image: "./image/chu_tich_hcm.jpg",
  },
  {
    id: 3,
    title: "Nhân dân khắp cả nước nổi dậy giành chính quyền",
    description:
      "Cuộc mít-tinh phát động khởi nghĩa giành chính quyền do Mặt trận Việt Minh tổ chức tại Nhà hát lớn Hà Nội ngày 19/8/1945. (Ảnh: Tư liệu TTXVN)",
    category: "events",
    image: "./image/nha_hat_lon_nhat_hn.jpg",
  },
  {
    id: 4,
    title: "Khởi nghĩa thắng lợi ở Hà Nội",
    description:
      "Ngày 19/8/1945, sau cuộc mít tinh tại Quảng trường Nhà hát Lớn, quần chúng nhân dân Thủ đô đã đánh chiếm Bắc Bộ phủ, cơ quan đầu não của chính quyền tay sai Pháp ở Bắc Bộ. (Nguồn: Tư liệu TTXVN)",
    category: "events",
    image: "./image/khoi_nghia_thang_loi_hn.jpg",
  },

  {
    id: 5,
    title: "Vua Bảo Đại tuyên bố thoái vị",
    description:
      "Ngày 30-5-1945, Vua Bảo Đại thoái vị, trở thành công dân nước Việt Nam Dân chủ Cộng hòa. Việc Bảo Đại thoái vị đã đặt dấu chấm hết cho vương triều Nguyễn – vương triều cuối cùng trong lịch sử phong kiến Việt Nam.",
    category: "events",
    image: "./image/vua_bao_dai.jpg",
  },
  {
    id: 6,
    title:
      "Nhân dân ở nhiều địa phương nổi dậy đánh chiếm kho thóc Nhật để cứu đói",
    description:
      "Từ ngày 9/3/1945, tin tức về sự kiện Nhật đảo chính Pháp tràn ngập các mặt báo. 12/3, Đảng ra chỉ thị: “Nhật Pháp bắn nhau và hành động của chúng ta”. Cao trào kháng Nhật cứu nước được phát động mạnh mẽ trong cả nước. Cả dân tộc bước vào thời kì chuẩn bị chiến lược, tiến tới Tổng khởi nghĩa.",
    category: "events",
    image: "./image/nhat-phap-ban-nhau-va-chi-thi-cua-chung-ta.jpg",
  },
];

const timelineEvents = [
  {
    date: "14/08/1945",
    title: "Khởi nghĩa xảy ra.",
    description:
      "Khởi nghĩa nổ ra tại nhiều xã, huyện ở Quảng Ngãi, Thanh Hóa,...",
  },
  {
    date: "16/08/1945",
    title: "Giải phóng Thái Nguyên",
    description:
      "Võ Nguyên Giáp chỉ huy lực lượng vũ trang tiến về giải phóng thị xã Thái Nguyên.",
  },
  {
    date: "18/08/1945",
    title: "Bốn tỉnh giành được chính quyền",
    description:
      "Bắc Giang, Hải Dương, Hà Tĩnh và Quảng Nam giành được chính quyền ở tỉnh lị sớm nhất cả nước.",
  },
  {
    date: "19/08/1945",
    title: "Khởi nghĩa thắng lợi ở Hà Nội",
    description:
      "Đánh dấu sự thành công của Cách mạng Tháng Tám và sự ra đời của Nhà nước Việt Nam Dân chủ Cộng hòa",
  },
  {
    date: "23/08/1945",
    title: "Khởi nghĩa thắng lợi ở Huế",
    description:
      "Hàng vạn người dân tập trung, lật đổ hoàn toàn chính quyền bù nhìn",
  },
  {
    date: "25/08/1945",
    title: "Giải phóng Sài Gòn",
    description: "Cuộc khởi nghĩa thành công tại Sài Gòn",
  },
  {
    date: "28/08/1945",
    title: "Đồng Nai Thượng và Hà Tiên giành chính quyền",
    description:
      "Đồng Nai Thượng và Hà Tiên là hai tỉnh cuối cùng giành được chính quyền",
  },
  {
    date: "02/09/1945",
    title: "Tuyên ngôn Độc lập",
    description:
      "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa",
  },
];

// (fallback chung – đã cập nhật để khớp nội dung mới)
const quizQuestions = [
  {
    question: "Cách mạng Tháng Tám diễn ra vào năm nào?",
    options: ["1944", "1945", "1946", "1947"],
    correct: 1,
  },
  {
    question: "Ai đã đọc Tuyên ngôn Độc lập ngày 2/9/1945?",
    options: ["Võ Nguyên Giáp", "Phạm Văn Đồng", "Hồ Chí Minh", "Trường Chinh"],
    correct: 2,
  },
  {
    question:
      "Cuộc mít-tinh phát động khởi nghĩa ở Hà Nội diễn ra tại đâu ngày 19/8/1945?",
    options: [
      "Quảng trường Ba Đình",
      "Nhà hát Lớn Hà Nội",
      "Phủ Chủ tịch",
      "Văn Miếu",
    ],
    correct: 1,
  },
  {
    question: "Vua Bảo Đại thoái vị, chấm dứt vương triều nào?",
    options: ["Lý", "Trần", "Nguyễn", "Tây Sơn"],
    correct: 2,
  },
  {
    question: "Chỉ thị ngày 12/3/1945 của Đảng có tên là gì?",
    options: [
      "Sửa đổi lối làm việc",
      "Nhật – Pháp bắn nhau và hành động của chúng ta",
      "Kháng chiến kiến quốc",
      "Toàn dân nổi dậy",
    ],
    correct: 1,
  },
];

// ===== Mỗi nội dung có 1 bộ quiz riêng (key = artwork.id) =====
const quizBank = {
  // 1) Bác sĩ Phạm Ngọc Thạch – Thanh niên Tiền phong 21/04/1945
  1: [
    {
      question:
        "Tổ chức Thanh niên Tiền phong được thành lập vào thời điểm nào theo mô tả?",
      options: ["21/04/1945", "19/08/1945", "02/09/1945", "30/08/1945"],
      correct: 0,
    },
    {
      question:
        "Ai giữ vai trò Chủ tịch Hội đồng quản trị của Thanh niên Tiền phong?",
      options: [
        "Võ Nguyên Giáp",
        "Hồ Chí Minh",
        "Phạm Ngọc Thạch",
        "Phạm Văn Đồng",
      ],
      correct: 2,
    },
    {
      question: "Phạm Ngọc Thạch từng giữ chức vụ bộ trưởng của bộ nào?",
      options: ["Bộ Y tế", "Bộ Giáo dục", "Bộ Quốc phòng", "Bộ Nội vụ"],
      correct: 0,
    },
  ],

  // 2) Chủ tịch HCM đọc Tuyên ngôn Độc lập – 02/09/1945 Ba Đình
  2: [
    {
      question: "Tuyên ngôn Độc lập được đọc vào ngày nào?",
      options: ["19/08/1945", "02/09/1945", "25/08/1945", "30/08/1945"],
      correct: 1,
    },
    {
      question: "Địa điểm đọc Tuyên ngôn Độc lập:",
      options: [
        "Quảng trường Ba Đình",
        "Nhà hát Lớn Hà Nội",
        "Phủ Chủ tịch",
        "Hồ Hoàn Kiếm",
      ],
      correct: 0,
    },
    {
      question: "Sự kiện này khai sinh nhà nước nào?",
      options: [
        "Quốc gia Việt Nam",
        "Việt Nam Cộng hòa",
        "Việt Nam Dân chủ Cộng hòa",
        "Cộng hòa Xã hội chủ nghĩa Việt Nam",
      ],
      correct: 2,
    },
  ],

  // 3) Nhà hát Lớn Hà Nội – mít-tinh của Việt Minh 19/08/1945
  3: [
    {
      question: "Cuộc mít-tinh tại Nhà hát Lớn Hà Nội diễn ra ngày nào?",
      options: ["17/08/1945", "19/08/1945", "23/08/1945", "02/09/1945"],
      correct: 1,
    },
    {
      question: "Tổ chức nào phát động cuộc mít-tinh này?",
      options: [
        "Mặt trận Việt Minh",
        "Đồng Minh",
        "Chính phủ Trần Trọng Kim",
        "VNQDĐ",
      ],
      correct: 0,
    },
    {
      question: "Mục tiêu chính của cuộc mít-tinh là gì?",
      options: [
        "Kêu gọi tổng tuyển cử",
        "Phát động khởi nghĩa giành chính quyền",
        "Ký kết hiệp ước",
        "Kỷ niệm ngày Quốc khánh",
      ],
      correct: 1,
    },
  ],

  // 4) Khởi nghĩa thắng lợi ở Hà Nội – chiếm Bắc Bộ phủ sau mít-tinh
  4: [
    {
      question: "Sau cuộc mít-tinh, quần chúng Hà Nội đã chiếm cơ quan nào?",
      options: ["Bắc Bộ phủ", "Phủ Chủ tịch", "Nhà hát Lớn", "Văn Miếu"],
      correct: 0,
    },
    {
      question: "Thắng lợi ở Hà Nội diễn ra vào ngày nào?",
      options: ["17/08/1945", "19/08/1945", "23/08/1945", "25/08/1945"],
      correct: 1,
    },
    {
      question: "Thắng lợi ở Hà Nội đánh dấu điều gì?",
      options: [
        "Sự thành công quyết định của Cách mạng Tháng Tám tại Thủ đô",
        "Kết thúc Thế chiến II",
        "Ngày Nhật đầu hàng Đồng Minh",
        "Khai sinh nước VNDCCH",
      ],
      correct: 0,
    },
  ],

  // 5) Bảo Đại thoái vị – chấm dứt vương triều Nguyễn
  5: [
    {
      question: "Vua Bảo Đại thoái vị vào thời điểm nào (theo tiêu đề)?",
      options: ["19/08/1945", "23/08/1945", "30/08/1945", "02/09/1945"],
      correct: 2,
    },
    {
      question: "Việc thoái vị đặt dấu chấm hết cho vương triều nào?",
      options: ["Lý", "Trần", "Nguyễn", "Tây Sơn"],
      correct: 2,
    },
    {
      question: "Sau khi thoái vị, Bảo Đại trở thành gì theo mô tả?",
      options: [
        "Quốc vương danh dự",
        "Công dân nước Việt Nam Dân chủ Cộng hòa",
        "Thủ tướng",
        "Toàn quyền Đông Dương",
      ],
      correct: 1,
    },
  ],

  // 6) Cao trào kháng Nhật cứu nước – chỉ thị 12/3/1945, kho thóc Nhật, chuẩn bị Tổng khởi nghĩa
  6: [
    {
      question: "Sự kiện nào xảy ra ngày 9/3/1945?",
      options: [
        "Nhật đảo chính Pháp ở Đông Dương",
        "Pháp đảo chính Nhật",
        "Tổng tuyển cử đầu tiên",
        "Toàn quốc kháng chiến",
      ],
      correct: 0,
    },
    {
      question: "Ngày 12/3/1945, Đảng ra chỉ thị nào được nêu trong mô tả?",
      options: [
        "Sửa đổi lối làm việc",
        "Kháng chiến kiến quốc",
        "Nhật Pháp bắn nhau và hành động của chúng ta",
        "Toàn dân khởi nghĩa",
      ],
      correct: 2,
    },
    {
      question:
        "Hành động nào của nhân dân được nêu để cứu đói trong thời kỳ này?",
      options: [
        "Đánh chiếm kho thóc Nhật",
        "Tổng tuyển cử",
        "Tuyên ngôn Độc lập",
        "Ký Hiệp định Sơ bộ",
      ],
      correct: 0,
    },
  ],
};

// ===== Audio links =====
const audioLinks = {
  muoi_chin_thang_tam: {
    file: "./audio/muoi_chin_thang_tam.mp3",
    youtube: "https://www.youtube.com/watch?v=CVpgfhTZtiM",
    description: "Mười chín tháng Tám",
  },
  cung_nhau_di_hong_binh: {
    file: "./audio/cung_nhau_di_hong_binh.mp3",
    youtube: "https://youtu.be/MK5Pk6yvzug?si=WATik5CwNXgjGUg5",
    description: "Cùng nhau đi Hồng binh",
  },
  len_dang: {
    file: "./audio/len_dang.mp3",
    youtube: "https://www.youtube.com/watch?v=IftlbxhKb3I",
    description: "Lên Đàng",
  },
};

// ===== Quiz state =====
let currentQuestionIndex = 0;
let quizScore = 0;
let isQuizActive = false;
let currentQuiz = []; // <— bộ câu hỏi đang dùng (theo nội dung)

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  initializeWebsite();
  loadGallery();
  loadTimeline();
  setupEventListeners();
});

function initializeWebsite() {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  const savedLanguage = localStorage.getItem("language") || "vi";
  setLanguage(savedLanguage);
  observeElements();
}

// ===== Bắt Đầu Tham Quan => kéo tới Khu Vực Triển Lãm =====
function startTour() {
  const section = document.getElementById("gallery");
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ===== Event listeners =====
function setupEventListeners() {
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document
    .getElementById("langToggle")
    .addEventListener("click", toggleLanguage);

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");
      filterArtworks(filter);
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      this.addEventListener;
      this.classList.add("active");
    });
  });

  document.querySelectorAll(".play-audio-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const audioType = this.getAttribute("data-audio");
      playAudio(audioType, this);
    });
  });

  document.querySelectorAll(".stop-audio-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      stopAudio();
    });
  });

  setupModalControls();
}

// ===== Gallery =====
function loadGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.innerHTML = "";
  artworks.forEach((artwork) =>
    galleryGrid.appendChild(createArtworkCard(artwork))
  );
}

function createArtworkCard(artwork) {
  const card = document.createElement("div");
  card.className = "artwork-card fade-in-up";
  card.setAttribute("data-category", artwork.category);
  card.innerHTML = `
    <div class="artwork-image"><img src="${artwork.image}" alt="${artwork.title}"></div>
    <div class="artwork-info">
      <h3>${artwork.title}</h3>
      <p>${artwork.description}</p>
    </div>`;
  card.addEventListener("click", () => showArtworkModal(artwork));
  return card;
}

function filterArtworks(filter) {
  document.querySelectorAll(".artwork-card").forEach((card) => {
    const category = card.getAttribute("data-category");
    card.style.display =
      filter === "all" || category === filter ? "block" : "none";
    if (card.style.display === "block") card.classList.add("fade-in-up");
  });
}

// ===== Timeline =====
function loadTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";
  timelineEvents.forEach((event) => {
    const el = document.createElement("div");
    el.className = "timeline-event fade-in-up";

    // MẶC ĐỊNH: gộp title + description vào 1 dòng nội dung
    const body = [event.title, event.description].filter(Boolean).join(" — ");

    el.innerHTML = `
      <div class="timeline-content">
        <h3>${event.date}</h3>
        ${body ? `<p>${body}</p>` : ""}
      </div>`;
    timeline.appendChild(el);
  });
}

// ===== Artwork Modal =====
function showArtworkModal(artwork) {
  const modal = document.getElementById("artworkModal");
  document.getElementById("modalArtworkImage").src = artwork.image;
  document.getElementById("modalArtworkImage").alt = artwork.title;
  document.getElementById("modalArtworkTitle").textContent = artwork.title;
  document.getElementById("modalArtworkDescription").textContent =
    artwork.description;
  modal.style.display = "block";
  modal.currentArtwork = artwork; // lưu tác phẩm hiện tại để mở quiz đúng bộ
}

// ===== Modal controls =====
function setupModalControls() {
  document.querySelectorAll(".close").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.closest(".modal").style.display = "none";
      document.body.classList.remove("no-scroll");
    });
  });
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  });
}

// ===== Video =====
function playVideo() {
  const player = document.querySelector(".video-player");
  player.innerHTML = `
    <div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
      <iframe 
        src="https://www.youtube.com/embed/u7kjhRCfj2o?autoplay=1&rel=0&modestbranding=1" 
        title="Diễn Biến Cách Mạng Tháng Tám"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        style="position:absolute;inset:0;width:100%;height:100%;border:0;">
      </iframe>
    </div>`;
}

// ===== Theme & Lang =====
function toggleTheme() {
  setTheme(currentTheme === "light" ? "dark" : "light");
}
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  const themeIcon = document.querySelector("#themeToggle i");
  themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  localStorage.setItem("theme", theme);
}
function toggleLanguage() {
  setLanguage(currentLanguage === "vi" ? "en" : "vi");
}
function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("language", language);
}

// ===== Animations =====
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("fade-in-up");
    });
  });
  document
    .querySelectorAll(
      ".artwork-card, .timeline-event, .audio-card, .document-card"
    )
    .forEach((el) => observer.observe(el));
}

// ===== Audio =====
function playAudio(audioType, button) {
  const audioConfig = audioLinks[audioType];
  if (!audioConfig) {
    alert("Không tìm thấy cấu hình âm thanh cho: " + audioType);
    return;
  }

  if (
    currentAudio &&
    currentAudio.src &&
    currentAudio.src.includes(audioConfig.file.split("/").pop())
  ) {
    if (!currentAudio.paused) {
      currentAudio.pause();
      button.innerHTML = '<i class="fas fa-play"></i>';
      return;
    } else {
      currentAudio.play();
      button.innerHTML = '<i class="fas fa-pause"></i>';
      return;
    }
  }

  if (currentAudio) {
    if (currentAudio.pause) currentAudio.pause();
    document
      .querySelectorAll(".play-audio-btn")
      .forEach((btn) => (btn.innerHTML = '<i class="fas fa-play"></i>'));
  }

  try {
    const audio = new Audio(audioConfig.file);
    audio.onloadstart = () => {
      button.innerHTML = '<div class="loading"></div>';
    };
    audio.oncanplay = () => {
      button.innerHTML = '<i class="fas fa-pause"></i>';
      currentAudio = audio;
      audio.play();
    };
    audio.onended = () => {
      button.innerHTML = '<i class="fas fa-replay"></i>';
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-play"></i>';
      }, 2000);
    };
    audio.onpause = () => {
      button.innerHTML = '<i class="fas fa-play"></i>';
    };
    audio.onerror = () => {
      button.innerHTML = '<i class="fas fa-play"></i>';
      alert(
        `Không tìm thấy file âm thanh: ${audioConfig.file}\n\nBạn có thể xem trên YouTube: ${audioConfig.youtube}`
      );
    };
    audio.load();
  } catch (error) {
    console.error("[Audio] error:", error);
    button.innerHTML = '<i class="fas fa-play"></i>';
    alert("Lỗi phát âm thanh. Vui lòng kiểm tra file hoặc đường dẫn.");
  }
}
function stopAudio() {
  if (currentAudio && currentAudio.pause) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = null;
  document
    .querySelectorAll(".play-audio-btn")
    .forEach((btn) => (btn.innerHTML = '<i class="fas fa-play"></i>'));
}

// ===== Quiz (mở theo từng nội dung) =====
function startQuiz() {
  // Đóng modal tác phẩm trước để tránh chồng lớp
  const artModal = document.getElementById("artworkModal");
  const artwork = artModal?.currentArtwork;

  if (!artwork) {
    // nếu không có tác phẩm hiện tại, fallback bộ chung (hiếm khi xảy ra)
    currentQuiz = quizQuestions.slice();
  } else {
    currentQuiz = (quizBank[artwork.id] || []).slice();
  }

  if (!currentQuiz.length) {
    alert("Tác phẩm này chưa có bộ câu hỏi. Sẽ dùng bộ câu hỏi chung.");
    currentQuiz = quizQuestions.slice();
  }

  if (artModal && artModal.style.display === "block") {
    artModal.style.display = "none";
  }

  const modal = document.getElementById("quizModal");
  modal.style.display = "block";
  document.body.classList.add("no-scroll");

  // reset state
  currentQuestionIndex = 0;
  quizScore = 0;
  isQuizActive = true;

  loadQuizQuestion();
  document.getElementById("nextQuestion").onclick = nextQuestion;
  document.getElementById("restartQuiz").onclick = restartQuiz;
}

function loadQuizQuestion() {
  if (currentQuestionIndex >= currentQuiz.length) {
    showQuizResults();
    return;
  }
  const q = currentQuiz[currentQuestionIndex];
  document.getElementById("questionText").textContent = `Câu ${
    currentQuestionIndex + 1
  }: ${q.question}`;
  const optionsContainer = document.getElementById("quizOptions");
  optionsContainer.innerHTML = "";
  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.textContent = option;
    btn.onclick = () => selectAnswer(i);
    optionsContainer.appendChild(btn);
  });
  updateScoreDisplay();
}

function selectAnswer(selectedIndex) {
  const q = currentQuiz[currentQuestionIndex];
  const options = document.querySelectorAll(".quiz-option-btn");
  options.forEach((btn) => (btn.disabled = true));
  options.forEach((btn, i) => {
    if (i === q.correct) btn.classList.add("correct");
    else if (i === selectedIndex && i !== q.correct)
      btn.classList.add("incorrect");
  });
  if (selectedIndex === q.correct) quizScore++;
  updateScoreDisplay();
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuizQuestion();
}
function restartQuiz() {
  currentQuestionIndex = 0;
  quizScore = 0;
  loadQuizQuestion();
}

function showQuizResults() {
  const total = currentQuiz.length || 1;
  const percentage = Math.round((quizScore / total) * 100);
  document.getElementById(
    "questionText"
  ).textContent = `Hoàn thành! Bạn đạt ${quizScore}/${total} câu đúng (${percentage}%)`;
  document.getElementById("quizOptions").innerHTML = `
    <div class="quiz-result">
      <h3>Kết quả của bạn:</h3>
      <div class="score-circle">${percentage}%</div>
      <p>${
        percentage >= 80
          ? "Xuất sắc!"
          : percentage >= 60
          ? "Khá tốt!"
          : "Cần ôn tập thêm!"
      }</p>
    </div>`;
  isQuizActive = false;
}

function updateScoreDisplay() {
  document.getElementById("scoreDisplay").textContent = `Điểm: ${quizScore}/${
    currentQuestionIndex + 1
  }`;
}

// ===== Share placeholder =====
function shareArtwork() {
  const title =
    document.getElementById("modalArtworkTitle")?.textContent || "tác phẩm";
  alert(`Chia sẻ ${title}`);
}
