document.addEventListener("DOMContentLoaded", function() {
    // 1. Вставляем шапку, меню и кнопки
    const headerHTML = `
      <header class="site-header">
        <img src="logo.png" alt="Логотип АНО «МАЦ „Защита"»">
        <div class="site-title">АНО «Межрегиональный антикоррупционный центр „Защита"»</div>
        <div class="site-subtitle">Помощь • Контроль • Взаимодействие</div>
        <div class="header-slogan">
          <span>Беда участника центра — наша проблема.</span>
          <span>Если проблему можно решить —</span>
          <span>мы найдем способ.</span>
        </div>
      </header>

      <nav class="main-nav">
        <a href="index.html" class="nav-home">Главная</a>
        <a href="o-centre.html" class="nav-centre">О центре</a>
        <a href="otkryt-priemnuyu.html" class="nav-priemnaya">Открыть приёмную</a>
        <a href="sozdat-napravlenie.html" class="nav-napravlenie">Создать направление</a>
        <a href="normativy.html" class="nav-normativy">Нормативы</a>
        <a href="kontakty.html" class="nav-kontakty">Контакты</a>
      </nav>

      <div class="cta-buttons">
        <a href="obrashchenie.html" class="cta-btn">Подать обращение</a>
        <a href="soobshchestvo.html" class="cta-btn">Стать участником</a>
      </div>
    `;
    document.getElementById("header-container").innerHTML = headerHTML;

    // 2. Вставляем подвал
    const footerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-nav">
            <a href="index.html">Главная</a>
            <a href="o-centre.html">О центре</a>
            <a href="otkryt-priemnuyu.html">Открыть приёмную</a>
            <a href="sozdat-napravlenie.html">Создать направление</a>
            <a href="normativy.html">Нормативы</a>
            <a href="kontakty.html">Контакты</a>
            <a href="politika.html">Политика конфиденциальности</a>
          </div>
          <div class="contact-info">
            <div class="org-name">АНО «МАЦ „Защита"»</div>
            <p style="font-size:0.9rem; opacity:0.75; margin:0 0 0.75rem;">Автономная некоммерческая организация «Межрегиональный антикоррупционный центр „Защита"». Краснодар.</p>
            <p><a href="mailto:info@anomaz.ru">info@anomaz.ru</a></p>
            <p><a href="tel:+70000000000">+7 (000) 000-00-00</a></p>
          </div>
          <div class="copyright">© 2026 АНО «МАЦ „Защита"». Все права защищены.</div>
        </div>
      </footer>
    `;
    document.getElementById("footer-container").innerHTML = footerHTML;

    // 3. Подсвечиваем активную ссылку
    const page = window.location.pathname.split("/").pop();
    if (page === "index.html" || page === "") document.querySelector(".nav-home")?.classList.add("active");
    if (page === "o-centre.html") document.querySelector(".nav-centre")?.classList.add("active");
    if (page === "otkryt-priemnuyu.html") document.querySelector(".nav-priemnaya")?.classList.add("active");
    if (page === "sozdat-napravlenie.html") document.querySelector(".nav-napravlenie")?.classList.add("active");
    if (page === "normativy.html") document.querySelector(".nav-normativy")?.classList.add("active");
    if (page === "kontakty.html") document.querySelector(".nav-kontakty")?.classList.add("active");
});
