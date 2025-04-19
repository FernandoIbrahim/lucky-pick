

export interface RegisterUserSkeleton{
    username: string
    email: string
    password: string
}

export interface LoginUserSkeleton{
    email: string
    password: string
}


export interface User{
    id: number,
    username: string,
    email: string
}