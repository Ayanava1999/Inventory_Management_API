const express = require("express");
const { newElement, viewAllElement, viewOneelement, Updateelement, deleteelement } = require("../Controller/Addelement");
const { authToken } = require("../Middleware/Auth");
const { newStudent, viewAllstudent, deleteStudent, UpdateStudent, viewOneStudent } = require("../Controller/StudentController");
const { newInventory, viewInventory, Updateinventory, viewAllInventory, viewCheckInventory } = require("../Controller/InventoryController");
const route = express.Router();


// *************** Add Element *************
route.post("/addelement",authToken,newElement);
route.get("/showallelement",authToken,viewAllElement);
route.get("/viewoneelement/:id",authToken,viewOneelement);
route.put("/Updateelement/:id",authToken,Updateelement);
route.delete("/deleteelement/:id",deleteelement);

// *************** Student Api *************
route.post("/addStudent",authToken,newStudent);
route.get("/showallstudent",authToken,viewAllstudent);
route.get("/viewonestudent/:id",authToken,viewOneStudent);
route.put("/Updatestudent/:id",authToken,UpdateStudent)
route.delete("/deleteStudent/:id",deleteStudent)

// *************** Inventory Api *************
route.post("/addinventory",authToken,newInventory);
route.get("/viewinventory/:id",authToken,viewInventory);
route.put("/updainventory/:id",authToken,Updateinventory);
route.get("/viewallinventory",authToken,viewAllInventory);
route.get('/viewCheckInventory',authToken,viewCheckInventory)

module.exports= route;