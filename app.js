

const express = require('express'); 
var cors = require('cors')
const bodyParser = require('body-parser');
const Song = require("./models/songs")
const app = express();
app.use(cors({ origin: '*'}));
app.use(bodyParser.json())
const router = express.Router();




// grab all the songs in a database
router.get("/songs", function(req, res){
    let query = {}
    if(req.query.genre){
        query = {genre : req.query.genre}
    }
    //to find all songs in a database, use find() method build into mongodb
    Song.find(query, )
})

app.use('/api', router);
app.listen(3000);

//LEFT OFF AT 37:03