const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/skills", (req, res) => {
  res.render("skills");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
