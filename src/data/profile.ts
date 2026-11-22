type Link = { label: string; href?: string };
type Project = {
  title: string;
  description: string;
  stack: string[];
  image: { file: string; alt: string };
  links: Link[];
};
type Profile = {
  name: string;
  mark: string;
  role: string;
  intro: string;
  avatar: { src: string; alt: string };
  about: string[];
  skills: { title: string; items: string[] }[];
  projects: Project[];
  experience: { place: string; role: string; period: string; results: string[] }[];
  contacts: Link[];
  source: string;
};

export const profile: Profile = {
  name: 'Микита',
  mark: 'М',
  role: 'Фронтенд-разработчик',
  intro: 'Делаю интерфейсы, которыми удобно пользоваться. Люблю ясную типографику, продуманные детали и простой код.',
  avatar: { src: 'https://github.com/mykytassss.png', alt: 'Аватар Микиты на GitHub' },
  about: [
    'Мне интересно превращать идеи в понятные веб-интерфейсы: от первого наброска до страницы, которую можно открыть на любом устройстве.',
    'В работе ценю доступность, быстрые загрузки и компоненты, которые легко поддерживать. Это первая версия портфолио: проекты, опыт и часть контактов пока приведены для примера.',
  ],
  skills: [
    { title: 'Языки', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
    { title: 'Фреймворки', items: ['Astro', 'React'] },
    { title: 'Инструменты', items: ['Git', 'Figma', 'DevTools'] },
  ],
  projects: [
    {
      title: 'Личный дашборд',
      description: 'Главный экран для задач, заметок и планов на неделю.',
      stack: ['TypeScript', 'React'],
      image: { file: 'dashboard.svg', alt: 'Макет панели с графиком и списком задач' },
      links: [{ label: 'Демо' }, { label: 'GitHub' }],
    },
    {
      title: 'Каталог студии',
      description: 'Адаптивный каталог работ с фильтрами по формату и тематике.',
      stack: ['Astro', 'CSS'],
      image: { file: 'catalog.svg', alt: 'Макет каталога с карточками работ' },
      links: [{ label: 'Демо' }, { label: 'GitHub' }],
    },
    {
      title: 'Заметки о вебе',
      description: 'Небольшой сайт для записей о вёрстке и доступности.',
      stack: ['Astro', 'Markdown'],
      image: { file: 'notes.svg', alt: 'Макет блога со списком заметок' },
      links: [{ label: 'Демо' }, { label: 'GitHub' }],
    },
  ],
  experience: [
    {
      place: 'Учебная команда',
      role: 'Фронтенд-разработчик',
      period: '2024 — настоящее время',
      results: ['Собрал адаптивные страницы из повторно используемых компонентов.', 'Проверил навигацию с клавиатуры и добавил состояния фокуса.'],
    },
    {
      place: 'Самостоятельная практика',
      role: 'Учебные веб-проекты',
      period: '2023 — 2024',
      results: ['Сверстал первые сайты по макетам и опубликовал статическую сборку.'],
    },
  ],
  contacts: [
    { label: 'E-mail' },
    { label: 'GitHub', href: 'https://github.com/mykytassss' },
    { label: 'Telegram' },
    { label: 'LinkedIn' },
  ],
  source: 'https://github.com/mykytassss/portfolio',
};

export const copy = {
  lang: 'ru',
  metaTitle: 'Микита — фронтенд-разработчик',
  metaDescription: 'Портфолио Микиты: веб-интерфейсы, навыки, проекты, опыт и контакты.',
  skip: 'Перейти к содержанию',
  home: 'На главную',
  nav: 'Основная навигация',
  theme: 'Тёмная тема',
  heroLabel: 'Портфолио / 01',
  greeting: 'Привет, я',
  contactAction: 'Связаться',
  about: 'Обо мне',
  skills: 'Навыки',
  projects: 'Проекты',
  exampleProjects: 'Примеры проектов · ссылки появятся после обновления портфолио.',
  experience: 'Опыт',
  exampleExperience: 'Пример оформления опыта.',
  contacts: 'Контакты',
  contactIntro: 'Пока со мной можно связаться через GitHub. Остальные контакты появятся позже.',
  source: 'Исходный код',
  soon: 'скоро',
  newTab: '(откроется в новой вкладке)',
};
