import { Request, Response, NextFunction } from "express";

/**
 * GET /login
 * Login page.
 */
export const getHome = (req: Request, res: Response) => {
    res.send("Welcome!");
};
