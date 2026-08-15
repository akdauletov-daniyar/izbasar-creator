# Заголовочный шрифт — PP Neue Machina Ultrabold (800)

`PPNeueMachina-Ultrabold.woff2` — рабочий файл заголовков. Он уже подключён:
`@font-face` объявлен в `src/app/globals.css`, `--font-title` стоит у `h1–h4`.

## Откуда он взялся

Собран из `assets/fonts/PPNeueMachina-Ultrabold.otf` (лицензионный файл
заказчика). `.otf` — настольный формат, браузеру нужен `.woff2`:

```bash
python -m pip install fonttools brotli
python -c "from fontTools.ttLib import TTFont; f=TTFont('assets/fonts/PPNeueMachina-Ultrabold.otf'); f.flavor='woff2'; f.save('public/fonts/PPNeueMachina-Ultrabold.woff2')"
```

60 KB OTF → 33 KB WOFF2. Проверено: `usWeightClass 800`, 547 глифов,
полное покрытие кириллицы — все символы заголовков сайта на месте.

Исходные `.otf` лежат в `assets/fonts/` и **не попадают в деплой**:
`assets/` исключён через `.vercelignore`. На сервер уезжает только `.woff2`.

## Если понадобятся другие начертания

В `assets/fonts/` есть ещё Light и Regular. Сейчас они не нужны: текст, кнопки
и цифры набраны Inter — дисплейная гарнитура на 13–15px читается тяжело.
Если понадобятся, конвертируйте той же командой и добавьте `@font-face`
с соответствующим `font-weight`.

## Важно про лицензию

Репозиторий на GitHub **публичный**. Коммит `.woff2` в публичный репозиторий —
это распространение шрифта, а лицензия Pangram Pangram разрешает только
размещение на своём сайте. Файл при этом обязан быть в репозитории, иначе
Vercel его не задеплоит. Правильное решение — **сделать репозиторий приватным**
(Settings → General → Change repository visibility).

## Трекинг

`--text-*--letter-spacing` пересобран под Neue Machina: было −0.035em/−0.03em
(подбиралось под Inter Black), стало −0.02em/−0.018em. У этой гарнитуры
полуапроши заданы рисунком, и жёсткий отрицательный трекинг её ломает.
