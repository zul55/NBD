use NBD;

printjson(db.people.findOne({ nationality: "China", sex: "Female" }));