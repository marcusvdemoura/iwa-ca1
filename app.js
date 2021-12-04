const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8100";

app.use(express.static(path.resolve(__dirname,'views')));


app.get("/", (req, res) => {
    res.render("/index.html", { title: "Home" });
  });


  app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
  });