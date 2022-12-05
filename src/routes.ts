import { Router } from "express";

import { ProductController } from "./controllers";

const productController = new ProductController();

const router = Router();

router.get("/produtos", productController.index);
router.get("/produtos/:id/frete/:cep", productController.show);

export { router };
