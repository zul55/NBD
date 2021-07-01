use NBD;

printjson(
db.people.aggregate(
   [
     {
       $group:
         {
           _id: 0,
           zawody: { $addToSet: "$job" }
         }
     }
   ]
).toArray());