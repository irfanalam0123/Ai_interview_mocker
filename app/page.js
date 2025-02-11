
 "use client";
 import { Button } from "@/components/ui/button";
 import { useRouter } from "next/navigation";

 export default function Home() {
   const router = useRouter();

   const start = () => {
     router.push("/dashboard");
   };

   return (
     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
       <div className="text-center max-w-lg p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg">
         <h1 className="text-4xl font-bold mb-4 animate-fade-in">
           Welcome, Irfan! 👋
         </h1>
         <p className="text-lg text-gray-200 mb-6 animate-fade-in">
           Get ready to explore your dashboard and manage your interviews.
         </p>
         <button
           onClick={start}
           className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
         >
           Go to Dashboard 🚀
         </button>
       </div>
     </div>
   );
 }
