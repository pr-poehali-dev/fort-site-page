import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/725ac252-e4e2-43f5-a835-2781d88bd4de/files/a0fa155c-416d-4f25-ae50-3b305c99f178.jpg";
const FORT_INTERIOR = "https://cdn.poehali.dev/projects/725ac252-e4e2-43f5-a835-2781d88bd4de/files/f0212ad0-f786-4fff-897f-1c8cebd3b9ad.jpg";

const NAV_LINKS = [
  { label: "О форте", href: "#about" },
  { label: "Экскурсии", href: "#tours" },
  { label: "Галерея", href: "#gallery" },
  { label: "Цены", href: "#prices" },
  { label: "Контакты", href: "#contacts" },
];

const TOURS = [
  {
    title: "Обзорная экскурсия",
    duration: "1.5 часа",
    group: "до 20 чел.",
    desc: "Знакомство с историей форта, основными укреплениями и панорамными видами на Крым.",
    icon: "Eye",
  },
  {
    title: "Историческая экскурсия",
    duration: "3 часа",
    group: "до 15 чел.",
    desc: "Углублённое погружение в военную историю, архивные документы и личные истории защитников.",
    icon: "BookOpen",
  },
  {
    title: "Ночной тур",
    duration: "2 часа",
    group: "до 10 чел.",
    desc: "Атмосферная прогулка при свечах по подземным казематам с историческими инсталляциями.",
    icon: "Moon",
  },
];

const PRICES = [
  { title: "Взрослый билет", price: "600 ₽", note: "" },
  { title: "Детский билет (7–14 лет)", price: "300 ₽", note: "" },
  { title: "Льготный", price: "400 ₽", note: "студенты, пенсионеры" },
  { title: "Групповая экскурсия", price: "от 4 500 ₽", note: "от 8 человек" },
  { title: "Ночной тур", price: "900 ₽", note: "взрослый" },
  { title: "Семейный билет", price: "1 400 ₽", note: "2 взрослых + 2 детей" },
];

const GALLERY_IMGS = [
  { src: HERO_IMG, caption: "Вид с высоты" },
  { src: FORT_INTERIOR, caption: "Внутренние казематы" },
  { src: HERO_IMG, caption: "Закат над фортом" },
  { src: FORT_INTERIOR, caption: "Исторические стены" },
];

interface Comment {
  name: string;
  text: string;
  date: string;
}

