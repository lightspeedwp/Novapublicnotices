import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - store auth token
    localStorage.setItem("authToken", "mock_token_12345");
    alert("Login successful! You can now view public notices.");
    navigate("/my-account");
  };

  return (
    <Layout lang="en" showAds={false}>
      <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="font-raleway text-3xl font-bold text-[#09082f] mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                required 
                className="bg-white"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password *
              </label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••" 
                  required 
                  className="bg-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded size-4 accent-[#d70025]" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-[#d70025] hover:underline font-medium">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-[#d70025] hover:bg-[#b5001f]">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#d70025] hover:underline font-medium">
              Register here
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
}