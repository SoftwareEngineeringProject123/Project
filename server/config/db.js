// where we will make the connection to our DB instead of in index.js

import mongoose from "mongoose";
// const mongoose = require("mongoose");



// we do a function because we can export it to use in many file
const connectDB = async () =>{

    try{ // try to connect

        const connect = await mongoose.connect(process.env.DB_CONNECTION)

        console.log( `DATABASE CONNECTED : ${connect.connection.host}` )

    }catch(error){

        console.log( error )
        process.exit(1);
    }
}




// we don't do this because we can export it to use in many file
// await mongoose.connect(process.env.DB_CONNECTION, async ()=>{ console.log( `DATABASE CONNECTED : ${mongoose.connection.host}` ) })


export default connectDB
// module.exports = { connectDB }