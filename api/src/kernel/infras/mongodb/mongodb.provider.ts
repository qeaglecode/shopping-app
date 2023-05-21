import * as mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const DB_URL = process.env.DB_URL;

export const MONGO_DB_PROVIDER = 'MONGO_DB_PROVIDER';

mongoose.set('autoIndex', true);

export const mongoDBProviders = [
  {
    provide: MONGO_DB_PROVIDER,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(DB_URL, {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions),
  },
];
