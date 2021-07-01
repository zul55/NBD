use NBD;


var mapFunction1 = function() {
    emit({}, this.job);
}

var reduceFunction1 = function(key, values) {
      if (!values) {
      values = 0;
      }
    values++;
    return values;
    }

db.collection.mapReduce(mapFunction1, reduceFunction1,
  {out: 'replace'}
)

db.replace.find().pretty()