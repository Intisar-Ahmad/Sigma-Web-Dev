use("CrudDB")

// db.createCollection("operations")

db.operations.insertMany([
    {
        name:"C",
     
    },
    {
        name:"R",
  
    },
    {
        name:"U",

    },
    {
        name:"D",
 
    }
])


let a = db.operations.find({name:"D"})
console.log(a,a.count());


//Update

db.operations.updateMany({name:"C"},{$set:{name:"Create"}})
db.operations.updateMany({name:"R"},{$set:{name:"Read"}})
db.operations.updateMany({name:"U"},{$set:{name:"Update"}})
db.operations.updateMany({name:"D"},{$set:{name:"Delete"}})

db.operations.find()

//Delete

db.operations.deleteMany({name:"Read"});