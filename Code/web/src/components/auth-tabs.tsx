import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-[320px] sm:w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <form className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="login-email" className="text-sm font-medium">
              Email
            </label>
            <Input id="login-email" type="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="login-password" className="text-sm font-medium">
              Password
            </label>
            <Input id="login-password" type="password" placeholder="Password" />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </TabsContent>

      <TabsContent value="register">
        <form className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="register-username" className="text-sm font-medium">
              Username
            </label>
            <Input id="register-username" type="text" placeholder="fernando" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="register-email" className="text-sm font-medium">
              Email
            </label>
            <Input id="register-email" type="email" placeholder="fernando@dit.com" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="register-password" className="text-sm font-medium">
              Password
            </label>
            <Input id="register-password" type="password" placeholder="......." />
          </div>
          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
      </TabsContent>
    </Tabs>
  );
}