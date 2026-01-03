import { Eye, EyeOff } from "lucide-react"; // Added 'X' icon
import { useState } from "react";
import brandLogo from "../../assets/ph-logo-en.png";
import { UseAuth } from "../../Providers/AuthProvider";

const SigninModal = () => {
  const { loginWithGoogle, loginWithEmail } = UseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // A dummy function for the login action
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    await loginWithEmail(email, password);
  };

  // A dummy function for the Google login action
  const handleGoogleLogin = async () => {
    // In a real app, you would initiate the Google Auth flow here
    try {
      const user = await loginWithGoogle();
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 font-sans p-4 mt-10">
      {/* Login Card Container */}
      <div className="relative w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
        <img
          className="w-[160px] mx-auto border-1 rounded-4xl p-2 text-white mb-6"
          src={brandLogo}
          alt="logo"
        />

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Input Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Password Input Field with Toggle Button */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute  inset-y-0 right-0 top-6 flex items-center pr-3 text-gray-400 hover:text-gray-200"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end text-sm">
            <a
              href="#"
              className="font-medium text-blue-400 hover:text-blue-300 transition duration-200"
            >
              Forgot your password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
            onClick={() => handleEmailLogin}
          >
            Log In
          </button>
        </form>

        {/* Separator */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Login with Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200"
        >
          {/* Google Logo SVG */}
          <svg
            className="w-5 h-5 mr-3"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285F4"
              d="M24 9.5c3.54 0 6.72 1.22 9.17 3.59l6.09-6.09C35.52 3.8 30.13 1 24 1 15.65 1 8.27 5.56 4.3 12.04l6.98 5.43C12.44 13.52 17.8 9.5 24 9.5z"
            ></path>
            <path
              fill="#34A853"
              d="M46.73 24.53c0-.98-.08-1.93-.24-2.85H24v5.42h12.56c-.54 2.92-2.31 5.39-4.99 7.02l6.02 4.69c3.78-4.04 6.0-9.87 6.0-16.38z"
            ></path>
            <path
              fill="#FBBC04"
              d="M10.87 29.59L3.89 35.02C8.03 39.52 15.42 42.53 24 42.53c6.03 0 11.42-1.99 15.22-5.32l-6.02-4.69c-2.48 1.5-5.6 2.4-9.2 2.4-7.5 0-13.88-4.43-16.63-10.82z"
            ></path>
            <path
              fill="#EA4335"
              d="M24 13.91c2.19 0 4.19.78 5.76 2.05l5.22-5.22C32.07 7.9 28.2 6 24 6 17.15 6 11.23 9.47 7.74 15.01L14.72 20.44c2.6-3.8 6.94-6.43 12.28-6.53z"
            ></path>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SigninModal;
