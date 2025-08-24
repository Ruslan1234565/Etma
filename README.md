# Etma - Wellness Website

A modern wellness and beauty website built with Next.js, featuring interactive carousels, responsive design, and a clean user interface.

## Features

- **Interactive Carousel**: Press testimonials with smooth navigation
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional design with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Next.js 15**: Latest features and optimizations
- **Authentication**: NextAuth.js integration
- **API Routes**: RESTful API endpoints

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (withnav)/         # Pages with navigation
│   ├── (withoutnav)/      # Auth pages
│   └── api/               # API routes
├── components/            # Reusable UI components
│   ├── layout/           # Layout components
│   └── ui/               # Base UI components
├── features/             # Feature-based modules
│   ├── interface/        # TypeScript interfaces
│   ├── pages/           # Page-specific components
│   ├── service/         # Data services
│   └── shared/          # Shared utilities
└── lib/                 # Utility functions
```

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel functionality
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Lucide React](https://lucide.dev/) - Icons

## Carousel Implementation

The press section features an interactive carousel built with Embla Carousel:

- Smooth transitions between testimonials
- Navigation arrows and dot indicators
- Responsive design for all screen sizes
- Keyboard navigation support
- Auto-loop functionality

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Embla Carousel Documentation](https://www.embla-carousel.com/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# EtmaEpisode" 
