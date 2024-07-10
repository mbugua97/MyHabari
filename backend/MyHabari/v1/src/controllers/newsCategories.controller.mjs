//app dependancy
import { validationResult } from "express-validator";

import { NewsCategoryList,deleteCategory,NewsCategory,patchcategory,AddCategory } from "../database/newsCategory.db.mjs";


export const News =NewsCategoryList

export const news=NewsCategory





export const Newcategory = async (req, res) => {
    //checking if errors exist in the body validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { categoryName } = req.body;
    try {
      const newcategory = {
        categoryName
      };
      const createdcategory = await AddCategory(newcategory);
      res.status(201).json(createdcategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



export const updatecategory=patchcategory

export const DeleteCategory=deleteCategory