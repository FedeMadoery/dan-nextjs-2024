import { redirect } from "next/navigation.js";

export default function LoginFormServer() {
  
    /**
     * @param {FormData} formData
     */
    async function login(formData) {
      "use server";
  
      const rawFormData = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
  
      console.log(rawFormData);
  
      if (email.includes("@pokeapp")) {
        redirect("/pokemon/app");
      }
    }
  
    return (
      <form action={login}>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="email"
            name="email"
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
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
            name="password"
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
          >
            Login
          </button>
        </div>
      </form>
    );
  }
  