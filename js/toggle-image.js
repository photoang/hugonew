document.addEventListener("DOMContentLoaded", function () {
  console.log("📦 JS 已載入");

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
