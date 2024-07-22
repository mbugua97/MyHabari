import { ContentList,AddContent ,NewsByCategory, NewsByOwners,OwnerNews,deleteContent} from "../database/news.Content.mjs";
import { validationResult } from "express-validator";

export const News =ContentList

//news by category
export const newsBycategory=NewsByCategory

//news by owner
export const newsByowner=NewsByOwners

//news by owner
export const Ownernews=OwnerNews


export const Newnewscontent = async (req, res) => {
    //checking if errors exist in the body validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { content,content_title,owner_id,category,ready } = req.body;
    try {
      const newcontent = {
        content,content_title,owner_id,category,ready:false 
      };
      const createdcontent = await AddContent(newcontent);
      res.status(201).json(createdcontent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const deletecontent=deleteContent