use NBD;

var mapFunction1 = function() {
   emit(this.sex, this.weight);
};

var reduceFunction1 = function(keySex, valuesWeight) {
   return Array.avg(valuesWeight);
};

var mapFunction2 = function() {
   emit(this.sex, this.height);
};

var reduceFunction2 = function(keySex, valuesHeight) {
   return Array.avg(valuesHeight);
};

db.people.mapReduce(
   mapFunction1,
   reduceFunction1,
   { out: "Average_weight" }
)

db.people.mapReduce(
   mapFunction2,
   reduceFunction2,
   { out: "Average_height" }
)

db.Average_weight.find().sort( { _id: 1 } )
db.Average_height.find().sort( { _id: 1 } )