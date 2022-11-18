import express from 'express';
import 'express-async-errors';
import { handleErrors } from './errors';
import routes from './routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);
app.use(handleErrors);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
