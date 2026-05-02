# Casebite

Casebite is a modern full-stack e-commerce application that enables users to design and purchase fully customizable phone cases. It combines an interactive design experience with secure authentication, seamless payments, and efficient order management.

---

## Table of Contents

- Overview
- Features
- Tech Stack
- Getting Started
- Environment Variables
- Project Structure
- Deployment

---

## Overview

Casebite provides a smooth end-to-end user journey — from uploading an image and customizing a phone case to secure checkout and order tracking. The platform is built with performance, scalability, and clean architecture in mind.

---

## Features

### Customization Engine

- Upload images via drag-and-drop or file selection
- Interactive design studio with drag, resize, and reposition functionality
- Real-time case preview
- Dynamic pricing based on:
  - Phone model (iPhone X to 15 series)
  - Case color (Black, Blue, Rose)
  - Material (Silicone, Polycarbonate)
  - Finish (Smooth, Textured)

---

### Checkout and Payments

- Secure checkout flow
- Stripe integration for payment processing
- Real-time order creation and database updates

---

### Authentication

- Secure login with Kinde Auth
- Automatic syncing of authenticated users with PostgreSQL database

---

### Automated Emails

- Order confirmation emails using Resend
- Email templates built with React Email

---

### Admin Dashboard

- Protected admin route (`/dashboard`)
- View orders, customers, and revenue
- Update order status:
  - Awaiting Shipment
  - Shipped
  - Fulfilled

---

## Tech Stack

### Frontend

- Next.js 15 (App Router, Server Components, Server Actions)
- React 18 with TypeScript
- Tailwind CSS
- Radix UI and Headless UI
- Framer Motion

---

### Backend

- Next.js API Routes
- PostgreSQL
- Prisma ORM

---

### Integrations

- Stripe (payments and webhooks)
- Kinde Auth (authentication)
- UploadThing (file storage)
- Resend (emails)
- Sharp (image processing)
- Zod (validation)

---

### Utilities

- TanStack React Query
- react-dropzone
- react-rnd

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Stripe account
- Kinde account

---

### Installation

```bash
git clone https://github.com/your-username/casebite.git
cd casebite
npm install
```

---

### Running the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DATABASE_URL=

KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

RESEND_API_KEY=
```

---

## Project Structure

```
app/            # App Router pages and layouts
components/     # Reusable UI components
lib/            # Utilities and configurations
prisma/         # Prisma schema and migrations
api/            # API routes and server logic
```

---

## Deployment

The recommended deployment platform is Vercel.

Steps:
1. Push the repository to GitHub
2. Import the project into Vercel
3. Configure environment variables
4. Deploy

---

## Notes

- Built with a focus on performance using Server Components and Server Actions
- Fully type-safe architecture using TypeScript, Prisma, and Zod
- Designed for scalability and production readiness
