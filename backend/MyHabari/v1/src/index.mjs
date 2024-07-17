import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/index.mjs'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const secret = process.env.CookieSecret;

app.use(cookieParser(secret));
app.use(express.json());

app.use(cors({
  origin: true,
  credentials: true
}));

// Serve static files from the "uploads" directory
app.use('/api/v1/uploads', express.static(path.join(__dirname, '..', 'uploads')));


app.use('/api/v1', router);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export default app;
