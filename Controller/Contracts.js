const knex = require('../DB/DB');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: '*' },
});

async function getContracts(req, res) {
    try {
        const { status, client_name, contract_id, page = 1, limit = 10 } = req.query;
        let query = knex('contracts').select('*');
        if (status) query.where('status', status);
        if (client_name) query.where('client_name', 'ilike', `%${client_name}%`);
        if (contract_id) query.where('contract_id', contract_id);

        const results = await query.offset((page - 1) * limit).limit(limit);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function postContracts(req, res) {
    try {
        const { client_name, contract_id, status } = req.body;
        const newContract = await knex('contracts').insert({ client_name, contract_id, status }).returning('*');
        res.status(201).json(newContract);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function putContracts(req, res) {
    try {
        const { id } = req.params;
        const { status, client_name } = req.body;
        if (!['pending', 'finalized', 'canceled'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status value' });
        }
        const updated = await knex('contracts')
            .where({ id })
            .update({ status, client_name })
            .returning('*');

        io.emit('contractUpdated', updated[0]);
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function deleteContracts(req, res) {
    try {
        const { id } = req.params;
        await knex('contracts').where({ id }).del();
        res.json({ message: 'Contract deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { getContracts, postContracts, putContracts, deleteContracts };