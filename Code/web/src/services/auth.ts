import Cookies from 'js-cookie';
import {User, LoginUserSkeleton, RegisterUserSkeleton } from '@/lib/types';
import axios from 'axios';
import { API_JSON_CLIENT } from '@/lib/api';


export const login = async (credentials: LoginUserSkeleton) => {

    try{

        const response = await API_JSON_CLIENT.post("/auth/login", credentials);
    
        const { token, user } = response.data;
    
        Cookies.set("jwt", token, { expires: 7 });
        return user;

    } catch (error: any) {
        
        if (axios.isAxiosError(error)) {
            const msg = error.response?.data?.error || "Erro ao realizar login.";
            throw new Error(msg); 
        }

        throw new Error("Erro inesperado.");
    }


}
export const register = async (credentials: RegisterUserSkeleton): Promise<User> => {

    try{

        if (credentials.username.length < 3) 
            throw Error("The username must have, at least, 3 characters");

        if (!/^[a-zA-Z0-9]+$/.test(credentials.username)) {
            throw Error("The username can only contain letters and numbers.");
        }

        if (credentials.password.length < 3) 
            throw Error("The password must have, at least, 3 characters");
        

        if (/\s/.test(credentials.password)) 
            throw Error("The password can not contain spaces");
        

        const response = await API_JSON_CLIENT.post("/auth/register", credentials);
        const { token, user } = response.data;
  
        Cookies.set("jwt", token, { expires: 7 });
  
        return user;

    }catch(error: any){

        if (axios.isAxiosError(error)) {
            
            const msg = error.response?.data?.error || "Error during the registration.";
            throw new Error(msg);
        }
        
        throw new Error(error.message);

    }

  };