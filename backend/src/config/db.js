import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection_pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tuSjiforak_05',
  database: 'gau_raksha_seva_sansthan',
  waitForConnections: true,
  connectionLimit: 10,
});

export default connection_pool;
