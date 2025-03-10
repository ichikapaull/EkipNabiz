# TaskMon Landing Page

A modern and responsive SaaS landing page. This is a front-end project designed as a showcase for the TaskMon application, developed using the latest web technologies.

## Features

- **Modern Design**: Minimalist and clean UI design
- **Responsive Structure**: Flawless display on all devices
- **Animations**: Smooth transitions and animations with Framer Motion
- **Accessibility**: Developed in compliance with WCAG standards, enhanced with ARIA labels
- **Dark Mode Support**: Dark theme support with next-themes
- **SEO Optimization**: Search engine optimization with meta tags
- **Modular Structure**: Modular component structure following clean code principles
- **Performance Optimization**: Lazy loading and other optimization techniques
- **Error Boundary**: Error boundary components for error management

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Components**: Shadcn/ui
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Theme Support**: next-themes
- **Code Quality**: ESLint, Prettier

## Project Structure

```
app/
├── components/
│   ├── layout/          # Layout components (Header, Footer)
│   ├── sections/        # Page sections (Hero, Features, etc.)
│   └── ui/              # General UI components
├── data/                # Static data
├── hooks/               # Custom hooks
├── styles/              # CSS and animation styles
├── types/               # TypeScript type definitions
├── utils/               # Helper functions
└── page.tsx             # Main page
```

## Getting Started

To run the project in your local environment:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

You can view the application by going to [http://localhost:3000](http://localhost:3000) in your browser.

## Development Principles

- **Component-Based Development**: Each component is developed in its own file with a single responsibility principle
- **Type Safety with TypeScript**: Type definitions for all props and states
- **Accessibility First**: ARIA labels and semantic HTML have been used
- **Responsive Design**: Compatible with all screen sizes using a mobile-first approach
- **Performance Optimization**: Code optimized with React best practices

## License

MIT
