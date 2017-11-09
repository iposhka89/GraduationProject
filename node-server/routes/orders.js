module.exports = ((app, fs) => {
    app.get('/api/orders', (req, res) => {
        res.status(200).send(fs.readFileSync('data.json', 'utf8'));
    });

    app.post('/api/orders', (req, res) => {
        console.log('Works');
    });
});