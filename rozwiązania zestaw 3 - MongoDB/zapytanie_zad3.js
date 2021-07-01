use NBD;

printjson(db.people.find({ nationality: "Germany", sex: "Male" }).toArray());