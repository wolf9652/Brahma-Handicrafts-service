const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Data base connected');
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
        app.use(cors());
    });
}).catch((err) => console.log('Error in connecting DB', err));


app.get('/users', async(req, res) => {
   res.json({})
})
// const corsOption = {
//     origin: ['http://localhost:5173']
// };

// const serviceAccount = require("./firebaseConfig.json")

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// })
