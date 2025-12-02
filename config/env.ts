import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.TARGET_ENV || 'local'}` });

export const ENV = {
  USER_EMAIL: process.env.USER_EMAIL || '',
  USER_PASSWORD: process.env.USER_PASSWORD || '',
  BASE_URL: process.env.BASE_URL || '',
};
