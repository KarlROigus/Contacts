const express = require('express');
const router = new express.Router();
const pool = require('../connection/connection')

router.get('/contacttypes', async(req, res) => {

    try {
        
        const query = 'select * from contacttype';
        const result = await pool.query(query);
        return res.json(result.rows);

    } catch (e) {

        console.error('Error executing query', e);
        res.status(500).json({
            error: 'Internal server error'
        })

    }

})

router.post('/contacttypes', async(req, res) => {

    const { contactType } = req.body;
    if (!contactType) {
        return res.status(400).json({ error: 'Contact type is required' });
    }

    try {
        
        const query = 'insert into contacttype (contacttypename) values ($1) returning *';
        const values = [contactType];
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);

    } catch (e) {

        console.error('Error executing query', e);
        res.status(500).json({
            error: 'Internal server error'
        })

    }

})






module.exports = router;