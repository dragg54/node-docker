import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    },
    position:{
        type: String
    }
})

export const Employee = new mongoose.model("employee", EmployeeSchema)