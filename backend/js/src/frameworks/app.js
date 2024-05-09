import express from "express";
const app = express();
app.listen(8080, () => console.log("working in http://localhost:8080"));

app.get("/hello", (req, res) => res.send("hello"));
export default app;
