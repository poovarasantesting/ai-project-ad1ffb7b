import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "@/components/ui/auth-form";
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // This is where you would normally call your auth API
      console.log("Login attempt:", { email, password });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any login with a valid email format
      if (!email.includes('@')) {
        throw new Error("Invalid email format");
      }
      
      // Store auth state (in a real app, you'd store a token)
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", email);
      
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      
      // Redirect to dashboard after successful login
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Failed to login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to sign in to your account
          </p>
        </div>
        <AuthForm onSubmit={handleLogin} isLoading={isLoading} />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <a href="#" className="hover:text-brand underline underline-offset-4">
            Don't have an account? Sign up
          </a>
        </p>
      </div>
    </div>
  );
}