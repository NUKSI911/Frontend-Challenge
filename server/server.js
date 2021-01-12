const express = require("express");
const path = require("path");
const cors = require('cors')


const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
const publicPath = path.join(__dirname ,"..","build");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
