const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/AutoFixr";

mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var docs = [{ name: "sai", text: "Jenkins", selected:true },
                { name: "Karthik", text: "Mongodb Pipeline",selected:false },
                { name: "Vmtech",  text: "Jenkins Pipeline",selected:true}];
    
    db.collection("rules").insertMany(docs, function(err, res) {
        if (err) throw err;
        console.log(res.insertedCount+" documents inserted");
        
    });
});