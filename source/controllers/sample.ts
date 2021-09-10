import logging from "../config/logging";
import {Request, Response, NextFunction} from "express";

const NAMESPACE = 'Sample Controller';

const helloWorld = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Hello World route called....');

    return res.status(200).json({
        message: 'Hello World Fellas...'
    });
}

export default { helloWorld };