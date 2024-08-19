const express = require("express");
const app = express();
const port = 3000;

app.get("/naipe", (req, res) => {
});

app.listen(port, () => {
    console.log("Isso aqui executa quando o servidor inicia");
})
