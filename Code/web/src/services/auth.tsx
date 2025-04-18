import Cookies from 'js-cookie';
import {User, LoginUserSkeleton, RegisterUserSkeleton } from '@/lib/types';
import { API_JSON_CLIENT } from '@/lib/api';


export const login = async (credentials: LoginUserSkeleton): Promise<User> => {

    const response = await API_JSON_CLIENT.post("/auth/login", credentials);
    const { token, user } = response.data;

    Cookies.set("jwt", token, { expires: 7 });
    return user;

}
export const register = async (credentials: RegisterUserSkeleton): Promise<User> => {

      const response = await API_JSON_CLIENT.post("/auth/register", credentials);
      const { token, user } = response.data;
  
      Cookies.set("jwt", token, { expires: 7 });
  
      return user;

  };