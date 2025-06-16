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
    try {
    const emails = getEmails();
    res.json(emails);
    } catch (error) {
        console.error('Error reading emails:', error);
        res.status(500).json({ error: 'Error reading emails' });
    }
});

// POST /api/emails/:id/read
router.post('/:id/read', (req, res) => {
    try {
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
    } catch (error) {
        console.error('Error marking email as read:', error);
        res.status(500).json({ error: 'Error marking email as read' });
    }
});

// Post /api/emails/:id/archive
router.post('/:id/archive', (req, res) => {
    try {
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
    } catch (error) {
        console.error('Error archiving email:', error);
        res.status(500).json({ error: 'Error archiving email' });
    }
});

module.exports = router;





