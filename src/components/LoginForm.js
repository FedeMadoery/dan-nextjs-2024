"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hasError, setHasError] = useState(false);

  const handleLogin = () => {
    // axios.post(/login, {email, passowrd})
    // token -> Si o No
    if(email.includes("@pokeapp")) {
        sessionStorage.setItem("id", email)
        router.push("/pokemon/app")
    } else {
        setHasError(true)
    }
  }

  return (
    <>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={`${hasError ? 'border-red-500' : 'border-gray-300'} bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block w-full appearance-none`}
          type="email"
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <a href="#" className="text-xs text-gray-500">
            Forget Password?
          </a>
        </div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="password"
        />
      </div>
      <div className="mt-8">
        <button onClick={handleLogin} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
          Login
        </button>
      </div>
    </>
  );
}
