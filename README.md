# afghan-jahan-tour

![Node.js](https://shields.io)
![TypeScript](https://shields.io)
![Prisma](https://shields.io)
![License](https://img.shields.io/badge/license-MIT-blue)

A robust RESTful API built for a fictional tour company called Afghan Jahan Tour, focusing on strict type safety, modular design, and secure database relationships.

The project explores how a modern booking backend can be structured using Express and a highly strict TypeScript configuration while maintaining type guarantees from the database layer up to the API endpoints.

---

## Scope

Current and planned features include:

- User Authentication & Authorization (JWT, Role-Based Access)
- Tour Management (Cruds, Filtering, Sorting, Pagination)
- Booking System (Capacity Control, Concurrency Handling)
- Review & Rating System
- Payment Integration & Order Tracking
- Global Error Handling & Request Validation (Zod)

---

## Project Structure

```text
prisma/
└── schema.prisma  # Prisma database schemas and relations
src/
├── config/        # Prisma client instantiation & environmental configs
├── controllers/   # Request handlers and business logic
├── middlewares/   # Request validation, authentication, and error filters
├── models/        # Custom TypeScript types and interfaces
├── routes/        # API endpoint declarations
└── index.ts       # Application entry point
```

---

## Planned Schema Entities

### Authentication & Core Data
- Users (Admin, Guide, Customer roles)
- Tours (Details, Pricing, Capacity, Dates)
- Bookings (Relational maps connecting users and tours)
- Reviews (User feedback on individual tours)

*Additional modules and schema refinements are added incrementally as the API architecture evolves.*

---

## Design Focus

The implementations are written with attention to:

*   Strict TypeScript type resolution (`nodenext` compliance)
*   Type-only imports under `verbatimModuleSyntax` rules
*   Predictable relational mapping and integrity using Prisma
*   Runtime input sanitization and verification using Zod
*   Decoupled architecture (Separation of routes, controllers, and queries)
*   Asynchronous execution flows and clean error propagation

**Some modules may later include:**
*   Load benchmarking
*   Database index optimizations
*   Automated integration testing
*   Docker containerization setup

---

## Documentation

Each module is intended to document:

- API endpoint signatures and payloads
- Expected query parameters and filtering behavior
- Database schema trade-offs and indexing strategies
- Type safety mechanics under modern compilation flags

*Validation schemas and route definitions are verified alongside logic files whenever possible.*

---

## Getting Started

### Prerequisites
Ensure you have Node.js (v20+) and a local PostgreSQL instance running.

### Clone the Repository
```bash
git clone https://github.com
cd afghan-jahan-tour
```

### Install Dependencies
```bash
npm install
```

### Configure Environment Variables
Create a `.env` file in the root directory:
```env
PORT=3000
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/afghan_jahan_tour?schema=public"
```

### Run Database Migrations
```bash
npx prisma migrate dev --name init
```

### Run Development Server
```bash
npm run dev
```

---

## Contributing

Implementation improvements, optimizations, and clean architecture patches are welcome.

---

## License

Licensed under the MIT License.

---

## Author

**Nasir Ahmad Ehsan**
