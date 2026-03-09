import express from "express";

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



export default router;