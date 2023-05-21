import { pick } from 'lodash';
import { ObjectId } from 'mongoose';
import { BookCategory } from '../constant/book.constant';

export interface IBookResponse {
  _id: ObjectId | any;

  title: string;

  description: string;

  author: string;

  price: number;

  category: BookCategory;

  createdAt?: Date;

  updatedAt?: Date;
}

export class BookDto {
  _id: ObjectId | any;

  title: string;

  description: string;

  author: string;

  price: number;

  category: BookCategory;

  createdAt?: Date;

  updatedAt?: Date;

  constructor(data?: Partial<BookDto>) {
    data &&
      Object.assign(
        this,
        pick(data, [
          '_id',
          'title',
          'description',
          'author',
          'price',
          'category',
          'ceatedAt',
          'ipdatedAt',
        ]),
      );
  }
  toResponse(includePrivateInfo = false): IBookResponse {
    const publicInfo = {
      _id: this._id,
      title: this.title,
      description: this.description,
      author: this.author,
      price: this.price,
      category: this.category,
    };

    if (!includePrivateInfo) {
      return publicInfo;
    }

    return {
      ...publicInfo,
      title: this.title,
      description: this.description,
      author: this.author,
      price: this.price,
    };
  }
}
