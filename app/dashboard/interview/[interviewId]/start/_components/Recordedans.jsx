

// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Webcam from "react-webcam";
// import { Button } from "@/components/ui/button";
// import useSpeechToText from "react-hook-speech-to-text";
// import { FileChartColumnIncreasing, Mic } from "lucide-react";
// import { toast } from "sonner";
// import { chatSession } from "@/utils/geminiAImodals";
// import { UserAnswer} from "@/utils/schema";
// import { db } from "@/utils/db";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";

// const Recordedans = ({ interviewQuestions, interviewData }) => {
//   const [useAns, setUseAns] = useState("");
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);

//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false,
//   });

//   if (error) return <p>Web Speech API is not available in this browser 🤷‍♂️</p>;

//   useEffect(() => {
   
//      results.map((result)=>(setUseAns(prevans=>prevans+result?.transcript)
//     ))
    
    
//   }, [results]);

//   useEffect(() => {
//     if (isRecording && useAns.length > 10) {
//       updateUserans();
//     }
//   }, [useAns]);

  

  
// // const saveAnswer = async () => {
// //   try {
// //     const resp = await db
// //       .insert(UserAnswer)
// //       .values({
// //         mockId: interviewData?.mockId || "No Mock ID",
// //         question: interviewQuestions?.[0]?.question || "No question provided",
// //         correctAns: interviewQuestions?.[0]?.correctAns || "No correct answer",
// //         userAns: useAns,
// //         feedback: feedback,
// //         rating: rating,
// //         userEmail: user?.primaryEmailAddress || "unknown@example.com",
// //         createdAt: new Date(), // Use JS Date instead of moment()
// //       })
// //       .returning();

// //     console.log("✅ Database Insert Response:", resp);
// //     toast.success("User answer successfully recorded!");
// //   } catch (error) {
// //     console.error("❌ Error inserting into DB:", error);
// //     toast.error("Database insert failed. Please try again.");
// //   }
// // };

// const saveAnswer = async () => {
//   setLoading(true)
//   try {
//    // Declare default values for feedback and rating
//     const feedback = "No feedback provided"; // Default feedback
//     const rating = 0; // Default rating

//     const resp = await db
//       .insert(UserAnswer)
//       .values({
//         mockId: interviewData?.mockId || "No Mock ID",
//         question: interviewQuestions?.[0]?.question || "No question provided",
//         correctAns: interviewQuestions?.[0]?.correctAns || "No correct answer",
//         userAns: useAns,
//         feedback: feedback, // ✅ Now defined
//         rating: rating, // ✅ Now defined
//         userEmail: user?.primaryEmailAddress || "unknown@example.com",
//         createdAt: new Date(), // Use JavaScript Date() instead of moment()
//       })
//       .returning();

//     console.log("✅ Database Insert Response:", resp);
//     toast.success("User answer successfully recorded!");
//     setLoading(FileChartColumnIncreasing)
//   } catch (error) {
//     console.error("❌ Error inserting into DB:", error);
//     toast.error("Database insert failed. Please try again.");
//   }
// };

//   const updateUserans = async () => {

//     setLoading(true);

//     const question = interviewQuestions?.[0]?.question || "Default question";

//     const feedbackPrompt = `Question: "${question}", User Answer: "${useAns}", Please give me a rating (out of 5) and brief feedback in 3-5 lines. Reply in JSON format like: {"rating": 4, "feedback": "Great explanation but improve clarity."}`;

//     try {
//       const result = await chatSession.sendMessage(feedbackPrompt);
//       let mockJsonResp = await result.response.text();
//       console.log("🔹 Raw AI Response:", mockJsonResp);

//       // ✅ Properly Parse JSON Response
//       mockJsonResp = mockJsonResp.replace(/```json|```/g, "").trim();
//       const formattedResp = JSON.parse(mockJsonResp);

//       const feedback = formattedResp?.feedback || "No feedback provided";
//       const rating = formattedResp?.rating || 0;

//       console.log("✅ Extracted Feedback:", feedback);
//       console.log("✅ Extracted Rating:", rating);

//       // ✅ Ensure `db.insert(UserAnswer).values({...})` is correct
//       const resp = await db
//         .insert(UserAnswer)
//         .values({
//           mockId: interviewData?.mockId || "No Mock ID",
//           question: question,
//           correctAns:
//             interviewQuestions?.[0]?.correctAns || "No correct answer",
//           userAns: useAns,
//           feedback: feedback,
//           rating: rating,
//           userEmail: user?.primaryEmailAddress || "unknown@example.com",
//           createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
//         })
//         .returning(); // Ensure you return something

