const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Poetry Blog' });
});

app.get('/poem/:id', (req, res) => {
    const poemId = req.params.id; // Get the poem ID from the URL
    // Fetch poem data using the ID
    const poem = {
        title: 'Sample Poem',
        content: 'This is a beautiful poem...',
        author: 'John Doe'
    };
    res.render('poem', { title: poem.title, poem });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
