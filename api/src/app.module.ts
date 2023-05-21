import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService } from './auth/services/auth.service';
import { MongoDBModule } from './kernel/infras/mongodb';
// import { AuthModule } from './auth/auth.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongoDBModule,
    // MongooseModule.forRoot(process.env.DB_URL),
    // AuthModule,
    BookModule,
    SocketModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
