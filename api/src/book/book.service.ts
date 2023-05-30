import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { BookCreatePayload } from './payload/book-create.payload';
import { UpdateBookPayload } from './payload/update-book.payload';
import { BookModel } from './models/book.model';
import { BOOK_PROVIDER } from './providers';
import { BookDto } from './dto/book.dto';
import { PageableData } from 'src/kernel/common';

@Injectable()
export class BookService {
  constructor(
    @Inject(BOOK_PROVIDER)
    private bookModel: mongoose.Model<BookModel>,
  ) {}

  async findAll(): Promise<PageableData<BookDto>> {
    const [books, total] = await Promise.all([
      this.bookModel.find(),
      this.bookModel.countDocuments(),
    ]);

    return {
      data: books.map((item) => new BookDto(item)),
      total,
    };
  }

  async createBook(book: BookCreatePayload): Promise<BookModel> {
    return this.bookModel.create(book);
  }

  async findById(id: string | mongoose.ObjectId): Promise<BookModel> {
    const book = await this.bookModel.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  async updateById(
    id: string | mongoose.ObjectId,
    payload: UpdateBookPayload,
  ): Promise<BookModel> {
    const book = await this.bookModel.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    book.title = payload.title;
    book.description = payload.description;
    book.author = payload.author;
    book.price = payload.price;
    book.category = payload.category;
    await book.save();

    return book;
  }

  async updateByAuthor(payload: UpdateBookPayload): Promise<any> {
    if (!payload.author) {
      throw new Permissions();
    }

    const books = await this.bookModel.find({ author: payload.author });

    if (!books) {
      throw new NotFoundException("Couldn't find any books by this author");
    }

    return await this.bookModel.updateMany(
      { author: payload.author },
      {
        $set: {
          description: payload.description,
          updatedAt: new Date(),
        },
      },
    );
  }

  async deleteById(id: string | mongoose.ObjectId) {
    const book = await this.bookModel.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return await this.bookModel.deleteOne({ _id: book._id });
  }
}
