import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookCreatePayload } from './payload/book-create.payload';
import { ObjectId } from 'mongoose';
import { UpdateBookPayload } from './payload/update-book.payload';
import { BookDto, IBookResponse } from './dto/book.dto';
import { PageableData } from 'src/kernel/common';
import { DataResponse } from 'src/kernel/models';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/')
  async getAllBook(): Promise<PageableData<BookDto>> {
    const books = await this.bookService.findAll();

    return books;
  }

  @Post('/')
  async createBook(
    @Body() book: BookCreatePayload,
  ): Promise<DataResponse<any>> {
    await this.bookService.createBook(book);

    return DataResponse.ok({ success: true });
  }

  @Get('/:id')
  async findById(
    @Param('id') id: string | ObjectId,
  ): Promise<DataResponse<IBookResponse>> {
    const book = await this.bookService.findById(id);

    return DataResponse.ok(new BookDto(book).toResponse());
  }

  @Put('/:id')
  async updateById(
    @Param('id') id: string | ObjectId,
    @Body() payload: UpdateBookPayload,
  ): Promise<DataResponse<any>> {
    const book = await this.bookService.updateById(id, payload);

    return DataResponse.ok(new BookDto(book).toResponse());
  }

  @Put('/')
  async updateByAuthor(
    @Body() payload: UpdateBookPayload,
  ): Promise<DataResponse<any>> {
    await this.bookService.updateByAuthor(payload);

    return DataResponse.ok({ success: true });
  }

  @Delete('/:id')
  async deleteById(
    @Param('id') id: string | ObjectId,
  ): Promise<DataResponse<any>> {
    await this.bookService.deleteById(id);

    return DataResponse.ok({ success: true });
  }
}
