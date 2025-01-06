import jwt from 'jsonwebtoken';
import { JWT_ACCESS_SECRET, JWT_ACCESS_TOKEN_EXPIRY } from '../config/serverConfig.js';

export const generateJwtToken = (payload) => {
    return jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: JWT_ACCESS_TOKEN_EXPIRY });
};


export const verifyJWT = (token) => {
    return jwt.verify(token, JWT_ACCESS_SECRET);
}