import jwt from 'jsonwebtoken';

export default async ({ headers }, res, next) => {
    const { token } = headers;

    try {
        await jwt.verify(token, process.env.KEY);
        next();
    } catch(err) {
        return res.json({message: "Invalid token"})
    }
    
};