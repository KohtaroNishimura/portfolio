// すべてのsectionを取得
const sections = document.querySelectorAll("section");

// IntersectionObserverを設定
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.3 });

// 各セクションを監視
sections.forEach(section => observer.observe(section));
