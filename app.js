import dotenv from 'dotenv';
import express from 'express';
import mainRoutes from './server/routes/main.js';
import expressLayouts from 'express-ejs-layouts';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
// set templating engine


app.use(expressLayouts);
app.set('layouts','./layouts/main');
app.set('view engine','ejs');


app.use('/', mainRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

