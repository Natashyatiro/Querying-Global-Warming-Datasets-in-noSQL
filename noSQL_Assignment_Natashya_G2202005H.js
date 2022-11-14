use sustainability2022

//1
db.greenhouseGas.distinct("category")

// or
db.greenhouseGas.aggregate([
    {$group:{_id:{Category: "$category"}}}
])

//2
db.greenhouseGas.aggregate([
    {$match:{"country_or_area": "European Union"}},
    {$match:{"year": {$in: [2010,2011,2012,2013,2014]}}},
    {$group: {_id:{country_or_area: "$country_or_area"},
    sumOfEmission: {$sum: "$value"}}}
])

//3
db.greenhouseGas.aggregate([
    {$match:{"country_or_area": "Australia"}},
    {$match:{"value": {$gt: 530000}}},
    {$group: {_id:{groupByYear: "$year", groupByCategory: "$category"},
    sumOfEmission: {$sum: "$value"}}},
    {$sort: {"_id.groupByYear":1}}
])

//4
db.massBalance.aggregate([
    {$group: {_id:{groupByName: "$NAME", groupByInvestigator: "$INVESTIGATOR"},
    surveyedAmt: {$sum: 1}}},
    {$match:{"surveyedAmt": {$gt:11}}},
    {$sort: {"_id.groupByName":1}}
])

//5
db.tempChange.aggregate([
    {$match: {"Year": {$in: ["2010","2011","2012","2013","2014"]}}},
    {$match: {"Area": {$in: ["Brunei Darussalam", "Cambodia", "Indonesia", 
    "Myanmar", "Lao People's Democratic Republic", "Malaysia", "Philippines", 
    "Singapore", "Thailand", "Viet Nam"]}}},
    
    {$group: {_id:{ groupByArea: "$Area",
        groupByYear: "$Year"},
        avgValueChange: {$avg: "$Value"}}},
    {$merge: "Result"}
    ])
    
db.tempChange.aggregate([
    {$match: {"Year": {$in: ["2010","2011","2012","2013","2014"]}}},
    {$match: {"Area": {$in: ["Brunei Darussalam", "Cambodia", "Indonesia", 
    "Myanmar", "Lao People's Democratic Republic", "Malaysia", "Philippines", 
    "Singapore", "Thailand", "Viet Nam"]}}},
    
    {$group: {_id:{ groupByYear: "$Year"},
        ASEAN_avgValueChange: {$avg: "$Value"}}},
    {$merge: "Result"}
    ])

db.Result.aggregate([
     {$sort: {"_id.groupByYear":1, "_id.groupByArea":1}}
    ])