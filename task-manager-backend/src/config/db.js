import mongoose from 'mongoose';


// importing mongodb url;
const MONGODB_URL = process.env.MONGODB_URL;

const DBNAME = 'TaskManager'

const connectDB = async () =>{
    try{
        const conn =  await mongoose.connect(MONGODB_URL);
        console.log("Database Connect Successfully");
        console.log(
          `\n MongoDB Connected !! DB HOST: ${conn.connection.host}`
        );
        // console.log(conn);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }

}

export default connectDB;