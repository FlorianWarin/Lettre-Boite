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