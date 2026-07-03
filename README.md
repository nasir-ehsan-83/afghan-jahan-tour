# afghan-jahan-tour

![Node.js](https://shields.io)
![TypeScript](https://shields.io)
![Prisma](https://shields.io)
![License](https://img.shields.io/badge/license-MIT-blue)

A robust RESTful API built for a tour company called Afghan Jahan Tour, focusing on strict type safety, modular design, and secure database relationships.

The project explores how a modern booking backend can be structured using Express and a highly strict TypeScript configuration while maintaining type guarantees from the database layer up to the API endpoints.

---

## Architectural Choice: Express with NestJS Spirit

Unlike traditional, unstructured Express applications, **this project deliberately implements the modular architecture and clean patterns of NestJS on top of raw Express.** 

By avoiding NestJS's heavy runtime decorators and Dependency Injection (DI) boilerplate, the project achieves:
- **Raw Performance:** Leveraging the pure, lightweight speed of Express.
- **Strict Modularity:** Features are isolated into self-contained domains (`users`, `tours`, etc.), each containing its own routes, controller, service, and data transfer types.
- **Separation of Concerns:** Controllers exclusively handle HTTP requests/responses, Services contain pure business logic, and DTOs manage Zod schemas.
- **Future-Proof Design:** The strict structural alignment makes migrating to the full NestJS framework effortless if scaling demands it in the future.

---

## Scope

Current and planned features include:

- User Authentication & Authorization (JWT, Role-Based Access)
- Tour Management (CRUDs, Filtering, Sorting, Pagination)
- Booking System (Capacity Control, Concurrency Handling)
- Review & Rating System
- Payment Integration & Order Tracking
- Global Error Handling & Request Validation (Zod)

---

## Project Structure

```text
prisma/
├── schema.prisma       # Prisma database schemas and relations
└── seed.ts             # Database seeding scripts
src/
├── config/             # Global configurations (Prisma client singleton, etc.)
├── users/              # Self-contained feature module (NestJS style)
│   ├── user.dto.ts     # Centralized Zod validation schemas and types
│   ├── users.controller.ts # Request/response handlers
│   ├── users.routes.ts # Feature specific endpoint definitions
│   └── user.service.ts # Core business logic and database queries
├── app.ts              # Express initialization, core middlewares (CORS, JSON), and route mounting
└── main.ts             # Application bootstrapper and environment initialization
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
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/afghan_tour?schema=public"
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
