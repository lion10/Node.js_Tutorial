import express, { response } from "express";
import favicon from "serve-favicon";
import path from "path";
import data from "./data/MOCK_DATA.json";

const app = express();
const PORT = 3000;

// This is for the images folder on path /
app.use(express.static("images"));
// This is for images folder on path images
app.use("/images", express.static("images"));

// method to use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this is proxies
app.set("trust proxy", "loopback");

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get(
  "/item/:id",
  (req, res, next) => {
    // middleawre that pulls the data
    let id = req.params.id;
    //console.log(id);
    console.log(data[id]);
    // middleawre that use the req obj
    console.log(`request from ${req.originalUrl}`);
    console.log(`request type ${req.method}`);

    // everything above res is a middle ware
    res.send(data[id]);
    next();
  },
  (req, res) => {
    console.log("are u doing well lol ^_^ ");
  }
);

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/newItem", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/images", (req, res) => {
  // get data first
  //res.download("images/omar.jpg");
  res.redirect("http://google.com");
  //res.end();
});

// Chaining routing
app
  .route("/item")
  .get((req, res) => {
    //throw new Error();
    // get data first
    //res.download("images/omar.jpg");
    //res.redirect("http://google.com");
    //res.end();
    //res.send(`a get request with /item route on port ${PORT}`);
  })
  .put((req, res) => {
    res.send(`a put request with /item route on port ${PORT}`);
  })
  .delete((req, res) => {
    res.send(`a delete request with /item route on port ${PORT}`);
  });

// handle when error is occures
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(`Red alert lol ${err.stack}`);
});

app.listen(PORT, () => {
  console.log(`port is ${PORT}`);
  //console.log(data);
});
