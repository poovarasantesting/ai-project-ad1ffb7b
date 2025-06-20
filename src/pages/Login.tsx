import { LoginForm } from "@/components/auth/LoginForm";
import { Toaster } from "@/components/ui/toaster";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Login to access your account</p>
        </div>
        <LoginForm />
      </div>
      <Toaster />
    </div>
  );
}