// import { Volume2 } from "lucide-react";
// import React from "react";

// const QuestionSection = ({ interviewquestion }) => {

//   const textTospeak=(text)=>{
//     if('speechsynthesis' in window){
//       const speech=new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(speech);
//     }else{
//       alert("browser is not available int tne arry ")
//     }

//   }
//   return (
//     <div>
//       <div className="p-5 border rounded-lg">
//         {interviewquestion.map((q, index) => (
//           <div key={index} className="mb-4">
//             <h2 className="text-lg font-semibold">Question {index + 1}:</h2>
//             <p className="text-gray-700">
//               {q?.question || "No question found"}
//             </p>
//           </div>
//         ))}
//       </div>

//       <Volume2 onClick={() => textTospeak(q?.question)}></Volume2>
//     </div>
//   );
// };

// export default QuestionSection;

// import { Volume2 } from "lucide-react";
// import React from "react";

// const QuestionSection = ({ interviewquestion, activequestion }) => {
//   const textToSpeak = (text) => {
//     if (!text) {
//       alert("No question found to speak.");
//       return;
//     }

//     if ("speechSynthesis" in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(speech);
//     } else {
//       alert("Speech synthesis is not supported in this browser.");
//     }
//   };

//   return (
//     <div className="p-5 border rounded-lg">
//       {interviewquestion.map((q, index) => (
//         <div key={index} className="mb-4 flex items-center justify-between">
//           <div>
//             <h2 className="text-lg font-semibold">Question {index + 1}:</h2>
//             <p className="text-gray-700">
//               {q?.question || "No question found"}
//             </p>
//           </div>
//           <Volume2
//             className="cursor-pointer text-blue-500 hover:text-blue-700 font-bold size-4"
//             onClick={() => textToSpeak(q?.question)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionSection;


import { Volume2 } from "lucide-react";
import React from "react";

const QuestionSection = ({ interviewquestion, activequestion }) => {
  const textToSpeak = (text) => {
    if (!text) {
      alert("No question found to speak.");
      return;
    }

    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Speech synthesis is not supported in this browser.");
    }
  };

  // Get the active question based on activequestion index
  const activeQ = interviewquestion?.[activequestion];

  return (
    <div className="p-5 border rounded-lg">
      {activeQ ? (
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Question {activequestion + 1}:
            </h2>
            <p className="text-gray-700">
              {activeQ.question || "No question found"}
            </p>
          </div>
          <Volume2
            className="cursor-pointer text-blue-500 hover:text-blue-700 font-bold size-4"
            onClick={() => textToSpeak(activeQ.question)}
          />
        </div>
      ) : (
        <p className="text-red-500">No active question found</p>
      )}
    </div>
  );
};

export default QuestionSection;


