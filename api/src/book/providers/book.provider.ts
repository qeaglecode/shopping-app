import { Connection } from 'mongoose';
import { MONGO_DB_PROVIDER } from '../../kernel';
import { BookSchema } from '../schemas/book.schema';

export const BOOK_PROVIDER = 'BOOK_PROVIDER';
export const bookProviders = [
  {
    provide: BOOK_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Book', BookSchema),
    inject: [MONGO_DB_PROVIDER],
  },
];
