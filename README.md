# Feedback App

A simple and interactive feedback tracking application built with **React**. This project allows users to collect service ratings and see real-time statistics, including the total count and positive feedback percentage.

---

## 🚀 Technologies
**React** | **JavaScript** | **CSS3** | **Vercel**

---

## 💡 Key Features
* **Real-time Feedback Tracking:** Collects ratings across three categories: Good, Neutral, and Bad.
* **Live Statistics:** Automatically calculates the total number of reviews and the percentage of positive feedback.
* **Conditional Rendering:** Statistics are displayed only after the first feedback is received (keeps the UI clean).
* **Reset Functionality:** Easily clear all gathered data with a single click.
* **State Management:** Efficient use of React hooks (`useState` and `useEffect`) to handle data updates and persistent storage (localStorage).

---

## 🛠️ What I Learned
In this project, I practiced:
* Handling multiple states within a single object.
* Using **Local Storage** to save feedback data so it doesn't disappear after a page refresh.
* Derived state: calculating `total` and `positive %` on the fly without storing unnecessary extra state.

