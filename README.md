# Портфолио Микиты

Одностраничное портфолио на Astro и TypeScript. В версии 0.1 проекты, опыт и часть контактов приведены как примеры, а не как сведения о Миките. [Дизайн-док](docs/design-doc.md).

## Локальный запуск

Нужен Node.js 24.14 или новее из ветки 24.

```sh
npm ci
npm run dev
```

Откройте [localhost:4321/portfolio/](http://localhost:4321/portfolio/). Проверить типы и сборку: `npm run check` и `npm run build`. Для просмотра готовой сборки используйте `npm run preview`.

## Как обновить содержание

Откройте [src/data/profile.ts](src/data/profile.ts) и замените имя, роль, описание, аватар, навыки, проекты, опыт и контакты. В этом же файле находятся подписи интерфейса и метаданные. Укажите реальные адреса в `links` проектов и в `contacts`; без адреса элемент отображается как текст. Превью проектов можно положить в `public/images/` и указать имя файла и альтернативный текст в `image`. Аватар лежит там же (`avatar.webp`, 256×256) и указан в `avatar`. Картинка для превью ссылки в Telegram и LinkedIn — `public/images/og.jpg` (1200×630); если поменяете имя или роль, обновите и её.

## Публикация на GitHub Pages

1. В репозитории откройте **Settings → Pages → Source** и выберите **GitHub Actions**.
2. После слияния в `main` workflow **Deploy to GitHub Pages** соберёт и опубликует сайт. Если Pages включили после первой попытки, перезапустите workflow на вкладке **Actions**.
3. Откройте [mykytassss.github.io/portfolio/](https://mykytassss.github.io/portfolio/).
