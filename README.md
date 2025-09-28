# Instagram Influencer Profile Dashboard

A **full-stack web application** to showcase Instagram influencer profiles with analytics, posts, reels, personality traits, interests, and engagement metrics. Built with **React + TailwindCSS** on the frontend and **Django REST Framework** on the backend.

---

## **Table of Contents**

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Architecture & Approach](#architecture--approach)  
4. [Tech Stack](#tech-stack)  
5. [Setup Instructions](#setup-instructions)  
6. [Folder Structure](#folder-structure)  
7. [Future Improvements](#future-improvements)  
8. [License](#license)  

---

## **Project Overview**

This project allows users to:

- Login and signup
- View influencer profile information
- Edit personal profile (bio, personality, interests)
- View analytics of posts and engagement
- Scroll through reels/videos
- Access a sidebar with navigation and logout

The system is designed for **end-to-end full-stack development evaluation**: frontend, backend, and data handling.

---

## **Features**

### **Frontend**

- Responsive React UI with **TailwindCSS**
- Dashboard with **Sidebar + Navbar**
- Profile page with:
  - Header (profile picture, name, username, followers, posts)
  - Occupation
  - Personality traits with progress bars
  - Interests (tags)
  - Engagement analytics (Chart.js bar chart)
- Reels page to scroll recent videos
- Settings page to edit user info
- Login & Signup pages
- Axios-based API integration (`services/api.js`)

### **Backend**

- Django REST Framework API
- Custom User model for profile, bio, personality, interests
- Endpoints:
  - `GET /api/profile` → Fetch user profile
  - `PUT /api/profile/update` → Update profile info
- CORS enabled for frontend
- Database: SQLite (default, can switch to PostgreSQL)

### **Data & Analytics**

- Engagement metrics: average likes, comments, engagement rate
- Personality traits visualized with progress bars
- Interests and highlights as tags
- Chart.js visualization for analytics

---

## **Architecture & Approach**

### **Frontend Approach**

1. **Routing:** React Router v6 for pages and nested routes
2. **Layout:** DashboardLayout with Sidebar + Outlet for nested pages
3. **State Management:** React Context (`AuthContext`) for logged-in user
4. **API Integration:** Axios (`services/api.js`) for all backend calls
5. **UI/UX:** TailwindCSS for responsive and modern interface
6. **Charts:** Chart.js for engagement analytics visualization

### **Backend Approach**

1. **Custom User model:** `CustomUser` extending `AbstractUser` with bio, interests, personality
2. **REST API:** Django REST Framework endpoints for profile CRUD
3. **CORS:** Allow frontend domain for API calls
4. **Data Storage:** SQLite (can be migrated to PostgreSQL)
5. **Authentication:** Planned session or token-based authentication

### **Data Flow**

