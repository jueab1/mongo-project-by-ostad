
let MongoClient= require("mongodb").MongoClient

let URL= "mongodb+srv://jony:D67lp89uPRKGZfbB@cluster0.btqeo8y.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(URL,function (error,MyMongoClient) {
    if (error){
        console.log("connection failed")
    }
    else {
        console.log("connection success")
        // InsertData(MyMongoClient)
        // DeleteOneItem(MyMongoClient)
        // DeleteAllItem(MyMongoClient)
        // FindOneWithoutCondition(MyMongoClient)
        // FindOneWithCondition(MyMongoClient)
        // FindAllData(MyMongoClient)
        // FindAllDataByProjection(MyMongoClient)
        // FindAllDataBYQuery(MyMongoClient)
        // FindAllDataByLimit(MyMongoClient)
        // FindAllDataBySort(MyMongoClient)
        // UpdateNewData(MyMongoClient)
        // CreateNewCollection(MyMongoClient)
        DeleteDataCollection(MyMongoClient)
    }

})
// data insert to database
function InsertData(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")
     let MyCollection=MyDataBase.collection("students")
    //Data collection always json format syestem

    let MyData={Name:"Rabbil",Age:"35",Roll:"1",City:"Dhaka"}

    MyCollection.insertOne(MyData,function (error) {
        if (error){
            console.log("Data Collection Failed")
        }
        else {
            console.log("Data Collection Successed")
        }

    })

}
// data delete one item system
function DeleteOneItem(MyMongoClient) {
    let MyDataBase= MyMongoClient.db("school")
    let MyCollection= MyDataBase.collection("students")

    let  MyData={Roll:"50"}
    //deleteone method call for just onew item data delete
    MyCollection.deleteOne(MyData,function (error) {
        if (error){
            console.log("Data delete failed")
        }
        else {
            console.log("Data delete success")
        }
    })

}
// data delete all item syestem
function DeleteAllItem(MyMongoClient) {

    let MyDataBase=MyMongoClient.db("school")
    let MYCollection=MyDataBase.collection("students")
    //            no object condition avaiable for deleteMany method just (call back function showing)
    MYCollection.deleteMany(function (error,ResulObj) {
       if (error){
           console.log("Data delete failed")
       }
       else {
           console.log(ResulObj)
       }

    })

}
// //any kind of  data find without condition system

function FindOneWithoutCondition(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")
    let MyCollection=MyDataBase.collection("students")

    let FindObj={}
    MyCollection.findOne(FindObj,function (error,result) {
        console.log(result)

    })
}
// specific one data find with condition system

function FindOneWithCondition(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")
    let MyCollection=MyDataBase.collection("students")

    let FindObj={Roll:"50"}
    MyCollection.findOne(FindObj,function (error,result) {
        console.log(result)

    })

}
// all data find system

function FindAllData(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")
    let MyCollection=MyDataBase.collection("students")


    MyCollection.find().toArray(function (error,result) {
        console.log(result)

    })

}
// use projection method for find out specific collmn=data

function FindAllDataByProjection(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")
    let MyCollection=MyDataBase.collection("students")

    let FindObj={}
    let FindProjection={projection:{Age:35}}

    MyCollection.find(FindObj,FindProjection).toArray(function (error, result) {
        console.log(result)

    })

}
// data find with query method

function FindAllDataBYQuery(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")
    let MyCollection=MyDataBase.collection("students")

    let QueryObj={City:"Mymenshingh"}

    MyCollection.find(QueryObj).toArray(function (error, result) {
        console.log(result)

    })

}
// find data with limit method

function FindAllDataByLimit(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")
    let MyCollection=MyDataBase.collection("students")

//  an object is not required when using the limit method

    MyCollection.find().limit(5).toArray(function (error, result) {
        console.log(result)
    })

}
// find data with sort method

function FindAllDataBySort(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")
    let MyCollection=MyDataBase.collection("students")
    //in sort method data comes in reverse way & data comes in straight way
    let SortObj={Roll:-1}

    MyCollection.find().sort(SortObj).toArray(function (error, result) {
        console.log(result)

    })

}
// data update method

function UpdateNewData(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")
    let MyCollection=MyDataBase.collection("students")

    let DataQuery={Roll:"3"}
    let MyNewValues= {$set: {Name:"Rabbil Hasan Rupom",City:"Rangpur"}}

    MyCollection.updateOne(DataQuery,MyNewValues,function (error, result) {

        console.log(result)
    })

}
//  create new collection data under the database

function CreateNewCollection(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")

    MyDataBase.createCollection("teachers",function (error, result) {

        console.log(result)
    })

}
// deletecollection  under the database {dropcollection()method}

function DeleteDataCollection(MyMongoClient) {
    let MyDataBase=MyMongoClient.db("school")

    MyDataBase.dropCollection("teachers",function (error, result) {

        console.log(result)
    })
}
