import { Employee } from "../models/Employee.js"

export const addEmployee = async(req, res) =>{
    const {name, age, position} = req.body
    try{
        const employee = new Employee({
            name,
            age,
            position
        })
        var emp = await employee.save()
        console.log(emp)
        res.status(200).json({
            msg: "Success"
        })
    }
    catch(err){
        res.status(500).json({msg: "something went wrong"})
        console.log(err)
    }
}