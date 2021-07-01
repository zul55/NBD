use NBD;

printjson(db.people.find(
{ "$expr": { $and: [{ "$gte": [{ "$toDouble": "$weight" }, 68] }, 
    { "$lt": [{ "$toDouble": "$weight" }, 71.5] }] } })
    
    );