const INITIAL_COMMENTS: Comment[] = [
  { name: "Андрей К.", text: "Невероятные впечатления! Экскурсовод знает каждый камень. Обязательно вернёмся.", date: "12 марта 2026" },
  { name: "Мария С.", text: "Ночной тур — это отдельная история. Атмосфера просто фантастическая.", date: "5 марта 2026" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [form, setForm] = useState({ name: "", text: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    const now = new Date();
    const date = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
    setComments([{ name: form.name, text: form.text, date }, ...comments]);
    setForm({ name: "", text: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-[#0e0e0e] text-[#e8e0d0] font-golos min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "linear-gradient(to bottom, rgba(14,14,14,0.95) 0%, transparent 100%)" }}>
        <a href="#" className="font-cormorant text-xl font-semibold tracking-[0.15em] uppercase text-[#c8a96e]">
          Форт Крым
        </a>
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href}
                className="text-sm tracking-widest uppercase text-[#a09880] hover:text-[#c8a96e] transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-[#c8a96e]" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0e0e0e]/98 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              className="font-cormorant text-3xl font-light tracking-widest uppercase text-[#e8e0d0] hover:text-[#c8a96e] transition-colors"
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Форт Крым" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to top, #0e0e0e 0%, rgba(14,14,14,0.5) 50%, rgba(14,14,14,0.2) 100%)"
          }} />
        </div>
        <div className="relative z-10 px-6 md:px-16 pb-20 md:pb-28 max-w-5xl">
          <p className="text-[#c8a96e] text-sm tracking-[0.3em] uppercase mb-4 font-golos">
            Крым · с 1793 года
          </p>
          <h1 className="font-cormorant text-5xl md:text-8xl font-light leading-none mb-6 text-white">
            Форт,<br />
            <em className="italic text-[#c8a96e]">хранящий<br />историю</em>
          </h1>
          <p className="text-[#a09880] text-base md:text-lg max-w-lg leading-relaxed mb-10">
            Два века военной истории Крыма. Экскурсии, исторические туры и незабываемые впечатления.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#tours"
              className="inline-block px-8 py-4 bg-[#c8a96e] text-[#0e0e0e] text-sm tracking-widest uppercase font-semibold hover:bg-[#e2c48a] transition-colors duration-300 text-center">
              Выбрать экскурсию
            </a>
            <a href="#about"
              className="inline-block px-8 py-4 border border-[#c8a96e]/40 text-[#c8a96e] text-sm tracking-widest uppercase hover:border-[#c8a96e] transition-colors duration-300 text-center">
              Узнать больше
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 md:right-16 flex items-center gap-2 text-[#a09880] text-xs tracking-widest">
          <span>Прокрутите вниз</span>
          <Icon name="ArrowDown" size={14} />
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-[#2a2520] py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "1793", label: "Год основания" },
            { num: "230+", label: "Лет истории" },
            { num: "15 000", label: "Гостей в год" },
            { num: "3", label: "Вида экскурсий" },
          ].map(s => (
            <div key={s.num}>
              <div className="font-cormorant text-4xl md:text-5xl font-light text-[#c8a96e]">{s.num}</div>
              <div className="text-xs text-[#6a6055] uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4">О форте</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light leading-tight mb-6">
              Свидетель трёх<br /><em className="italic">великих войн</em>
            </h2>
            <div className="w-12 h-px bg-[#c8a96e] mb-6" />
            <p className="text-[#a09880] leading-relaxed mb-4">
              Форт был возведён в конце XVIII века как часть стратегической оборонительной линии Крымского полуострова. Его каменные стены помнят Крымскую войну, две Мировые и десятки исторических событий.
            </p>
            <p className="text-[#a09880] leading-relaxed">
              Сегодня форт — живой музей под открытым небом. Здесь сохранились подлинные казематы, артиллерийские позиции, подземные ходы и смотровые башни с панорамными видами на море.
            </p>
          </div>
          <div className="relative">
            <img src={FORT_INTERIOR} alt="Интерьер форта"
              className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#c8a96e]/30" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-[#c8a96e]/20" />
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section id="tours" className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4">Программы</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light">Экскурсии</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TOURS.map((t, i) => (
              <div key={i}
                className="border border-[#2a2520] p-8 hover:border-[#c8a96e]/50 transition-colors duration-300 group">
                <div className="w-10 h-10 flex items-center justify-center border border-[#c8a96e]/30 mb-6 group-hover:border-[#c8a96e] transition-colors">
                  <Icon name={t.icon} size={18} className="text-[#c8a96e]" />
                </div>
                <h3 className="font-cormorant text-2xl font-light mb-3">{t.title}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="text-xs text-[#6a6055] flex items-center gap-1">
                    <Icon name="Clock" size={12} /> {t.duration}
                  </span>
                  <span className="text-xs text-[#6a6055] flex items-center gap-1">
                    <Icon name="Users" size={12} /> {t.group}
                  </span>
                </div>
                <p className="text-[#6a6055] text-sm leading-relaxed">{t.desc}</p>
                <div className="mt-6 pt-6 border-t border-[#2a2520]">
                  <button className="text-[#c8a96e] text-xs tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all">
                    Записаться <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4">Визуальная история</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light">Галерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_IMGS.map((img, i) => (
              <div key={i} className="relative overflow-hidden group aspect-square">
                <img src={img.src} alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                  <span className="text-white text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4">Стоимость</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light">Цены</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {PRICES.map((p, i) => (
              <div key={i} className="flex items-center justify-between border border-[#2a2520] px-6 py-5 hover:border-[#c8a96e]/30 transition-colors">
                <div>
                  <div className="text-[#e8e0d0] font-medium">{p.title}</div>
                  {p.note && <div className="text-xs text-[#6a6055] mt-0.5">{p.note}</div>}
                </div>
                <div className="font-cormorant text-2xl font-light text-[#c8a96e]">{p.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-[#6a6055] text-sm">Дети до 7 лет — бесплатно · Аудиогид включён в стоимость</p>
          </div>
        </div>
      </section>

      {/* COMMENTS */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4">Отзывы</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light">Что говорят гости</h2>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleSubmit} className="border border-[#2a2520] p-6 md:p-8 mb-10">
            <h3 className="font-cormorant text-2xl font-light mb-6">Оставить отзыв</h3>
            <div className="mb-4">
              <label className="text-xs text-[#6a6055] tracking-widest uppercase block mb-2">Ваше имя</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border border-[#2a2520] px-4 py-3 text-sm text-[#e8e0d0] focus:outline-none focus:border-[#c8a96e] transition-colors placeholder:text-[#3a3530]"
                placeholder="Иван Иванов"
              />
            </div>
            <div className="mb-6">
              <label className="text-xs text-[#6a6055] tracking-widest uppercase block mb-2">Ваш отзыв</label>
              <textarea
                value={form.text}
                onChange={e => setForm({ ...form, text: e.target.value })}
                rows={4}
                className="w-full bg-transparent border border-[#2a2520] px-4 py-3 text-sm text-[#e8e0d0] focus:outline-none focus:border-[#c8a96e] transition-colors resize-none placeholder:text-[#3a3530]"
                placeholder="Поделитесь впечатлениями о посещении..."
              />
            </div>
            {submitted && (
              <div className="mb-4 text-sm text-[#c8a96e] flex items-center gap-2">
                <Icon name="CheckCircle" size={16} /> Спасибо за ваш отзыв!
              </div>
            )}
            <button type="submit"
              className="px-8 py-4 bg-[#c8a96e] text-[#0e0e0e] text-sm tracking-widest uppercase font-semibold hover:bg-[#e2c48a] transition-colors duration-300">
              Отправить отзыв
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((c, i) => (
              <div key={i} className="border-l-2 border-[#c8a96e]/30 pl-6 py-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-cormorant text-lg font-light text-[#e8e0d0]">{c.name}</span>
                  <span className="text-xs text-[#6a6055]">{c.date}</span>
                </div>
                <p className="text-[#a09880] text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4">Как нас найти</p>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["Республика Крым", "пос. Форт, д. 1"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 9:00–18:00", "Сб–Вс: 9:00–20:00"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (000) 000-00-00", "info@fort-krym.ru"] },
            ].map((c, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 border border-[#2a2520] flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name={c.icon} size={16} className="text-[#c8a96e]" />
                </div>
                <div>
                  <div className="text-xs text-[#6a6055] tracking-widest uppercase mb-2">{c.title}</div>
                  {c.lines.map((l, j) => (
                    <div key={j} className="text-[#a09880] text-sm leading-relaxed">{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2a2520] py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-lg text-[#c8a96e] tracking-[0.15em] uppercase">Форт Крым</span>
          <span className="text-[#3a3530] text-xs">© 2026 Все права защищены</span>
          <div className="flex gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-xs text-[#3a3530] hover:text-[#6a6055] transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