//       console.log("✅ Database Insert Response:", resp);

//       if (resp) {
//         toast.success("User answer successfully recorded!");
//         setUseAns(""); // Reset answer after saving
//       }
//     } catch (error) {
//       console.error("❌ Error inserting into database:", error);
//       toast.error("Failed to save answer. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <div className="flex flex-col my-20 justify-center items-center border bg-slate-500 p-5">
//         {/* Correct Image Component Usage */}
//         <Image
//           src="/webcamp.jpg" // Ensure the image is inside the `public` folder
//           alt="Webcam"
//           width={200}
//           height={200}
//           className="mb-5"
//         />

//         <Webcam
//           mirrored={true}
//           style={{
//             height: 200,
//             width: "100%",
//             zIndex: 10,
//           }}
//         />
//       </div>
//       <div className="flex flex-col items-center gap-4">
//         <Button disabled={loading}  onClick={saveAnswer}>
//           {isRecording ? (
//             <span className="text-red-600">
//               {" "}
//               <Mic></Mic> Recording...
//             </span>
//           ) : (
//             "Start Recording"
//           )}
//         </Button>
//         <Button onClick={() => console.log(useAns)}>Show Answer</Button>
//       </div>
//     </div>
//   );
// };

// export default Recordedans;


// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Webcam from "react-webcam";
// import { Button } from "@/components/ui/button";
// import useSpeechToText from "react-hook-speech-to-text";
// import { Mic } from "lucide-react";
// import { toast } from "sonner";
// import { chatSession } from "@/utils/geminiAImodals";
// import { UserAnswer } from "@/utils/schema";
// import { db } from "@/utils/db";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";

// const Recordedans = ({ interviewQuestions, interviewData }) => {
//   const [useAns, setUseAns] = useState("");
//   const { user } = useUser();
//   const [loading, setLoading] = useState(false);
//   const [recording, setRecording] = useState(false); // ✅ Track mic state

//   const { error, isRecording, results, startSpeechToText, stopSpeechToText } =
//     useSpeechToText({
//       continuous: true,
//       useLegacyResults: false,
//     });

//   if (error) return <p>Web Speech API is not available in this browser 🤷‍♂️</p>;

//   useEffect(() => {
//     results.forEach((result) =>
//       setUseAns((prevAns) => prevAns + " " + result?.transcript)
//     );
//   }, [results]);

//   const toggleRecording = () => {
//     if (isRecording) {
//       stopSpeechToText(); // ✅ Stop recording
//       setRecording(false);
//     } else {
//       setUseAns(""); // ✅ Clear previous text
//       startSpeechToText(); // ✅ Start recording
//       setRecording(true);
//     }
//   };

//   const saveAnswer = async () => {
//     setLoading(true);
//     try {
//       stopSpeechToText(); // ✅ Ensure mic stops recording when saving

//       // Declare default values for feedback and rating
//       const feedback = "No feedback provided"; // Default feedback
//       const rating = 0; // Default rating

//       const resp = await db
//         .insert(UserAnswer)
//         .values({
//           mockId: interviewData?.mockId || "No Mock ID",
//           question: interviewQuestions?.[0]?.question || "No question provided",
//           correctAns:
//             interviewQuestions?.[0]?.correctAns || "No correct answer",
//           userAns: useAns,
//           feedback: feedback, // ✅ Now defined
//           rating: rating, // ✅ Now defined
//           userEmail: user?.primaryEmailAddress || "unknown@example.com",
//           createdAt: new Date(), // Use JavaScript Date() instead of moment()
//         })
//         .returning();

//       console.log("✅ Database Insert Response:", resp);
//       toast.success("User answer successfully recorded!");
//     } catch (error) {
//       console.error("❌ Error inserting into DB:", error);
//       toast.error("Database insert failed. Please try again.");
//     } finally {
//       setLoading(false);
//       setRecording(false); // ✅ Reset recording state
//     }
//   };

//   return (
//     <div>
//       <div className="flex flex-col my-20 justify-center items-center border bg-slate-500 p-5">
//         {/* Correct Image Component Usage */}
//         <Image
//           src="/webcamp.jpg" // Ensure the image is inside the `public` folder
//           alt="Webcam"
//           width={200}
//           height={200}
//           className="mb-5"
//         />

