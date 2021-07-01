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
                avr: {$avg: {$toDouble: "$credit.balance"}},
                sum: {$sum: {$toDouble: "$credit.balance"}}
            }
        }
    ]
).toArray());