import dotenv from "dotenv";

dotenv.config();
import { prisma } from "./config/prisma.js"
import app from "./app.js";

const PORT = process.env.PORT || 3000;

const bootstrap = async () => {
  try {
    // connect to DB
    await prisma.$connect();
    console.log("Database connection established successfully.");

    // start server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

  } catch (error) {
    
    console.error("Failed to start server:", error);

    // disconnect with DB
    await prisma.$disconnect();

    process.exit(1);
  
  }
}
// start point of server
bootstrap();