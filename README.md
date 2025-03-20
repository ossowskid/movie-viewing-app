<div align="center"> <h1>🎬 Movies Explorer</h1> <p>Przeglądaj filmy z TMDb w stylowy sposób!</p> <img src="https://img.shields.io/badge/React-18.2-blue?logo=react" alt="React Badge" /> <img src="https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript" alt="TypeScript Badge" /> <img src="https://img.shields.io/badge/MUI-5.15-blue?logo=mui" alt="MUI Badge" /> <img src="https://img.shields.io/badge/License-MIT-green" alt="License Badge" /> </div>

📖 O projekcie
Movies Explorer to aplikacja webowa stworzona w React z TypeScriptem, która pozwala odkrywać filmy z bazy TMDb. Filtrowanie gatunków, sortowanie i szczegółowe informacje o filmach – wszystko w responsywnym i nowoczesnym interfejsie!

"Oglądaj, filtruj, odkrywaj – kino na wyciągnięcie ręki!"

✨ Funkcjonalności
🎥 Lista filmów: Karty z plakatami, ocenami i datami premier.
✅ Filtrowanie: Wybór gatunków za pomocą checkboxów.
🔄 Sortowanie: Opcje sortowania (np. popularność, ocena) z radio buttons.
📜 Szczegóły filmu: Informacje o filmie, firmy produkcyjne, linki zewnętrzne.
📱 Responsywność: Dostosowanie do różnych ekranów dzięki MUI.
⏳ Infinite Scroll: Paginacja z przyciskiem "Załaduj więcej".
⚠️ Obsługa błędów: Fallbacki dla obrazów i danych.

⚙️ Wymagania
Node.js: v16 lub nowsza
npm lub Yarn
Klucz API TMDb: Zarejestruj się na TMDb

🚀 Instalacja
Sklonuj repozytorium:

```js
git clone https://github.com/ossowskid/movie-viewing-app.git
cd movie-viewing-app
```

Zainstaluj zależności:
```js
npm install
```
lub
```js
yarn install
```
Skonfiguruj zmienne środowiskowe:
Utwórz plik .env w głównym katalogu:
```js
REACT_APP_TMDB_API_KEY=your_api_key_here
REACT_APP_IMAGE_API_URL=https://image.tmdb.org/t/p
```
Uruchom aplikację:
```js
npm run dev
```
```js
yarn run dev
```
Otwórz w przeglądarce: http://localhost:5173.

🎮 Użycie
Strona główna:
🗂️ Wybierz gatunki w filtrach.
🔍 Ustaw sortowanie.
⬇️ Kliknij "Załaduj więcej" dla kolejnych filmów.
Szczegóły filmu:
🎬 Kliknij kartę filmu, by zobaczyć szczegóły.
🔙 Wróć przyciskiem "Powrót do listy".

🎨 Motyw kolorystyczny
<div align="center"> <table> <tr> <th>Kolor</th> <th>Kod</th> <th>Użycie</th> </tr> <tr> <td>🖤 Głęboka czerń</td> <td><code>#0A0A0A</code></td> <td>Tło aplikacji</td> </tr> <tr> <td>🌑 Ciemny szary</td> <td><code>#1A1A1A</code></td> <td>Sekcje (np. filtry)</td> </tr> <tr> <td>🌗 Jaśniejszy szary</td> <td><code>#2A2A2A</code></td> <td>Lista filmów, karty</td> </tr> <tr> <td>❤️ Czerwony</td> <td><code>#E50914</code></td> <td>Przyciski akcji</td> </tr> <tr> <td>💛 Złoty</td> <td><code>#D4AF37</code></td> <td>Oceny, akcenty</td> </tr> <tr> <td>💙 Niebieski</td> <td><code>#1E3A8A</code></td> <td>Linki zewnętrzne</td> </tr> <tr> <td>🤍 Biały</td> <td><code>#FFFFFF</code></td> <td>Tekst główny</td> </tr> <tr> <td>🌫️ Jasnoszary</td> <td><code>#D3D3D3</code></td> <td>Tekst drugorzędny</td> </tr> </table> </div>
