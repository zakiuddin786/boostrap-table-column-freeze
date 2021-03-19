const express = require('express');
const app = express();
const axios = require("axios");

var bodyParser = require('body-parser');
var fs = require('fs');
http = require('http');


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public/'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json())

app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

  app.get('/',async (req, res) =>{
    let leaderBoard = await axios.get("api of leaderboard");
    leaderBoard = leaderBoard.data;
    console.log(leaderBoard);
    res.render('index',{
      leaderBoard
    })
  } );

  // ALL SPECIFIC PAGES SHOULD BE CALLED HERE

  app.get('/all-testimonials',async (req,res)=>{
    try {
      let testimonials = await Testimonial.find().sort({priority:1});
      // testimonials=randomArrayShuffle(testimonials);
      console.log(testimonials);
      let testimonialCount=testimonials.length;
      res.render('testimonials', {
        title:'Testimonials',
        testimonials: testimonials,
        length:testimonialCount
      });
    } catch (error) {
      console.log(error)
    }
  })
  // PLACEHOLDER FOR GETTING ANY PAGE FROM VIEW



  http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
  });

