use NBD;

printjson(
db.people.aggregate(
[{ $addFields: { "city": "$location.city" } }, 
{ $match: { birth_date: { $gte: "2001-01-01" } } }, 
{ $project: { _id: 0, "first_name": 1, "last_name": 1, city: 1 } 
}]
)
);
