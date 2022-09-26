import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import * as dotenv from 'dotenv';
import router from './src/routes/productos.routes';
import "./src/database";
import auth from "./src/routes/usuarios.routes";

const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log(`BD puerto : ${app.get('port')}`)
})

dotenv.config();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/burgers&beer', router );
app.use("/burgers&beer/auth", auth);