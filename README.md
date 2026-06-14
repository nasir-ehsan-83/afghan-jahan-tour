# Afghan Jahan Tour API

This is a personal practice project building a RESTful API for a fictional tour company called **Afghan Jahan Tour**. The main goal of this repository is to practice structuring a production-ready Node.js backend using a highly strict TypeScript configuration and MongoDB.

*Note: "Afghan Jahan Tour" is entirely fictional. This project is purely for educational purposes and is not affiliated with any real-world business.*

---

## Tech Stack

- **Runtime:** Node.js (v20+)
- **Framework:** Express
- **Language:** TypeScript (`nodenext` configuration with strict module resolution)
- **Database:** MongoDB
- **Development Tool:** `tsx` (for fast hot-reloading during development)

---

## Local Setup

Follow these steps to run the project on your machine:

### 1. Clone the repo
```bash
git clone https://github.com
cd afghan-jahan-tour
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/afghan_jahan_tour
```

### 4. Start the server

Run the app in development mode with automatic restarts:
```bash
npm run dev
```

Build the project into plain JavaScript (compiled into the `/dist` directory):
```bash
npm run build
```

---

## Project Structure

The project code is organized inside the `src` directory as follows:

```text
src/
├── config/       # Database connection settings
├── controllers/  # Request handlers and business logic
├── models/       # MongoDB schemas and TypeScript types
├── routes/       # API endpoint declarations
└── index.ts      # Application entry point
```

---

## License
MIT
