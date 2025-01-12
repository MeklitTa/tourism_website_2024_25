import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as express from "express";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: '*', // Allow all origins
  });
  
  // Middleware for cookies
  app.use(cookieParser());
  
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }));
  
  // Serve static files from the FrontEnd directory
  app.useStaticAssets(join(__dirname, "..", "FrontEnd")); // This serves all files in the FrontEnd folder

  // Set the view engine if needed (for HTML rendering)
  app.setViewEngine("html");

  // Start the application
  await app.listen(3000, '0.0.0.0');
}

bootstrap();