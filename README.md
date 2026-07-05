# afghan-jahan-tour

[![Node.js](https://shields.io)](https://nodejs.org)
[![TypeScript](https://shields.io)](https://typescriptlang.org)
[![Prisma](https://shields.io)](https://prisma.io)
[![PostgreSQL](https://shields.io)](https://postgresql.org)
[![Express.js](https://shields.io)](https://expressjs.com)
![License](https://shields.io)

A robust RESTful API engineered for **Afghan Jahan Tour**, focusing on strict type safety, modular architecture, and secure database relationships.

This project implements a high-performance booking engine using **Express.js** with a highly strict **TypeScript** configuration, ensuring type guarantees from the Prisma database layer all the way to the API response.

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
├── schema.prisma           
└── seed.ts                 
src/
├── config/   
├── common/ 
│   ├── middlewares/   
│   └── utils/                    
├── users/                  
│   ├── users.controller.ts 
│   ├── users.dto.ts
│   ├── users.module.ts 
│   ├── users.srevice.ts 
│   └── users.validator.ts     
├── app.ts                  
└── main.ts                 
```

---

## Planned Schema Entities

### Authentication & Core Data
- Users (Admin, Guide, Customer roles)
- Tours (Details, Pricing, Capacity, Dates)
- Bookings (Relational maps connecting users and tours)
- Reviews (User feedback on individual tours)

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
git clone https://github.com/nasir-ehsan-83/afghan-jahan-tour.git
cd afghan-jahan-tour
```

### Install Dependencies
```bash
npm install
```

### Configure Environment Variables
Create a `.env` file in the root directory as .env.example

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
