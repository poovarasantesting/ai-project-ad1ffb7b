import { RegisterForm } from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-3xl font-bold mb-8 text-center">Join Our Community</h1>
        <RegisterForm />
      </div>
    </div>
  );
}