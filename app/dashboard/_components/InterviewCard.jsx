// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// const InterviewCard = () => {
//   const router=useRouter();

//   const onstart=()=>{
//     router.push('/dashboard/interview/ ' +interview?.mockId)
//   }
  
//   const onfeed =()=>{
//     router.push('/dashboard/interview/' +interview.mockId+"/feedback")
//   }
//   return (
//     <div>
//       <div className="border shadow-md rounded-xl p-4 bg-white w-full max-w-sm">
//         <h2 className="font-semibold text-xl text-gray-800">Job Title</h2>
//         <p className="text-sm text-gray-600 mt-1">
//           Job Description goes here with a concise summary.
//         </p>

//         <p className="text-xs text-gray-400 mt-2">
//           Created At: <span className="font-medium">Feb 11, 2025</span>
//         </p>

//         <div className="flex gap-3 mt-4">
//           <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
//           onClick={onfeed}
//           >
//             Feedback
//           </button>
//           <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           onClick={onstart}
//           >
//             Start
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InterviewCard;
import React from "react";
import { useRouter } from "next/navigation";

const InterviewCard = ({ interview }) => {
  const router = useRouter();

  const onStart = () => {
    if (interview?.mockId) {
      router.push(`/dashboard/interview/${interview.mockId}`);
    } else {
      console.error("Interview ID is missing");
    }
  };

  const onFeed = () => {
    if (interview?.mockId) {
      router.push(`/dashboard/interview/${interview.mockId}/feedback`);
    } else {
      console.error("Interview ID is missing");
    }
  };

  return (
    <div className="border shadow-md rounded-xl p-4 bg-white w-full max-w-sm">
      <h2 className="font-semibold text-xl text-gray-800">
         {interview?.jobTitle || "full stack developer"} 
       
      </h2>
      <p className="text-sm text-gray-600 mt-1">
        {interview?.description ||
          "node js,React js"}
      </p>
      <p className="text-xs text-gray-400 mt-2">
        Created At:{" "}
        <span className="font-medium">{interview?.createdAt || "N/A"}</span>
      </p>
      <div className="flex gap-3 mt-4">
        <button
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          onClick={onFeed}
        >
          Feedback
        </button>
        <button
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={onStart}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;
