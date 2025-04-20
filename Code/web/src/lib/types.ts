

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