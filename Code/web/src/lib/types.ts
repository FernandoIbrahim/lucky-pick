

export interface RegisterUserSkeleton{
    username: string
    email: string
    password: string
}

export interface LoginUserSkeleton{
    username: string
    password: string
}


export interface User{
    id: number,
    username: string,
    email: string
}

export interface sendGuessReqSkeleton {
    number: number;
}

export type Guess = {
    id: number
    tip: string;
    isCorrect: boolean;
    number: number;
  };


export type Match = {
    id: number,
    guesses: Guess[] | null
  };


export type MatchRanking = {
  match_id: number;
  correct_number: number;
  guesses_count: number;
  username: string;
};

export type RankingCardProps = {
  username: string;
  matchId: number;
  correctNumber: number;
  guessesCount: number;
};


export type MatchRankingList = MatchRanking[];