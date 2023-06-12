const express=require("express")
const app=express()
const path=require("path")
const Employee=require("./moduleController/employeeController")
const Admin=require("./moduleController/adminController")
const Task=require("./moduleController/taskController")
app.use(express.json())
app.use("/employee",Employee)
app.use("/auth",Admin)
app.use("/tasks",Task)

// app.use(express.static("/Users/mac/Desktop/code/kriscent/fronted/build"))
app.use(express.static("..//fronted/build"))
// app.use(express.static(path.join(__dirname,'build')))



module.exports=app