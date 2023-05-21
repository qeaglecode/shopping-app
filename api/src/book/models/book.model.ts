import { Document } from 'mongoose';
import { BookCategory } from '../constant/book.constant';
import { ObjectId } from 'mongodb';

export class BookModel extends Document {
  _id: ObjectId;

  title: string;

  description: string;

  author: string;

  price: number;

  category: BookCategory;

  createdAt?: Date;

  updatedAt?: Date;
}
