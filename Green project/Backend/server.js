const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_SECRET = 'your_secret_key';

// MongoDB Connection
mongoose.connect('mongodb:////127.0.0.1:27017/greencharge', { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
});
const User = mongoose.model('User', UserSchema);

// Signup API
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

// Login API
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Dashboard API
app.get('/api/energy', (req, res) => {
    const energyData = {
        usage: 12,
        recommendation: 'Turn off appliances when not in use.',
    };
    res.json(energyData);
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});