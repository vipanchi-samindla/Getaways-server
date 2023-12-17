import express, { Request, Response } from "express";
import listings from "./mock/listings";
const app = express();
app.get("/", (_req: Request, res: Response) => {
    res.json(listings);
    res.end();
});

app.listen(3000, () => { console.log("Running on port 3000 and Testing husky"); });
