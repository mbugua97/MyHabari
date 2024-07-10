//app dependancies
import { PrismaClient } from '@prisma/client';
import { validationResult } from 'express-validator';



const prisma = new PrismaClient();

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught exception: ${err} `);
  process.exit(1);
});


//all news category
export const NewsCategoryList=async (req,res)=>{
    try {
      const news = await prisma.ContentCategory.findMany();
      res.json(news);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    };



export const AddCategory = async (Newcategory) => {
        try {
          const createdcategory = await prisma.ContentCategory.create({
            data: Newcategory
          });
          return createdcategory;
        
        } catch (error) {
          throw error;
        }
      };
      
//fetching a single news category
export const  NewsCategory=async (req,res)=>{
        const errors = validationResult(req)    
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
          try {
            const category_id=req.category_id
            const parsedId = parseInt(category_id);
            const category = await prisma.ContentCategory.findUnique({
              where: { id: parsedId },
            });
      
            if (!category) {
              res.status(404).send({"message":"category not found"});
              return;
            }
        
            res.json(category);
      
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
          };


export const patchcategory = async (req, res) => {

            const errors = validationResult(req)    
            if(!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()})
            }
          
             const category_id=req.category_id
            const parsedId = parseInt(category_id);;
          
                const { categoryName } = req.body;
              
                try {
                  const updateData = {
                    ...(categoryName && { categoryName }),
                  };
            
                  const updatedUser = await prisma.ContentCategory.update({
                    where: { id: parsedId }, 
                    data: updateData,
                  });
                  res.status(200).json(updatedUser);
                } catch (error) {
                res.status(500).json({message:"category not found"});
                }
              };
          
          
          
          



 //deleting a category  
 export const deleteCategory  = async (req,res)=> {
    //vaidating the user id querry params
    const errors = validationResult(req)    
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
  
  
    try {
    const category_id=req.category_id
    const parsedId = parseInt(category_id);
    const category = await prisma.ContentCategory.delete({
        where: { id: parsedId },
      });
      res.status(200).json({ message: 'category deleted successfully',category });
    } catch (error) {
        console.log(error);
      res.status(500).json({ message:"category not found" });
    }
  };
  
  