import { ApiProperty } from '@nestjs/swagger';
import { BookCategory } from '../constant/book.constant';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class BookCreatePayload {
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
  @IsString()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  category: BookCategory;
}
