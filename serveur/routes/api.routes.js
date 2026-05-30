import express from "express";
import { saveReview } from "../config/mongo.js";
import 'dotenv/config';

const router = express.Router();

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

router.get('/search', async (req,res) => {

    const query = req.query.q;

    try {
        const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`);
        const results = await response.json();

        res.json(results);
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


router.post(`/postreview/:movieID`, async(req,res) => {

    try { 
        const newReview = new saveReview(req.body); 
        await newReview.save();

        res.status(200).json({ message: "Avis enregistré" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'enregistrement" });
    }

})

router.post("/sendtoken", async (req,res) => {

    try {
      const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${import.meta.env.VITE_TWITCH_CLIENT_ID}&client_secret=${import.meta.env.VITE_TWITCH_CLIENT_SECRET}&grant_type=client_credentials`, {
        method:"POST",
      })
      
      
    }

    const data = await response.json();
    
    console.log("Ton Token Twitch :", data.access_token);

    }catch (e) {
    console.error(e)
  }

})

router.get(`/getreviews/:name`, async(req,res) => {

    const name = req.params.name

    try{
        const response = await saveReview.find({userName: name})

        if(response) {
            res.status(200).json(response);
        }else {
            res.status(404).end();
        }

    }catch(error){
        console.error(error)
    }

})



export default router;