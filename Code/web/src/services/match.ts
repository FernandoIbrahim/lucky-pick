import { API_JSON_CLIENT } from '@/lib/api';
import { sendGuessReqSkeleton } from '@/lib/types';

export const getCurrentMatch = async () => {

      const response = await API_JSON_CLIENT.get("/matches/current");
  
      if (!response?.data) {
        return null;
      }
  
      return response.data;

  };
  
  export const startMatch = async () => {


      const response = await API_JSON_CLIENT.post("/matches");
  
      if (!response?.data?.id) {
        throw new Error(response.data.error);
      }
  
      return response.data;


  };


    
export const sendGuess = async (data: sendGuessReqSkeleton) => {

  const response = await API_JSON_CLIENT.post("/matches/current/guesses", data);

  if (!response?.data?.id) {
    throw new Error(response.data.error);
  }
  return response.data;

};