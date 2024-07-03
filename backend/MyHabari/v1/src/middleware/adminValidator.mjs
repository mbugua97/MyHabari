// Middleware to hash the password
const UserAdminValidator = async (req, res, next) => {
    let cookies = {};
    try{
        if (req.headers.cookie) {
            req.headers.cookie.split(';').forEach(cookie => {
                const [name, ...rest] = cookie.split('=');
                const cookieName = name.trim();
                const cookieValue = decodeURIComponent(rest.join('='));
                cookies[cookieName] = cookieValue;
            });
        }
        const mhTkN = cookies['MH_TkN'];

        if(!mhTkN){
          return  res.status(401).json({"message":"you are not logged in"});
        }

    next()
    
}catch{
    res.status(500).json({});
}
  };

  export default UserAdminValidator