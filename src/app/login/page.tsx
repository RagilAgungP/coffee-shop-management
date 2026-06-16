import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white/90 backdrop-blur p-8 shadow-xl border border-amber-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-900">
            Coffee Shop
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to continue
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}