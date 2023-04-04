import { Router } from "express";
import {pool} from "../db.js";

const router = Router();

router.get("/ping", (req, res) => {
    const result = pool.query("SELECT 1 + 1 as result");
    console.log(result)
    res.json("ping");
})

export default router;