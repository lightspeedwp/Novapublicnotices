import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";
import { useState } from "react";
import { Eye, EyeOff, Upload, X } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerAsPublisher, setRegisterAsPublisher] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration - store auth token
    localStorage.setItem("authToken", "mock_token_12345");
    alert("Registration successful! You can now view public notices.");
    navigate("/my-account");
  };

  return (
    <Layout lang="en" showAds={false}>
      <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="wpn-heading-h1 wpn-heading--primary mb-2">
              Register
            </h1>
            <p className="text-gray-600">Create your account to access public notices</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* User Details Section */}
            <Card className="p-8">
              <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                User Details
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Ash" 
                      required 
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Surname *
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Shaw" 
                      required 
                      className="bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ash@lightspeed.agency" 
                    required 
                    className="bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="bg-blue-50 pr-10"
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
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Input 
                        id="confirmPassword" 
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••" 
                        required 
                        className="bg-blue-50 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Checkbox to register as publisher */}
                <div className="flex items-start gap-3 pt-4 border-t border-gray-200">
                  <input 
                    type="checkbox" 
                    id="registerPublisher" 
                    className="mt-1 size-4"
                    style={{ accentColor: 'var(--nova-accent)' }}
                    checked={registerAsPublisher}
                    onChange={(e) => setRegisterAsPublisher(e.target.checked)}
                  />
                  <label htmlFor="registerPublisher" className="text-sm text-gray-700 font-medium">
                    Register as a company to publish notices
                  </label>
                </div>
              </div>
            </Card>

            {/* Company Details Section - Only shown if registering as publisher */}
            {registerAsPublisher && (
              <Card className="p-8">
                <h2 className="wpn-heading-h3 wpn-heading--primary mb-6">
                  Company Details
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <Input 
                      id="companyName" 
                      placeholder="LightSpeed" 
                      required={registerAsPublisher}
                      className="bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-medium mb-2">
                        Contact Person *
                      </label>
                      <Input 
                        id="contactPerson" 
                        placeholder="Ash" 
                        required={registerAsPublisher}
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="0845656767" 
                        required={registerAsPublisher}
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="vatNumber" className="block text-sm font-medium mb-2">
                      VAT Number
                    </label>
                    <Input 
                      id="vatNumber" 
                      placeholder="4170226023" 
                      className="bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-2">
                      Address *
                    </label>
                    <Input 
                      id="address" 
                      placeholder="Woodstock, Cape Town" 
                      required={registerAsPublisher}
                      className="bg-white"
                    />
                  </div>

                  {/* Logo Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company Logo
                    </label>
                    {logoPreview ? (
                      <div className="relative inline-block">
                        <img 
                          src={logoPreview} 
                          alt="Company logo preview" 
                          className="max-w-xs max-h-32 border border-gray-200 rounded"
                        />
                        <button
                          type="button"
                          onClick={removeLogo}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:wpn-border--accent transition-colors cursor-pointer">
                        <input
                          type="file"
                          id="logo"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                        <label htmlFor="logo" className="cursor-pointer">
                          <Upload className="size-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PNG, JPG up to 5MB
                          </p>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            )}

            {/* Terms & Actions */}
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="mt-1 size-4"
                    style={{ accentColor: 'var(--nova-accent)' }}
                    required 
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <Link to="/terms" className="wpn-link--accent font-medium">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="wpn-link--accent font-medium">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => navigate("/login")}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 wpn-button wpn-button--accent"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Card>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="wpn-link--accent font-medium">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}