import { Request, Response } from "express";
import { ProductService } from "../services";

const productService = new ProductService();

class ProductController {
  index(req: Request, res: Response) {
    const products = productService.getAll();
    res.json(products);
  }
}

export { ProductController };
