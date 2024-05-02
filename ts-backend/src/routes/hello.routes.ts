import { Router ,Request,Response } from "express";

const helloRouter = Router();

// define routes
helloRouter.get("/", (req:Request, res:Response) => {
    res.json({
      "data" :"Server is LIVE"
  })
});

export default helloRouter;