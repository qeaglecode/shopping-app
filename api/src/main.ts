import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(port || 3000);

  console.log(`Application is running on port ${port}`);
}
bootstrap();
