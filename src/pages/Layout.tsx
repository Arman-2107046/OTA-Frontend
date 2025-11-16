// import { useContext } from "react";
// import { AppContext } from "/src/Context/AppContext";
// import {  Link, Outlet } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Layout = () => {
//   const { user,token, setUser, setToken } = useContext(AppContext);

//   const navigate= useNavigate()

//   async function handleLogout(e: React.FormEvent) {
//     e.preventDefault();
//     const res=await fetch('/api/logout',{
//     method: "POST",

// headers:{
//   Authorization: `Bearer ${token}`,

// }
//     });

    
//   const data=await res.json();
//   // console.log(data);

//   if(res.ok){

//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("token");
//     navigate('/');
//   }
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <header className="bg-white shadow-sm">
//         <nav className="container mx-auto flex items-center justify-between py-4 px-4 bg-transparent">
//           <Link
//             to="/"
//             className="text-xl font-semibold text-blue-600 hover:text-blue-700"
//           >
//             Home
//           </Link>

//           {user ? (
//             <div>
//             <div>{user.name}</div>

//             <form onSubmit={handleLogout}>
// <button>Logout</button>
//             </form>
//             </div>
//           ) : (
//             <div className="space-x-4">
//               <Link
//                 to="/login"
//                 className="text-gray-700 hover:text-blue-600 font-medium"
//               >
//                 Login
//               </Link>
//               {/* <Link
//                 to="/register"
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
//               >
//                 Register
//               </Link> */}
//             </div>
//           )}
//         </nav>
//       </header>

//       <main className="flex-1 ">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Layout;
