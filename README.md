# FitZone Gym Landing Page

A full-stack MERN gym landing page featuring a validated contact form, 
plan-based enquiry pre-filling, scroll-triggered animations, and full 
responsive design across mobile, tablet, and desktop.

## Live Demo
- Frontend: https://fit-zone-gym-landing-page.vercel.app/
- Backend: https://fitzone-gym-landing-page.onrender.com

## Features
- **Multi-page responsive layout** — Home, Pricing, Trainers, Contact, 
  built mobile-first with Tailwind CSS
- **Contact form** — client-side validation (all errors surfaced at once, 
  not one at a time) plus independent server-side validation, connected 
  to a MongoDB-backed Express API
- **Plan enquiry pre-filling** — clicking "Get Started" on a pricing plan 
  navigates to the Contact page with the subject/message pre-filled for 
  that specific plan
- **Email notifications** — enquiries trigger an email to the gym owner 
  via Nodemailer, with toast notifications for submission feedback
- **Mobile navigation** — slide-in drawer with backdrop, auto-closes on 
  navigation
- **Scroll-triggered animations** — Framer Motion staggered reveals on 
  Hero, Services, Trainers, and Pricing sections
- **Testimonials carousel** — Embla Carousel with autoplay, responsive 
  slide widths

## Tech Stack
**Frontend:** React (Vite), React Router, Tailwind CSS, Framer Motion, 
Embla Carousel, Lucide React, react-toastify, Axios

**Backend:** Node.js, Express, MongoDB (Mongoose), Nodemailer

**Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

## Running Locally

### Backend
```bash
cd gym-backend
npm install
# create a .env file — see Environment Variables below
npm run dev
```

### Frontend
```bash
cd gym-frontend
npm install
npm run dev
```
