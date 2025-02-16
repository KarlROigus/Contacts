const express = require('express');
const router = new express.Router();
const pool = require('../connection/connection')


router.get('/persons', async (req, res) => {
    try {
        const query = 'SELECT * FROM person';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/persons/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const query = 'SELECT * FROM Person WHERE id = $1';
        const values = [id];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching person:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.post('/persons', async (req, res) => {

    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'PersonName is required' });
    }
    try {
        const query = 'INSERT INTO Person (PersonName) VALUES ($1) RETURNING *';
        const values = [name];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);

    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router;