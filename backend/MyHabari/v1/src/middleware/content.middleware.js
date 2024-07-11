export const contentById = async (req, res, next) => {
    try{
     const id=req.params.id
     req.User_id=req.params.id
     next()
    }
    catch{
 
     return res.status(401).json({ message: 'Please log in' });
    }
   };
export const contentByOwner = async (req, res, next) => {
    try{
     const id=req.params.id
     req.User_id=req.params.id
     next()
    }
    catch{
 
     return res.status(401).json({ message: 'Please log in' });
    }
   };