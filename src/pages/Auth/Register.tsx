/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ValidationErrors = {
  [key: string]: string[];
};

const Register = () => {


  const navigate=useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data: any;

      try {
        data = await res.json();
      } catch (err) {
        console.error("Response is not valid JSON", err);
        return;
      }

      if (!res.ok) {
        // Laravel validation errors (422)
        if (data?.errors) {
          setErrors(data.errors);
        }
        else{

          localStorage.setItem('token',data.token);

          navigate('/');
          console.log(data)
        }
      }

      // success
      setErrors({});
      console.log("Registered successfully:", data);
      // redirect or set auth here

    } catch (err) {
      console.error("Network or server error:", err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name?.[0] && <p className="text-red-500 text-sm">{errors.name[0]}</p>}
          </div>

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

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.password_confirmation}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password_confirmation: e.target.value,
                })
              }
              className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password_confirmation?.[0] && (
              <p className="text-red-500 text-sm">
                {errors.password_confirmation[0]}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 font-medium transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;















// import { useState } from "react";

// type ValidationErrors = {
//   [key: string]: string[];
// };

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//   });

// const [errors, setErrors] = useState<ValidationErrors>({});

//   async function handleRegister(e: React.FormEvent) {
//     e.preventDefault();

//     const res = await fetch("/api/register", {
//       method: "post",
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     if (data.errors) {
//       setErrors(data.errors);
//     } else {
//       console.log(data);
//     }

//     console.log(data);
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           Create an Account
//         </h1>

//         <form onSubmit={handleRegister} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />

//             {errors.name && <p>{errors.name[0]}</p>}
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Email or Phone"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//               className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={formData.password_confirmation}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   password_confirmation: e.target.value,
//                 })
//               }
//               className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 font-medium transition"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-600 hover:underline">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
