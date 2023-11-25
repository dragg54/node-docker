import mongoose from "mongoose";

const dbConnect = async() => {
    const connectionString ="mongodb://localhost:27017/employee"
    mongoose.connect(connectionString)
    .then(()=>{
        console.log("connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default dbConnect

