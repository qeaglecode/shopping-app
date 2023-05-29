import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionLogFilter } from './kernel/logger/http-exception-log.filter';
import { RedisIoAdapter } from './modules/socket/redis-io.adapter';
import { renderFile } from './kernel/helpers/view.helper';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const httpAdapter = app.getHttpAdapter();
  // TODO - config for domain
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionLogFilter(httpAdapter));
  app.engine('html', renderFile);
  app.set('view engine', 'html');
  app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.disable('x-powered-by');

  // app.use('/book', (req, res) => {
  //   res.send({
  //     data: { name: 'Quan', age: 27 },
  //   });
  // });

  await app.listen(port || 3000, () => {
    console.log(`Application is running on port ${port}`);
  });
}
bootstrap();
