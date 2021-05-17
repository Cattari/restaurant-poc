import path from 'path'
import { app } from 'electron'
import { DB_FILE_NAME } from '../constants';

export const getDbPath = () => path.join(
  app.getPath('userData'),
  DB_FILE_NAME
);
