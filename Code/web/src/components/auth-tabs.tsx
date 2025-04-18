"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from 'react-toastify'

import { login, register } from "@/services/auth"; 

import { LoginUserSkeleton, RegisterUserSkeleton, User } from "@/lib/types"; 



export default function AuthTabs() {

  const [loginData, setLoginData] = useState<LoginUserSkeleton>({ email: "", password: "" });
  const [registerData, setRegisterData] = useState<RegisterUserSkeleton>({ username: "", email: "", password: "" });

  const handleLoginSubmit = async (e: React.FormEvent) => {

    console.log("sending login");
    e.preventDefault();

    try {

      const user: User = await login(loginData);
      toast.success("Login successful",{ 
        autoClose: 5000,
        pauseOnHover: true,
        position: "bottom-right",
        theme: "colored",
      });

    } catch (error) {

      toast.error("Login failed: " + error, { 
        autoClose: 5000,
        pauseOnHover: true,
        position: "bottom-right",
        theme: "colored",
      });

    }

  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    
    console.log("sending register");
    e.preventDefault();
    try {

      const user: User = await register(registerData);
      toast.success("Registration successful", { 
        autoClose: 5000,
        pauseOnHover: true,
        position: "bottom-right",
        theme: "colored",
      });
      
    } catch (error) {
      toast.error("Registration failed: " + error, { 
        autoClose: 5000,
        pauseOnHover: true,
        position: "bottom-right",
        theme: "colored",
      });

    }

  };

  return (
    <Tabs defaultValue="login" className="w-[320px] sm:w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <form className="mt-6 flex flex-col gap-4" onSubmit={handleLoginSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="login-email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="login-email"
              type="email"
              placeholder="Email"
              value={loginData.email} // Bind username to email input
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value.toLowerCase() })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="login-password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="login-password"
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </TabsContent>

      <TabsContent value="register">
        <form className="mt-6 flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="register-username" className="text-sm font-medium">
              Username
            </label>
            <Input
              id="register-username"
              type="text"
              placeholder="fernando"
              value={registerData.username}
              onChange={(e) => setRegisterData({ ...registerData, username: e.target.value.toLowerCase() })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="register-email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="register-email"
              type="email"
              placeholder="fernando@dit.com"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value.toLowerCase() })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="register-password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="register-password"
              type="password"
              placeholder="......."
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
      </TabsContent>
      <ToastContainer />
    </Tabs>
  );
}