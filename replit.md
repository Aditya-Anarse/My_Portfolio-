# replit.md

## Overview

This is a personal portfolio website with a futuristic dark theme design. It showcases skills, projects, and provides a contact form for visitors to send messages. The application follows a full-stack architecture with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for complex animations and transitions
- **Build Tool**: Vite

The frontend is a single-page application with a dark futuristic theme featuring neon colors (cyan, purple, magenta). Custom fonts include Orbitron for display, Rajdhani for body text, and Space Mono for monospace.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: REST API with typed route definitions
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Validation**: Zod schemas shared between frontend and backend

The server handles API requests and serves static files in production. Development uses Vite's dev server with HMR.

### Shared Code Pattern
The `shared/` directory contains:
- **schema.ts**: Database table definitions using Drizzle and Zod validation schemas
- **routes.ts**: API route definitions with input/output types for type-safe API calls

This enables end-to-end type safety between frontend and backend.

### Database Schema
Single table for contact form submissions:
- `messages`: Stores contact form entries (id, name, email, message, createdAt)

### Build System
- Development: `tsx` runs TypeScript directly
- Production: Custom build script using esbuild for server and Vite for client
- Database: Drizzle Kit for migrations (`db:push`)

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Database queries and schema management
- **connect-pg-simple**: PostgreSQL session store (available but not currently active)

### UI Libraries
- **Radix UI**: Headless UI components (dialogs, dropdowns, tooltips, etc.)
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **React Day Picker**: Date picker component
- **cmdk**: Command palette component

### Form Handling
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Zod integration for form validation

### Development Tools
- **Vite**: Frontend build tool with HMR
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type checking across the stack