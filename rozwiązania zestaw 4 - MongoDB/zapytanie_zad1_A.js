use NBD;

db.people.find().forEach( function (x) {
x.weight = parseInt(x.weight, 10);
db.people.save(x);
});

db.people.find().forEach( function (x) {
x.height = parseInt(x.height, 10);
db.people.save(x);
});



printjson(
db.people.aggregate(
    [
        {
            $group: {
                _id: { sex: "$sex" },
                avgH: { $avg: "$height" },
                avgW: { $avg: "$weight" }
            }
        }
    ]
));