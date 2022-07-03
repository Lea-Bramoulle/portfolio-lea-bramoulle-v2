const express = require('express');
const path = require('path');
const app = express();

// On a une variable pour pouvoir utiliser le PORT proposé dans l'environnement s'il existe
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "./../client/src")));

app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.listen(PORT, ()=>{
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});