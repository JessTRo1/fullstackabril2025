const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, '../data/emails.json');

//Funcion auxiliar para leer los correos
function getEmails() {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

// Funcion auxiliar para guardar correos
function saveEmails(emails) {
    fs.writeFileSync(dataPath, JSON.stringify(emails, null, 2));
}

// Get /api/emails
router.get('/', (req, res) => {
    const emails = getEmails();
    res.json(emails);
});

// POST /api/emails/:id/read
router.post('/:id/read', (req, res) => {
    const id = parseInt(req.params.id);
    const emails = getEmails();
    const email = emails.find(e => e.id === id);
    if (email) {
        email.read = true;
        saveEmails(emails);
        res.json(email);
    } else {
        res.status(404).json({ error: 'Email not found' });
    }
});

// Post /api/emails/:id/archive
router.post('/:id/archive', (req, res) => {
    const id = parseInt(req.params.id);
    const emails = getEmails();
    const email = emails.find(e => e.id === id);
    if (email) {
        email.archived = true;
        saveEmails(emails);
        res.json(email);
    } else {
        res.status(404).json({ error: 'Email not found' });
    }
});

module.exports = router;





