import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/api.routes.js'; 

const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/api', movieRoutes);

app.listen(8080, () => {
    console.log("Server started on port : 8080");
});