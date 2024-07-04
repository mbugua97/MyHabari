

//Create access token function
export const createAccessToken = (userId,role) => {
    return sign({userId,role}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15m'
    });
}

//Create refresh token function
export const createRefreshToken = (userId,role) => {
    return sign({userId, role}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d'
    });
}

//Send access token as a regular response
export const sendAccessToken = (req, res, accessToken) => {
    res.send({
        accessToken,
    });
}

//Send refresh token as a cookie
export const sendRefreshToken = (res, refreshToken) => {
    res.cookie('MH_TkN', refreshToken, {
        httpOnly: true,
        path: '/refresh_token'
    });
}
