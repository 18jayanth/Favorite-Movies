# 🎬 Favorite Movies App

A simple yet elegant web app built with **Vite + React** that lets you explore popular movies from **The Movie Database (TMDB)**, search your favorite films, and save the ones you love ❤️ to your personalized favorites list.

---

## 🚀 Features

✨ **Discover Popular Movies**  
Browse trending and popular films fetched in real-time from the TMDB API.

🔍 **Search Movies Instantly**  
Type in the search bar to find movies by name — fast, dynamic, and responsive.

❤️ **Add to Favorites**  
Click the heart icon 💖 to save movies you love. Your favorite films appear neatly in the *Favorites* page.

🗂️ **Separate Favorites Page**  
Access all your loved movies in one place — easy to view, remove, or revisit.

⚡ **Built with Modern Tools**  
Powered by **React**, **Vite**, and **TMDB API** for lightning-fast performance and smooth UI transitions.

---

## 🏗️ How It Works

1. The app fetches movie data using the [TMDB API](https://developer.themoviedb.org/docs).
2. Displays a grid of movie posters with titles and ratings.
3. Users can:
   - Search for any movie.
   - Click 💖 to mark as a favorite.
   - View all favorites on a separate page.
4. State management is handled via **React Context API** for seamless data flow between components.

---

## 🧠 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React + Vite** | Frontend framework for building fast UI |
| **TMDB API** | Source of movie data |
| **Context API** | Manage global state (favorites, search, etc.) |
| **CSS / Tailwind** | For beautiful and responsive styling |

---

## ⚙️ Installation & Setup

Follow these simple steps to run the project locally 👇

```bash
# 1️⃣ Clone this repository
git clone https://github.com/<your-username>/favorite-movies.git

# 2️⃣ Go into the project directory
cd favorite-movies

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create a .env file in the root folder
echo "VITE_TMDB_API_KEY=your_tmdb_api_key_here" > .env

# 5️⃣ Run the app
npm run dev
