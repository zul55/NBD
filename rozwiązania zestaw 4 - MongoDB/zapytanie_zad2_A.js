use NBD;

printjson(
db.people.aggregate(
    [
    { "$unwind": {
            "path": "$credit",
            "preserveNullAndEmptyArrays": true
    } },
        {
            $group: {
                _id: { "credit currency" : "$credit.currency" },
                sum: { $sum: {$toDouble: "$credit.balance"} }
            }
        }
    ]
).toArray());