import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
const app = express();
app.use(cors({
  origin:[
    'bookstore-fd0b1.web.app',
    'bookstore-fd0b1.firebaseapp.com'
  ],
  credentials:true
}));
app.use(express.json());
dotenv.config();
const PORT =process.env.PORT || 4000;
const URI=process.env.MongoBDURI;


//connnet to mongoBD
try{
   mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
   });
   console.log("Connected to mongoDB");
} catch{
  console.log("Error: ",error);
}

//defining routes
app.use('/book',bookRoute)
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})