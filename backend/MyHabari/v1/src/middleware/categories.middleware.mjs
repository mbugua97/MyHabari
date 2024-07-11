//news categories middleware
export const categoryid = async (req, res, next) => {
    try{
     const id=req.params.id
     req.category_id=id
     next()
    }
    catch{
 
     return res.status(401).json({ message: 'Please log in' });
    }
   };