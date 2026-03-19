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
  { name: "Семья Петровых", text: "Приехали с детьми — дети в восторге! Детский гид очень понятно объяснял. Спасибо!", date: "1 марта 2026" },
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
    <div className="bg-white text-[#1a1a2e] font-roboto min-h-screen">

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-[#1a1a2e] text-white py-2 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a href="tel:+70000000000" className="flex items-center gap-1.5 hover:text-[#e8b84b] transition-colors">
                <Icon name="Phone" size={12} />
                +7 (000) 000-00-00
              </a>
              <a href="mailto:info@fort-krym.ru" className="hidden md:flex items-center gap-1.5 hover:text-[#e8b84b] transition-colors">
                <Icon name="Mail" size={12} />
                info@fort-krym.ru
              </a>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <Icon name="MapPin" size={12} />
              <span className="hidden sm:inline">Республика Крым</span>
            </div>
          </div>
        </div>
        {/* Main nav */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a1a2e] flex items-center justify-center rounded">
              <Icon name="Shield" size={20} className="text-[#e8b84b]" />
            </div>
            <div>
              <div className="font-montserrat font-800 text-lg leading-tight text-[#1a1a2e] font-extrabold">
                ФОРТ КРЫМ
              </div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase leading-none">
                Исторические экскурсии
              </div>
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href}
                  className="px-4 py-2 text-sm font-montserrat font-medium text-[#333] hover:text-[#1a1a2e] hover:bg-gray-100 rounded transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#tours"
            className="hidden md:inline-block px-5 py-2.5 bg-[#e8b84b] text-[#1a1a2e] text-sm font-montserrat font-bold rounded hover:bg-[#f5ca60] transition-colors">
            Записаться
          </a>

          <button className="md:hidden text-[#1a1a2e]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 gap-2">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              className="py-3 border-b border-gray-100 font-montserrat font-semibold text-[#1a1a2e] text-lg"
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#tours" className="mt-4 py-4 bg-[#e8b84b] text-[#1a1a2e] font-montserrat font-bold text-center rounded">
            Записаться на экскурсию
          </a>
        </div>
      )}

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 z-10">
            <div className="inline-block bg-[#e8b84b]/20 text-[#b8860b] text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
              Крым · с 1793 года
            </div>
            <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold leading-tight text-[#1a1a2e] mb-4">
              Откройте историю<br />
              <span className="text-[#e8b84b]">Форта Крым!</span>
            </h1>
            <p className="text-[#555] text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Два века военной истории Крымского полуострова. Экскурсии для всей семьи, исторические туры и незабываемые впечатления.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#tours"
                className="px-8 py-4 bg-[#e8b84b] text-[#1a1a2e] font-montserrat font-bold text-sm rounded hover:bg-[#f5ca60] transition-colors text-center shadow-md">
                Выбрать экскурсию
              </a>
              <a href="#about"
                className="px-8 py-4 border-2 border-[#1a1a2e] text-[#1a1a2e] font-montserrat font-semibold text-sm rounded hover:bg-[#1a1a2e] hover:text-white transition-colors text-center">
                О форте
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8">
              {[
                { num: "230+", label: "лет истории" },
                { num: "15 000", label: "гостей в год" },
                { num: "3", label: "вида туров" },
              ].map(s => (
                <div key={s.num} className="text-center">
                  <div className="font-montserrat font-extrabold text-2xl text-[#1a1a2e]">{s.num}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={HERO_IMG} alt="Форт Крым" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e8b84b] rounded-full flex items-center justify-center">
                <Icon name="Star" size={18} className="text-[#1a1a2e]" />
              </div>
              <div>
                <div className="font-montserrat font-bold text-sm">4.9 / 5.0</div>
                <div className="text-xs text-gray-500">Рейтинг гостей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-[#e8b84b] text-xs font-montserrat font-semibold tracking-widest uppercase mb-2">История</div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-[#1a1a2e] mb-4">
              О форте
            </h2>
            <div className="w-16 h-1 bg-[#e8b84b] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={FORT_INTERIOR} alt="Интерьер форта" className="w-full rounded-2xl shadow-xl aspect-[4/3] object-cover" />
              <div className="absolute top-4 left-4 bg-[#e8b84b] text-[#1a1a2e] font-montserrat font-bold px-4 py-2 rounded-lg text-sm shadow">
                с 1793 года
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Форт был возведён в конце XVIII века как часть стратегической оборонительной линии Крымского полуострова. Его каменные стены помнят Крымскую войну, две Мировые и десятки исторических событий.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Сегодня форт — живой музей под открытым небом. Здесь сохранились подлинные казематы, артиллерийские позиции, подземные ходы и смотровые башни с панорамными видами на море.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Building2", label: "Подлинные казематы" },
                  { icon: "Binoculars", label: "Смотровые башни" },
                  { icon: "Compass", label: "Подземные ходы" },
                  { icon: "Waves", label: "Вид на море" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#f5f0e8] rounded-xl p-3">
                    <div className="w-8 h-8 bg-[#e8b84b] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={f.icon} size={16} className="text-[#1a1a2e]" />
                    </div>
                    <span className="text-sm font-medium text-[#1a1a2e]">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOURS */}
      <section id="tours" className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-[#e8b84b] text-xs font-montserrat font-semibold tracking-widest uppercase mb-2">Программы</div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-[#1a1a2e] mb-4">Экскурсии</h2>
            <div className="w-16 h-1 bg-[#e8b84b] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TOURS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-7 flex flex-col">
                <div className="w-14 h-14 bg-[#1a1a2e] rounded-xl flex items-center justify-center mb-5">
                  <Icon name={t.icon} size={24} className="text-[#e8b84b]" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#1a1a2e] mb-2">{t.title}</h3>
                <div className="flex gap-3 mb-3">
                  <span className="text-xs bg-[#f5f0e8] text-[#555] px-3 py-1 rounded-full flex items-center gap-1">
                    <Icon name="Clock" size={11} /> {t.duration}
                  </span>
                  <span className="text-xs bg-[#f5f0e8] text-[#555] px-3 py-1 rounded-full flex items-center gap-1">
                    <Icon name="Users" size={11} /> {t.group}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{t.desc}</p>
                <button className="mt-5 w-full py-3 bg-[#e8b84b] text-[#1a1a2e] font-montserrat font-bold text-sm rounded-xl hover:bg-[#f5ca60] transition-colors">
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-[#e8b84b] text-xs font-montserrat font-semibold tracking-widest uppercase mb-2">Фотографии</div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-[#1a1a2e] mb-4">Галерея</h2>
            <div className="w-16 h-1 bg-[#e8b84b] mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_IMGS.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl group aspect-square">
                <img src={img.src} alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#1a1a2e]/0 group-hover:bg-[#1a1a2e]/50 transition-colors duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-16 md:py-24 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-[#e8b84b] text-xs font-montserrat font-semibold tracking-widest uppercase mb-2">Стоимость</div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-white mb-4">Цены</h2>
            <div className="w-16 h-1 bg-[#e8b84b] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {PRICES.map((p, i) => (
              <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:border-[#e8b84b]/50 transition-colors">
                <div>
                  <div className="text-white font-medium text-sm">{p.title}</div>
                  {p.note && <div className="text-xs text-gray-400 mt-0.5">{p.note}</div>}
                </div>
                <div className="font-montserrat font-extrabold text-xl text-[#e8b84b]">{p.price}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">Дети до 7 лет — бесплатно · Аудиогид включён в стоимость</p>
        </div>
      </section>

      {/* COMMENTS */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-[#e8b84b] text-xs font-montserrat font-semibold tracking-widest uppercase mb-2">Отзывы</div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-[#1a1a2e] mb-4">
              Что говорят гости
            </h2>
            <div className="w-16 h-1 bg-[#e8b84b] mx-auto" />
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <h3 className="font-montserrat font-bold text-xl text-[#1a1a2e] mb-5">Оставить отзыв</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-xs font-montserrat font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Ваше имя</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#e8b84b] transition-colors bg-gray-50"
                  placeholder="Иван Иванов"
                />
              </div>
              <div className="mb-5">
                <label className="text-xs font-montserrat font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Ваш отзыв</label>
                <textarea
                  value={form.text}
                  onChange={e => setForm({ ...form, text: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#e8b84b] transition-colors resize-none bg-gray-50"
                  placeholder="Поделитесь впечатлениями..."
                />
              </div>
              {submitted && (
                <div className="mb-4 text-sm text-green-600 flex items-center gap-2 bg-green-50 px-4 py-3 rounded-xl">
                  <Icon name="CheckCircle" size={16} /> Спасибо за ваш отзыв!
                </div>
              )}
              <button type="submit"
                className="w-full py-4 bg-[#e8b84b] text-[#1a1a2e] font-montserrat font-bold text-sm rounded-xl hover:bg-[#f5ca60] transition-colors shadow-md">
                Отправить отзыв
              </button>
            </form>
          </div>

          {/* Comments */}
          <div className="space-y-4">
            {comments.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-5 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1a1a2e] rounded-full flex items-center justify-center text-[#e8b84b] font-montserrat font-bold text-sm flex-shrink-0">
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-montserrat font-bold text-sm text-[#1a1a2e]">{c.name}</div>
                      <div className="flex gap-0.5 mt-0.5">
                        {[1,2,3,4,5].map(s => (
                          <Icon key={s} name="Star" size={10} className="text-[#e8b84b] fill-[#e8b84b]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{c.date}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-[#e8b84b] text-xs font-montserrat font-semibold tracking-widest uppercase mb-2">Как нас найти</div>
            <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-[#1a1a2e] mb-4">Контакты</h2>
            <div className="w-16 h-1 bg-[#e8b84b] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["Республика Крым", "пос. Форт, д. 1"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 9:00–18:00", "Сб–Вс: 9:00–20:00"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (000) 000-00-00", "info@fort-krym.ru"] },
            ].map((c, i) => (
              <div key={i} className="text-center bg-[#f5f0e8] rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#e8b84b] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={c.icon} size={20} className="text-[#1a1a2e]" />
                </div>
                <div className="font-montserrat font-bold text-sm text-[#1a1a2e] mb-2">{c.title}</div>
                {c.lines.map((l, j) => (
                  <div key={j} className="text-gray-500 text-sm leading-relaxed">{l}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a2e] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e8b84b] flex items-center justify-center rounded">
                <Icon name="Shield" size={20} className="text-[#1a1a2e]" />
              </div>
              <div>
                <div className="font-montserrat font-extrabold text-lg">ФОРТ КРЫМ</div>
                <div className="text-[10px] text-gray-400 tracking-widest uppercase">Исторические экскурсии</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-[#e8b84b] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
            <span className="text-gray-500 text-xs">© 2026 Форт Крым. Все права защищены.</span>
            <span className="text-gray-500 text-xs">Крым, Россия</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
