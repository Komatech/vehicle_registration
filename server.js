const express = require('express');
const app = express();
const db = require('./models');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const apiRoutes = require('./routes/index');
app.use('/api',apiRoutes);

db.sequelize.sync().then(()=>{
    app.listen(3000,()=>console.log('Server running successfully!!'));
}) 