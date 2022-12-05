import { Router, Request, Response } from "express";

import { ProductController } from "./controllers";

const productController = new ProductController();

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ ok: true });
});

router.get("/produtos", productController.index);

export { router };
