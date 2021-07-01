use NBD;



var mapFunction1 = function() {
    var BMI = this.weight/(this.height*2);
   emit(this.nationality, BMI);
};

var reduceFunction1 = function(keyNationality, BMI) {
   return Array.max(BMI);
};

var mapFunction2 = function() {
    var BMI = this.weight/(this.height*2);
   emit(this.nationality, BMI);
};

var reduceFunction2 = function(keyNationality, BMI) {
   return Array.min(BMI);
};

var mapFunction2 = function() {
    var BMI = this.weight/(this.height*2);
   emit(this.nationality, BMI);
};

var reduceFunction2 = function(keyNationality, BMI) {
   return Array.avg(BMI);
};

db.people.mapReduce(
   mapFunction1,
   reduceFunction1,
   { out: "maks_BMI" }
)

db.people.mapReduce(
   mapFunction2,
   reduceFunction2,
   { out: "min_BMI" }
)

db.people.mapReduce(
   mapFunction1,
   reduceFunction1,
   { out: "avr_BMI" }
)

db.maks_BMI.find().sort( { _id: 1 } )
db.min_BMI.find().sort( { _id: 1 } )
db.avr_BMI.find().sort( { _id: 1 } )