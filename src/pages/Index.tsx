export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ХОЛОД*МАСТЕР</div>
        <nav>
          <a href="#services">Услуги</a>
          <a href="#about">Обо мне</a>
          <a href="#reviews">Отзывы</a>
          <a href="#order">Заявка</a>
        </nav>
        <button className="btn-cta">Вызвать мастера</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ХОЛОДИЛЬНИК
              <br />
              СНОВА <span>ЖИВ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Частный мастер с выездом на дом. Чиню любые холодильники — от старой «Бирюсы» до современных No Frost. Диагностика, честная цена, гарантия на работу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Вызвать мастера
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Узнать цену
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ВЫЕЗД
              <br />
              ЗА 1 ЧАС
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ГАРАНТИЯ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              БЕЗ ВЫХОДНЫХ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ВЫЕЗД В ДЕНЬ ОБРАЩЕНИЯ * ГАРАНТИЯ ДО 2 ЛЕТ * ДИАГНОСТИКА БЕСПЛАТНО ПРИ РЕМОНТЕ * ЧЕСТНЫЕ ЦЕНЫ * РАБОТАЮ БЕЗ ВЫХОДНЫХ *
            ВЫЕЗД В ДЕНЬ ОБРАЩЕНИЯ * ГАРАНТИЯ ДО 2 ЛЕТ * ДИАГНОСТИКА БЕСПЛАТНО ПРИ РЕМОНТЕ * ЧЕСТНЫЕ ЦЕНЫ * РАБОТАЮ БЕЗ ВЫХОДНЫХ
          </div>
        </div>

        <section id="services" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ЧТО ЧИНЮ</h2>
            <a
              href="#order"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Оставить заявку
            </a>
          </div>

          <div className="menu-grid">
            {/* Услуга 1 */}
            <div className="menu-card">
              <span className="menu-tag">Чаще всего</span>
              <img
                src="https://cdn.poehali.dev/projects/90758e09-497b-4e45-89ea-b982942c7515/files/cbcd537c-1a8b-4567-a815-2491a4984dc6.jpg"
                alt="Замена компрессора"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Замена компрессора</h3>
                  <span className="price">от 3 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Холодильник не морозит и греется? Подберу и установлю новый компрессор с гарантией.
                </p>
              </div>
            </div>

            {/* Услуга 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Срочно
              </span>
              <img
                src="https://cdn.poehali.dev/projects/90758e09-497b-4e45-89ea-b982942c7515/files/b8049508-e6ed-4b83-8d9d-cde66da2d0d8.jpg"
                alt="Заправка фреоном"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Заправка фреоном</h3>
                  <span className="price">от 1 800 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Найду утечку, устраню и заправлю систему. Холод вернётся в этот же день.
                </p>
              </div>
            </div>

            {/* Услуга 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/90758e09-497b-4e45-89ea-b982942c7515/files/f2095e82-1e57-41d6-a79a-9f88aa68d613.jpg"
                alt="Ремонт электроники"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Электроника и термостат</h3>
                  <span className="price">от 1 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Замена термостата, платы управления, датчиков No Frost. Точная диагностика причины.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="retro-vibe">
          <div>
            <h2 className="vibe-title">МАСТЕР, А НЕ КОНТОРА.</h2>
            <p className="vibe-text">
              Я работаю на себя — без посредников и накруток. 10 лет ремонтирую холодильники всех марок: Atlant, Indesit, Bosch, Samsung, LG. Приезжаю со своим инструментом и запчастями, чиню на месте за один визит. Называю цену сразу, а не после. На все работы — письменная гарантия.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Связаться со мной
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section id="reviews" className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            ОТЗЫВЫ КЛИЕНТОВ
          </h2>
          <div className="menu-grid">
            <div className="menu-card">
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Ирина</h3>
                  <span className="price" style={{ fontSize: "20px" }}>★★★★★</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Приехал в тот же день, заменил компрессор за пару часов. Холодильник работает как новый. Цена честная, без сюрпризов.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Алексей</h3>
                  <span className="price" style={{ fontSize: "20px" }}>★★★★★</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Две другие конторы развели руками, а мастер нашёл утечку фреона и всё починил. Рекомендую!
                </p>
              </div>
            </div>

            <div className="menu-card">
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Марина</h3>
                  <span className="price" style={{ fontSize: "20px" }}>★★★★★</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Вежливый, всё объяснил, дал гарантию на бумаге. Спустя полгода всё отлично работает.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="order">
        <div>
          <div className="footer-logo">ХОЛОД*МАСТЕР</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Частный мастер по ремонту холодильников с выездом на дом. Честно, быстро и с гарантией.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
                Обо мне
              </a>
            </li>
            <li>
              <a href="#reviews" style={{ color: "inherit", textDecoration: "none" }}>
                Отзывы
              </a>
            </li>
            <li>
              <a href="#order" style={{ color: "inherit", textDecoration: "none" }}>
                Заявка
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Режим работы</h4>
          <ul>
            <li>Пн-Пт: 08:00 - 21:00</li>
            <li>Сб-Вс: 09:00 - 20:00</li>
            <li>Выезд в день обращения</li>
            <li>Без выходных</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 ХОЛОД-МАСТЕР</span>
          <span>ГАРАНТИЯ НА РАБОТУ</span>
          <span>ВЫЕЗД НА ДОМ</span>
        </div>
      </footer>
    </>
  );
}