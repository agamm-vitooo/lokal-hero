import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();

// Middleware CORS untuk mengizinkan akses dari frontend
app.use(cors());

// Endpoint untuk mengambil data dari hero.json
app.get('/api/heroes', (req, res) => {
    fs.readFile(path.join(process.cwd(), 'hero.json'), 'utf8', (err, data) => {
        if (err) {
            console.error("File not found:", err);
            return res.status(404).json({ error: 'File not found' });
        }
        console.log("Data read successfully from hero.json");
        res.json(JSON.parse(data));
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});