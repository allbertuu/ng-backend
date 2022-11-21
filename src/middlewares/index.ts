import jwt_decode from 'jwt-decode';
import { userTokenIsInvalid } from '../errors';

export interface ITokenPayload {
    username: string;
    iat: number;
    exp: number;
    sub: string;
}

export const validateJWTToken = (token?: string) => {
    if (!token) throw new Error(userTokenIsInvalid.message);
    const decoded: ITokenPayload = jwt_decode(token);
    return { isValid: true, decodedToken: decoded };
};
