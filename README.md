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

## **Data Engineering**

The project includes a **data pipeline** for collecting, enriching, and analyzing influencer data.  

### **Pipeline Steps**

1. **Scraping Layer**  
   - `data_pipeline/scraper.py`  
   - Uses **requests + BeautifulSoup / Playwright** to fetch public Instagram profile data (followers, posts, likes, comments).  
   - Handles rate-limits with headers, delays, or proxy rotation.  

2. **Processing Layer**  
   - `data_pipeline/processor.py`  
   - Cleans and structures scraped data.  
   - Aggregates metrics:  
     - Average likes per post  
     - Average comments per post  
     - Engagement rate  

3. **Image/Video Enrichment Layer**  
   - `data_pipeline/enrichment.py`  
   - Uses **OpenCV / TensorFlow / external ML APIs** to:  
     - Auto-generate tags from post images (e.g., `food`, `travel`, `fashion`)  
     - Classify vibe/ambience (e.g., `casual`, `aesthetic`, `luxury`)  
     - Extract objects/events from reels (e.g., `person dancing`, `car`, `beach`)  
     - Provide quality indicators (lighting, sharpness, consistency)  

4. **Storage Layer**  
   - Stores structured + enriched data in **Post** and **Reel** models in Django DB.  

5. **API Layer**  
   - `api/views.py` serves enriched data via REST endpoints for the frontend.  
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

---


---

## **Tech Stack**

| Layer       | Technology                  |
|------------|----------------------------|
| Frontend   | React, TailwindCSS, Chart.js, React Router, Axios |
| Backend    | Django, Django REST Framework, SQLite/PostgreSQL |
| Data Engg  | Python (requests, BeautifulSoup, OpenCV, TensorFlow/Keras) |
| Dev Tools  | Vite, Node.js, npm/yarn |
| Icons      | lucide-react |

---

![Screenshot](https://github.com/tarnuN/Master_project/blob/03a6f498e9570e363d9ddaf010d5e7f8d8afb8e3/Screenshot%202025-09-28%20170622.png)
![Screenshot]()
