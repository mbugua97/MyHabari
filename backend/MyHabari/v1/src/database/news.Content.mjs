//app dependancies
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";

const prisma = new PrismaClient();

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught exception: ${err} `);
  process.exit(1);
});

export const ContentList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const userid=parseInt(req.User_id)
    const skip = (page - 1) * limit;

    const totalCount = await prisma.Publishedcontent.count(
      {
        where: {
          ready : true,
          owner_id :{
            not:userid
          }
        }
      }
    );
    const totalPages = Math.ceil(totalCount / limit);

    const content = await prisma.Publishedcontent.findMany({
      where: {
        ready : true,
        owner_id :{
          not:userid
        }
      },
      skip: skip,
      take: limit,
      orderBy: {
        id: "desc",
      },
      include: {
        Users: {
          select: {
            Name: true,
            profilePic: true
          }
        }
      }
    });

    res.json({
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
      data: content,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//fetching news by category
export const NewsByCategory = async (req, res) => {
  const userid=parseInt(req.User_id)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const category_id = req.category_id;
    const parsedId = parseInt(category_id);
    const category = await prisma.Publishedcontent.findMany({
    where: { category: parsedId ,
        ready : true,
        owner_id :{
          not:userid
        }
      },
      skip: skip,
      take: limit,
      orderBy: {
        id: "desc",
      },
      include: {
        Users: {
          select: {
            Name: true,
            profilePic: true
          }
        }
      }
    });

    const totalCount = category.length;
    const totalPages = Math.ceil(totalCount / limit);

    if (!category) {
      res.status(404).send({ message: "category not found" });
      return;
    }

    res.json({
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
      data: category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const OwnerNews=  async (req, res) => {

  const userid=parseInt(req.User_id)

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const category_id = req.category_id;
    const parsedId = parseInt(category_id);
    const category = await prisma.Publishedcontent.findMany({
      where: { 
        owner_id:userid
      },
      skip: skip,
      take: limit,
      orderBy: {
        id: "desc",
      },
      include: {
        Users: {
          select: {
            Name: true,
            profilePic: true
          }
        }
      }
    });

    if (!category) {
      res.status(404).send({ message: "no news found" });
      return;
    }
    const totalCount = category.length;
    const totalPages = Math.ceil(totalCount / limit);
    res.json({
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
      data: category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const NewsByOwners = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const category_id = req.category_id;
    const parsedId = parseInt(category_id);
    const category = await prisma.Publishedcontent.findMany({
      where: { category: parsedId ,
        ready : true
      },
      skip: skip,
      take: limit,
      orderBy: {
        id: "desc",
      },
    });

    if (!category) {
      res.status(404).send({ message: "no news found" });
      return;
    }
    const totalCount = category.length;
    const totalPages = Math.ceil(totalCount / limit);
    res.json({
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
      data: category,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const AddContent = async (newcontent) => {
  try {
    const createdContent = await prisma.Publishedcontent.create({
      data: newcontent,
    });
    return createdContent;
  } catch (error) {
    throw error;
  }
};

export const validateownership = async (user,owner) => {
  try {
    const content = await prisma.Publishedcontent.findUnique({
      where: { id: owner},
    });
    if (content.owner_id===user){
    return true;
    }
    else{
      return false;
    }
  } catch (error) {

   return false
  
  }
};




 //deleting a category  
 export const deleteContent  = async (req,res)=> {
  //vaidating the user id querry params
  const errors = validationResult(req)    
  if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
  }


  try {
  const category_id=req.category_id
  const parsedId = parseInt(category_id);
  const category = await prisma.Publishedcontent.delete({
      where: { id: parsedId },
    });
    res.status(200).json({ message: 'content deleted successfully',category });
  } catch (error) {
      console.log(error);
    res.status(500).json({ message:"content not found" });
  }
};

