import { API_JSON_CLIENT } from '@/lib/api';
import { MatchRankingList } from '@/lib/types';

export const getMatchRanking = async (): Promise<MatchRankingList | null> => {

  try {

    const response = await API_JSON_CLIENT.get("/matches/ranking");

    if (!response?.data) {
      return null;
    }

    return response.data;
  } catch (error) {

    console.error("Error fetching the match ranking ", error);
    return null;
    
  }

};