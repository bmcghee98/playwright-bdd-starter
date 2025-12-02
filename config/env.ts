import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.TARGET_ENV || 'local'}` });

export const BASE_URL = process.env.BASE_URL || '';
export const USER_EMAIL = process.env.USER_EMAIL || '';
export const USER_PASSWORD = process.env.USER_PASSWORD || '';
