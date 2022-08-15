const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`Executando na porta ${process.env.PORT}`);
});