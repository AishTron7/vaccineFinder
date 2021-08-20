const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const about1 = "This website is built to provide a clean and easy to use interface for the average user. Just open the website, enter your pincode, hit submit, and BAM! you get neat tabular data to answer all your vaccine slot related queries. Can't get simpler than that! 🤩";

const about2 = "The Tech Stack of this website includes Node.js for backend and Embedded Javascript Templating (EJS) to give a consistent look across all the pages without repeating the header & footer code for every page. When the user submits the pincode, a well crafted query is sent as a GET request to the public Cowin API, which in return sends the JSON data about the vaccination centers. Then with due error handling, that data is parsed and displayed in a dynamic html table. This website is hosted on heroku and the codebase is available on github ";

const about3 = "And lastly, thank you for checking out this website! I actually planned a lot more features (like vacant slot notifications etc.) but had to wind up this project due to time constraints. :) For any queries, feel free to contact me at aishwarystark@gmail.com or at Instagram @ aishtron7 .";

const app = express();

app.set('view engine', 'ejs');

//This specifies a static folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/about", function (req, res) {
    res.render("about", {
        About1: about1,
        About2: about2,
        About3: about3
    });
});



app.post("/", function (req, res) {


    //today's date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    //today's date code ends



    const pin = req.body.pincode;
    if (pin == undefined) {
        alert("Please enter a valid pincode!");
    }
    const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" + pin + "&date=" + today;//dd-mm-yyyy

    //making http get request (in JSON format)
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            if (data) {
                try {
                    const cowinData = JSON.parse(data);
                    res.render("show", {
                        cowinData: cowinData
                    });
                } catch (e) {
                    console.log(e); // error in the above string!
                }


            }
        });
    });

});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});