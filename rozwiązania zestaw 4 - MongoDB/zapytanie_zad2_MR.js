use NBD;

var mapFunction1 = function () { 
    let BMI = this.weight / (this.height/100 * this.height/100);
    emit(this.nationality, {max_bmi: BMI,
    min_bmi: BMI,
    avr_BMI: {bmi: BMI, count:1}}); };

var reduceFunction1 = function(nationality, BMI) {
    
    var max_BMI = 0
    var min_bmi = 150
    var avr_sum = 0
    var avr_count = 0
    
    BMI.forEach (function(bmi) {
    max_BMI = Math.max(max_BMI, bmi.max_BMI),
    min_bmi = Math.min(min_bmi, bmi.min_bmi),
    avr_sum += bmi.avr_BMI.BMI
    avr_count += bmi.avr_BMI.count
    });
   return {max_BMI: max_BMI,
           min_bmi: min_bmi,
           avr_BMI: {bmi: avr_sum, count: avr_count}
   }
};

var toOutput = function (nationality, bmi) {
    return {max_BMI: bmi.max_BMI.toFixed(2),
            min_bmi: bmi.min_bmi.toFixed(2),
            avr_BMI: (bmi.avr_BMI.BMI / bmi.avr_BMI.count).toFixed(2)
    }};

db.people.mapReduce(
   mapFunction1,
   reduceFunction1,
   { 
       finalize: toOutput,
       out: {inline: 1 }, }
);


printjson(db.Sumed_balance.find().sort( { _id: 1 } ))
