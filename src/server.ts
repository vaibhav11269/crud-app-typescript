import app from './app';
import connection from './dbConnect';

const PORT = process.env.PORT || 3000;
/*DB Connection */
connection();

app.listen(PORT, (): void => {
    console.log(`Listening on PORT ${PORT}`);
})