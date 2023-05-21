import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BookCategory } from '../constant/book.constant';

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  category: BookCategory;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
