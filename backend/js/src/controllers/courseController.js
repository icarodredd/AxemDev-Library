import app from "../frameworks/app";

app.get("/", (req, res) => {
  return res.send("hello");
});
