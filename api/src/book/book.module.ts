import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { bookProviders } from './providers';

@Module({
  providers: [...bookProviders, BookService],
  controllers: [BookController],
  exports: [BookService],
})
export class BookModule {}
