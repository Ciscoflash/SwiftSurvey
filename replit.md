# Overview

Tempo is a fitness mobile application built as a full-stack web application with a mobile-first responsive design. The app features a modern React frontend with a Node.js Express backend, designed to provide users with a comprehensive fitness tracking experience. The application includes user authentication workflows, onboarding screens, and a sleek dark-themed mobile interface optimized for fitness enthusiasts.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built using **React** with **TypeScript**, utilizing a component-based architecture with modern React patterns. The frontend is structured as a single-page application (SPA) using **Wouter** for lightweight client-side routing instead of React Router, which provides better performance for mobile experiences.

**State Management**: The application uses **TanStack React Query** for server state management and API data fetching, providing efficient caching and synchronization between client and server.

**UI Framework**: The interface is built with **shadcn/ui** components, which provides a comprehensive set of accessible and customizable UI primitives based on **Radix UI**. The styling system uses **Tailwind CSS** for utility-first styling with custom CSS variables for theming.

**Mobile-First Design**: The application is specifically designed for mobile devices with a maximum width constraint and mobile-optimized interactions. Custom components like `MobileStatusBar` simulate native mobile app experiences.

**Animation System**: **Framer Motion** is integrated for smooth page transitions and micro-interactions, enhancing the mobile user experience with native-like animations.

## Backend Architecture
The server is built on **Express.js** with TypeScript, following a modular architecture pattern. The backend uses an **in-memory storage implementation** (`MemStorage`) with a well-defined storage interface (`IStorage`) that can be easily swapped for database implementations.

**API Design**: RESTful API structure with all routes prefixed with `/api` for clear separation between frontend and backend endpoints.

**Development Setup**: The server includes comprehensive development tooling with Vite integration for hot module replacement and efficient development workflows. Custom middleware handles request logging and error management.

**Modular Structure**: The backend is organized into separate modules for routes, storage, and database connections, allowing for easy testing and maintenance.

## Data Storage Solutions
The application is configured to use **PostgreSQL** as the primary database with **Drizzle ORM** for type-safe database operations. The database connection utilizes **Neon Database** serverless PostgreSQL for scalable cloud database management.

**Schema Management**: Database schemas are defined using Drizzle's schema definition system with automatic TypeScript type generation. The current schema includes user authentication tables with proper constraints and relationships.

**Migration System**: Drizzle Kit handles database migrations and schema changes, with migrations stored in a dedicated `migrations` directory.

**Development Fallback**: A memory-based storage implementation is provided for development and testing purposes, implementing the same interface as the database layer.

## Authentication and Authorization
The application implements a **session-based authentication system** using **connect-pg-simple** for PostgreSQL session storage. This provides secure, server-side session management with automatic cleanup and persistence.

**User Management**: User entities include username/password authentication with proper password hashing and validation. The schema supports user registration and login workflows.

**Form Validation**: Client-side form validation uses **React Hook Form** with **Zod** schema validation for type-safe form handling and error management.

**Security**: Session management includes secure cookie handling and proper session cleanup mechanisms.

## External Dependencies

**Database Services**:
- **Neon Database**: Serverless PostgreSQL hosting for production database management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

**UI and Styling**:
- **shadcn/ui**: Component library providing accessible UI primitives
- **Radix UI**: Headless UI components for accessibility and keyboard navigation
- **Tailwind CSS**: Utility-first CSS framework with custom design system integration
- **Framer Motion**: Animation library for smooth transitions and micro-interactions

**Development Tools**:
- **Vite**: Modern build tool with hot module replacement for development
- **Drizzle Kit**: Database toolkit for migrations and schema management
- **ESBuild**: Fast JavaScript bundler for production builds

**Form and Data Management**:
- **React Hook Form**: Form state management with validation
- **Zod**: TypeScript-first schema validation library
- **TanStack React Query**: Server state management and data fetching

**Routing and Navigation**:
- **Wouter**: Minimalist routing library optimized for mobile applications

The architecture prioritizes mobile performance, type safety, and developer experience while maintaining scalability for future feature additions.