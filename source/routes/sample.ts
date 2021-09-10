import express from "express";
import controller from "../controllers/sample";

const router = express.Router();

router.get('/hello', controller.helloWorld);

export = router;