import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const email = process.env.EMAIL || 'xcellersqp@gmail.com';
  const githubUrl = process.env.GITHUB_URL || 'https://github.com/Quepee/stagezeroINTERN';
  const currentDatetime = new Date().toISOString();

  res.json({
    email,
    current_datetime: currentDatetime,
    github_url: githubUrl,
  });
});

const PORT = process.env.PORT || 4050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
