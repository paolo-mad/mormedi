import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const createToken = (payload) =>{
    const token = jwt.sign({id:payload}, JWT_SECRET,{
        expiresIn: '1h'
    });
    return token;
}
const verifyToken = (token) =>{
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
    
}

export { createToken, verifyToken}



