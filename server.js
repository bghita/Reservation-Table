var express = require("express");
var app = express()
var path = require("path");

var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

var waitlistData = [
    {
        customerid: "batsy",
        customername: "Becky",
        customeremail: "ghita@gmail.com",
        customerphone: "(510) 566-5137"
    }
]

var guestData = [
    {
        customerid: "Gfam",
        customername: "Zepelin",
        customeremail: "zghita62@gmail.com",
        customerphone: "(510) 909-1960"
    }
]

app.get("/api/table", function (req, res) {
    res.json(guestData)
})

// app.post("/api/table", function (req, res) {
//     console.log(req.body)
//     res.json({message: "ok"})
// 

app.get("/api/waitlist", function (req, res) {
    res.json(waitlistData)
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
})


app.post("/api/table", function (req, res) {
    console.log(req.body)

    var newGuest = req.body;

    // newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();

    console.log(newGuest);

    guestData.push(newGuest);

    res.json(newGuest);
});





app.listen(port, function () {
    console.log("App listening on PORT " + port);
});