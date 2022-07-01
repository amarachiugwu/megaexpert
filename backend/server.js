import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/megaexpert', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
} );

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is at http://localhost:${port}`)
});