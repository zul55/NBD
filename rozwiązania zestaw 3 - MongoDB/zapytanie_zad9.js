use NBD;

printjson
(db.people.update(
{"first_name": "Antonio"},
{$set:
{"hobby": "pingpong"}}, {"multi": true}));