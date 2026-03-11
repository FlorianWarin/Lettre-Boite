import express from "express";
import { saveReview } from "../config/mongo.js";

const router = express.Router();

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



export default router;