// config.js
import dotenv from 'dotenv';

dotenv.config();
export default {
  pathdir: process.env.pathdir,
  PORT: process.env.PORT,
};
