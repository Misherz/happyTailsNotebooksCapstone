# Happy Tails Notebooks - React App

Welcome to **Happy Tails Notebooks**! This is a space designed to enhance mental well-being through journaling, incorporating daily inspiration and personal tracking features. With this app, users can reflect on their thoughts, track their mood, and connect with the world around them through weather updates, daily photos, quotes, and more.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [APIs Integrated](#apis-integrated)
- [Installation](#installation)
- [Usage](#usage)
- [React Components](#react-components)
- [App Structure](#app-structure)
- [License](#license)

---

## Project Overview

Happy Tails Notebooks aims to provide a simple, intuitive platform for journaling that enhances mental health and emotional clarity. It includes key features like weather and photo integration, a daily quote, and tracking tools for users' moods and experiences. The app is built using **React** and **Axios** for API calls, making use of modern hooks like `useState`, `useEffect`, and asynchronous handling with `async/await`.

---

## Key Features

- **Personalized Entries**: Write about your day, thoughts, and experiences at any time.
- **Mental Health Tracking**: Track your mood and thoughts over time with visual insights.
- **Weather & Location Integration**: View daily weather and connect your mood to your environment.
- **Serotonin Boost**: Receive daily inspiration with an image that boosts positive thinking.
- **Interactive UI**: Features like hover effects on photos, a journal calendar, and a bookmark-style toolbar.
- **Back End**: https://github.com/Misherz/HTN_BackEnd.git

---

## APIs Integrated

The following APIs are integrated into the app to provide various features:

1. **Daily Photo API**: Displays a new inspirational image daily to encourage positive thinking.
2. **Quotes API**: Fetches a new motivational quote each day.
3. **Weather API**: Provides real-time weather information for the user’s location.

The app also includes a **Word of the Day** feature, using the **Merriam-Webster API** to help expand vocabulary.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/happy-tails-notebooks.git
   cd happy-tails-notebooks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app locally:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

---

## Usage

Upon starting the app, users are greeted with the following:

- **Home Page**: Plays background music.
- **Dashboard**: Users can access APIs for photo, quote, and weather updates. There's also an interactive "Get Word of the Day" button that opens a pop-up with the Merriam-Webster word of the day.
- **Journal Page**: A calendar view to track entries[future implementation]. Users can enter their thoughts, select optional parameters like mood or subject, and submit their journal entry. Date is added upon every journal entry. Data is instantly added to MongoDB.

---

## React Components

### 1. `Navbar`
- Displays the **Happy Tails Notebooks** logo, and has links to:
  - Home page
  - About page
  - Login page
  - Contact page
- Uses `React Router` to switch between pages.

### 2. `Home`
- Plays background music on mount using `useEffect`.

### 3. `Dashboard`
- Displays the daily photo, weather, and motivational quote.
- Includes a "Get Word of the Day" button that opens a pop-up window.

### 4. `Journal`
- Displays a calendar for viewing previous entries.[future implementation]
- Includes an input area for subject, mood, and the journal entry itself.
- On submission, validates that there is an entry before sending data to MongoDB.
- Features pagination for viewing past entries, with real-time editing and deletion.

### 5. `ViewEntries`
- Displays two latest journal entries with pagination.
- Provides options to edit and delete entries with real-time updates.

---

## App Structure

```
src/
│
├── components/
│   ├── Navbar
│   ├── Home
│   ├── Dashboard
│   ├── Journal.
│   ├── ViewEntries
│   └── Weather
│
├── pages/
│   ├── About
│   ├── Login
│   ├── SignUp
│   ├── Contact
│   └── DashboardPage
│   └── DashboardPage
│
├── utils/
│   ├── axios.js
│   └── api.js
│
└── App.js
```

### Key Folders:

- `components/`: Reusable UI components like the navbar, journal form, and entries view.
- `pages/`: Contains all individual page components.
- `utils/`: Includes helper functions and Axios instances for API requests.

---



### Additional Notes

- The app uses **MongoDB** for storing user journal entries.
- The **axios.js** file handles API calls, using async/await syntax for smooth asynchronous operations.
- Ensure that you have the required API keys for weather and photo APIs, and update the `.env` file accordingly.

Enjoy journaling, and let Happy Tails Notebooks be part of your journey to mental clarity and peace!

