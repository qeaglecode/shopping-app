import * as mongoose from 'mongoose';
import { HttpExceptionLogSchema } from './http-exception-log.schema';

mongoose.connect(process.env.MONGO_URI, {
  autoIndex: true,
  autoCreate: true,
});

export const HttpExceptionLogModel = mongoose.model(
  'HttpExceptionLog',
  HttpExceptionLogSchema,
);
