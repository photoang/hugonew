document.addEventListener("DOMContentLoaded", function () {
  // 簡單裝置判斷（只讓桌機觸發）
  const isDesktop = window.innerWidth >= 1024;

  if (!isDesktop) {
    console.log("🚫 非桌機裝置，不啟用圖片放大功能");
    return;
  }

  console.log("🖥️ 啟用桌機圖片放大功能");

  const images = document.querySelectorAll(".click-to-zoom");
  console.log("找到圖片數量：", images.length);

  images.forEach((img) => {
    img.addEventListener("click", function () {
      console.log("點擊圖片了！");

      if (img.classList.contains("zoomed")) {
        img.classList.remove("zoomed");
        img.style.transform = "none";
      } else {
        img.classList.add("zoomed");
        img.style.transform = "scale(1.8)";
      }
    });
  });
});
