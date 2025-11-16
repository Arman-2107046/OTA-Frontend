import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "/src/Context/AppContext";

type ValidationErrors = {
  [key: string]: string[];
};

const Login = () => {

  const {setToken}=useContext(AppContext);


  const navigate=useNavigate();


  const [formData, setFormData] = useState({
    
    email: "",
    password: "",

  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  async function handleLogin(e: React.FormEvent) {
  e.preventDefault();

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    // ❌ Failed (422 validation or others)
    if (!res.ok) {
      if (data?.errors) {
        setErrors(data.errors);
      }
      return;
    }

    // ✅ Successful Register
    localStorage.setItem("token", data.token);
    setToken(data.token);
    setErrors({});
    // console.log("Logged In successfully:", data);
    navigate('/');


  } catch (err) {
    console.error("Network or server error:", err);
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Log in to your Account
        </h1>

        {/* <h1>{token}</h1> */}

        <form onSubmit={handleLogin} className="space-y-4">


          <div>
            <input
              type="text"
              placeholder="Email or Phone"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email?.[0] && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password?.[0] && (
              <p className="text-red-500 text-sm">{errors.password[0]}</p>
            )}
          </div>



          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 font-medium transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;