//         <Webcam
//           mirrored={true}
//           style={{
//             height: 200,
//             width: "100%",
//             zIndex: 10,
//           }}
//         />
//       </div>
//       <div className="flex flex-col items-center gap-4">
//         <Button disabled={loading} onClick={toggleRecording}>
//           {recording ? (
//             <span className="text-red-600">
//               <Mic /> Stop Recording
//             </span>
//           ) : (
//             "Start Recording"
//           )}
//         </Button>
//         <Button disabled={loading} onClick={saveAnswer}>
//           Save Answer
//         </Button>
//         <Button onClick={() => console.log(useAns)}>Show Answer</Button>
//       </div>
//     </div>
//   );
// };

// export default Recordedans;



"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/geminiAImodals";
import { UserAnswer } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const Recordedans = ({ interviewQuestions, interviewData }) => {
  const [useAns, setUseAns] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);

  const { error, isRecording, results, startSpeechToText, stopSpeechToText,setresults } =
    useSpeechToText({
      continuous: true,
      useLegacyResults: false,
    });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍♂️</p>;

  useEffect(() => {
    results.forEach((result) =>
      setUseAns((prevAns) => prevAns + " " + result?.transcript)
    );
  }, [results]);

  const toggleRecording = () => {
    if (isRecording) {
      stopSpeechToText();
      setRecording(false);
    } else {
      setUseAns("");
      startSpeechToText();
      setRecording(true);
    }
  };

  const saveAnswer = async () => {
    if (!useAns.trim()) {
      toast.error("No answer provided. Please speak before saving.");
      return;
    }

    setLoading(true);
    stopSpeechToText(); // Stop recording before saving
    setRecording(false);

    const question =
      interviewQuestions?.[0]?.question || "No question provided";

    // Generate feedback & rating using AI
    const feedbackPrompt = `Question: "${question}", User Answer: "${useAns}". Please provide a rating (out of 5) and brief feedback in 3-5 lines. Reply in JSON format like: {"rating": 4, "feedback": "Great explanation but improve clarity."}`;

    try {
      const result = await chatSession.sendMessage(feedbackPrompt);
      let mockJsonResp = await result.response.text();
      console.log("🔹 Raw AI Response:", mockJsonResp);

      // ✅ Parse AI response correctly
      mockJsonResp = mockJsonResp.replace(/```json|```/g, "").trim();
      const formattedResp = JSON.parse(mockJsonResp);

       const feedback = formattedResp?.feedback || "No feedback provided";
      const rating = formattedResp?.rating || 0;

      console.log("✅ Extracted Feedback:", feedback);
      console.log("✅ Extracted Rating:", rating);

      // ✅ Insert into database with AI feedback & rating
      const resp = await db
        .insert(UserAnswer)
        .values({
          mockId: interviewData?.mockId || "No Mock ID",
          question: interviewQuestions?.[0]?.question || "No question provided",
          correctAns:interviewQuestions?.[0]?.correctAns,
          userAns: useAns,
          feedback: formattedResp?.feedback,
          rating: formattedResp?.rating,
          userEmail: user?.primaryEmailAddress || "unknown@example.com",
          createdAt: new Date(), // ✅ FIXED: Use a Date object instead of a string
        })
        .returning();


      console.log("✅ Database Insert Response:", resp);
      console.log(formattedResp?.feedback);
      console.log(formattedResp?.rating);
      toast.success("User answer successfully recorded!");


      setUseAns("");
      setresults([]) // Reset after saving
    } catch (error) {
      console.error("❌ Error inserting into DB:", error);
      toast.error("Database insert failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col my-20 justify-center items-center border bg-slate-500 p-5">
        <Image
          src="/webcamp.jpg"
          alt="Webcam"
          width={200}
          height={200}
          className="mb-5"
        />
        <Webcam
          mirrored={true}
          style={{ height: 200, width: "100%", zIndex: 10 }}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button disabled={loading} onClick={toggleRecording}>
          {recording ? (
            <span className="text-red-600">
              <Mic /> Stop Recording
            </span>
          ) : (
            "Start Recording"
          )}
        </Button>
        <Button disabled={loading} onClick={saveAnswer}>
          Save Answer
        </Button>
        <Button onClick={() => console.log(useAns)}>Show Answer</Button>
      </div>
    </div>
  );
};

export default Recordedans;


