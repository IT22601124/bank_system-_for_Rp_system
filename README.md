# Bank Admin Website

A large banking admin portal built with React, TypeScript, Vite, and React Router.

## Features

- Executive dashboard with KPIs and visual trends
- Customer operations and onboarding forms
- Transaction monitoring and status tracking
- Loan pipeline and pricing simulation forms
- Risk, compliance, and audit workflow forms
- Branch operations and staffing management forms
- Settings and integration management panels

## Local Development

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Build for production:
   npm run build

## Vercel Deployment

This project is already configured for Vercel with:

- vercel.json for Vite output directory
- SPA rewrite rules for React Router paths

### Deploy from Vercel Dashboard

1. Push this project to GitHub.
2. In Vercel, click New Project.
3. Import the GitHub repository.
4. Keep the default build settings detected from vercel.json.
5. Click Deploy.

### Deploy from CLI

1. Install Vercel CLI:
   npm i -g vercel

2. Login:
   vercel login

3. First deployment (project link):
   vercel

4. Production deployment:
   vercel --prod

## Important Note for Routing

Because this app uses client-side routing, vercel.json includes a rewrite from all paths to index.html. This prevents 404 errors when directly opening routes such as /customers, /loans, or /risk.
