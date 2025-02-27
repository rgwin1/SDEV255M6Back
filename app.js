const express = require('express'); 
const Song = require("./models/songs")
var cors = require('cors')

const app = express();
app.use(cors({ origin: '*'}));

app.use(express.json())

const router = express.Router();

// grab all the songs in a database
router.get("/songs", async(req, res) => {
    try{
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch (err){
        console.log(err)
    }
});

//get a single song
router.get("/songs/:id", async (req, res) => {
    try{
        const song = await Song.findById(req.params.id)
        res.json(song)
    }
    catch{
        res.status(400).send(err)
    }
}) 

router.post("/songs", async(req, res) => {
    try{
        const song = new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
    }
    catch(err){
        res.status(400).send(err)
        
    }
})

//update is to update an existing record/resource/database entry using a put request
router.put("/songs/:id", async(req, res) => {
    //first we need to find and update the song the frontend wants updated
    //id needs to be requested from request
    //find in database and update
    try{
        const song = req.body //grabs body of request
        await Song.updateOne({_id: req.params.id}, song)
        console.log(song)
        res.sendStatus(204)

    }
    catch{
        res.status(400).send(err)
    }
})


app.use('/api', router);
app.listen(3000);

