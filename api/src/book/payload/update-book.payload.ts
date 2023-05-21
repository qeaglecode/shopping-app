import { ObjectId } from 'mongoose';
import { BookCategory } from '../constant/book.constant';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookPayload {
  @ApiProperty()
  @IsNotEmpty()
  _id: ObjectId;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  price: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  category: BookCategory;
}
