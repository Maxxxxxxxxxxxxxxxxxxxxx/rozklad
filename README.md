# Tablica odjazdów ZTM — aplikacja frontendowa

Aplikacja SPA (React + TypeScript) wyświetlająca tablicę odjazdów dla wybranych przystanków.
Dane pobiera z serwera pośredniczącego (`rozklad-proxy-server`), nie bezpośrednio z API ZTM.

## Wymagania

- **npm** (wraz z Node.js — wersja 20.19+ lub 22.12+, wymagana przez Vite 7)
- **Vite** — narzędzie budujące; instaluje się automatycznie razem z zależnościami przez `npm install`, nie trzeba go instalować globalnie
- Uruchomiony serwer proxy pod adresem `http://localhost:3000`

## Uruchomienie (tryb deweloperski)

```bash
npm install
npm run dev
```

Aplikacja startuje pod `http://localhost:5173`.

Zawartość `dist/` to statyczne pliki — wystarczy je podać dowolnym serwerem HTTP.

## Konfiguracja

Oba ustawienia znajdują się w `src/constants.ts`:

| Stała          | Znaczenie                                              |
| -------------- | ------------------------------------------------------ |
| `API_BASE_URL` | adres serwera proxy                                    |
| `STOPS`        | lista przystanków dostępnych w panelu administracyjnym |

## Skrypty

| Polecenie         | Działanie                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | serwer deweloperski z hot reloadem |
| `npm run build`   | build produkcyjny                  |
| `npm run preview` | podgląd builda                     |
| `npm run lint`    | ESLint                             |
