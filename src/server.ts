import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { handleErrors } from './errors';
import routes from './routes';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handleErrors);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
