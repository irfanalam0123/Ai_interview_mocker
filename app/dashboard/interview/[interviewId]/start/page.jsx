// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation"; // Import useParams
// import { db } from "@/utils/db";
// import { MockInterview } from "@/utils/schema";
// import { eq } from "drizzle-orm";
// import QuestionSection from "./_components/QuestionSection";

// const Interviewstart = () => {
//   const { interviewId } = useParams();
//   const [intervoewdate, setInterviewdata] = useState();
//   const [interviewquestion, setInterviewquestion] = useState();

//   useEffect(() => {
//     console.log("Interview Is:", interviewId);
//     getInervewdetails();
//   }, [interviewId]); // Runs whenever interviewId changes

//   const getInervewdetails = async () => {
//     const result = await db
//       .select()
//       .from(MockInterview)
//       .where(eq(MockInterview.mockId, interviewId));
   
//     const MockResp = JSON.parse(result[0].jsonMockResp);
//      console.log(MockResp);

//     setInterviewquestion(MockResp);
//     setInterviewdata(result[0]);
//   };

//   return (
//     <div>

//       <div className="grid grid-cols-1 md:grid-cols-2">
//         <QuestionSection interviewquestion={interviewquestion}></QuestionSection>
//       </div>

//     </div>
//   )
// };

// export default Interviewstart;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { db } from "@/utils/db";
// import { MockInterview } from "@/utils/schema";
// import { eq } from "drizzle-orm";
// import QuestionSection from "./_components/QuestionSection";
// import Recordedans from "./_components/Recordedans";

// const InterviewStart = () => {
//   const { interviewId } = useParams();
//   const [interviewData, setInterviewData] = useState(null);
//   const [interviewQuestions, setInterviewQuestions] = useState([]); 
//   const [activequestion,setActivequestion]=useState(0)
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     console.log("Interview ID:", interviewId);
//     if (interviewId) {
//       getInterviewDetails();
//     }
//   }, [interviewId]);

//   // const getInterviewDetails = async () => {
//   //   try {
//   //     setLoading(true); // Start loading

//   //     const result = await db
//   //       .select()
//   //       .from(MockInterview)
//   //       .where(eq(MockInterview.mockId, interviewId));

//   //     console.log("DB Result:", result);

//   //     if (!result || result.length === 0) {
//   //       console.error("No interview found!");
//   //       setInterviewQuestions([]); // Set empty array to avoid issues
//   //       setLoading(false);
//   //       return;
//   //     }

//   //     // Debugging: Log jsonMockResp before parsing
//   //     console.log("Raw jsonMockResp:", result[0]?.jsonMockResp);

//   //     // Ensure jsonMockResp is valid JSON, otherwise use an empty array
//   //     let mockResp;
//   //     try {
//   //       mockResp = JSON.parse(result[0]?.jsonMockResp || "{}"); // Default to empty object
//   //     } catch (parseError) {
//   //       console.error("JSON parsing error:", parseError);
//   //       mockResp = {}; // Fallback to empty object
//   //     }

//   //     console.log("Parsed Questions:", mockResp);

//   //     // 🔥 Extract the correct key: "undefinedQuestions"
//   //     const questionsArray = mockResp.undefinedQuestions || []; // Ensure it's an array

//   //     console.log("Final Questions Array:", questionsArray);

//   //     setInterviewQuestions(
//   //       Array.isArray(questionsArray) ? questionsArray : []
//   //     ); // Ensure it's always an array
//   //     setInterviewData(result[0]);
//   //   } catch (error) {
//   //     console.error("Error fetching interview details:", error);
//   //   } finally {
//   //     setLoading(false); // Stop loading
//   //   }
//   // };


//   const getInterviewDetails = async () => {
//     try {
//       setLoading(true); // Start loading

//       const result = await db
//         .select()
//         .from(MockInterview)
//         .where(eq(MockInterview.mockId, interviewId));

//       console.log("DB Result:", result);

//       if (!result || result.length === 0) {
//         console.error("No interview found!");
//         setInterviewQuestions([]); // Ensure it's an empty array
//         setLoading(false);
//         return;
//       }

//       // ✅ Check the actual structure of jsonMockResp before parsing
//       console.log("Raw jsonMockResp:", result[0]?.jsonMockResp);

//       let mockResp;
//       try {
//         mockResp = JSON.parse(result[0]?.jsonMockResp || "{}"); // Default to an empty object
//       } catch (parseError) {
//         console.error("JSON parsing error:", parseError);
//         mockResp = {}; // Fallback to an empty object
//       }

//       console.log("Parsed JSON Response:", mockResp);

//       // ✅ Dynamically extract the first key that contains an array (fallback to an empty array)
//       const questionsArray =
//         Object.values(mockResp).find((val) => Array.isArray(val)) || [];

//       console.log("Final Questions Array:", questionsArray);

//       setInterviewQuestions(questionsArray); // Ensure it's always an array
//       setInterviewData(result[0]);
//     } catch (error) {
//       console.error("Error fetching interview details:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <>
//       <div className="flex gap-60 p-10">
//         <div className="p-5">
//           <h1 className="text-2xl font-bold mb-4">Interview Questions</h1>

//           {loading ? (
//             <p className="text-gray-500">Loading questions...</p>
//           ) : interviewQuestions.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               <QuestionSection interviewquestion={interviewQuestions}
//               activequestion={activequestion} />
//             </div>
//           ) : (
//             <p className="text-gray-500">No questions available</p>
//           )}
//         </div>
//         <div>
//           <Recordedans
//             interviewquestion={interviewQuestions}
//             interviewData={interviewData}
//           ></Recordedans>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InterviewStart;


"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import QuestionSection from "./_components/QuestionSection";
import Recordedans from "./_components/Recordedans";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InterviewStart = () => {
  const { interviewId } = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [interviewQuestions, setInterviewQuestions] = useState([]);
  const [activequestion, setActivequestion] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Interview ID:", interviewId);
    if (interviewId) {
      getInterviewDetails();
    }
  }, [interviewId]);

  const getInterviewDetails = async () => {
    try {
      setLoading(true);

      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, interviewId));

      console.log("DB Result:", result);

      if (!result || result.length === 0) {
        console.error("No interview found!");
        setInterviewQuestions([]);
        setLoading(false);
        return;
      }

      console.log("Raw jsonMockResp:", result[0]?.jsonMockResp);

      let mockResp;
      try {
        mockResp = JSON.parse(result[0]?.jsonMockResp || "{}");
      } catch (parseError) {
        console.error("JSON parsing error:", parseError);
        mockResp = {};
      }

      console.log("Parsed JSON Response:", mockResp);

      const questionsArray =
        Object.values(mockResp).find((val) => Array.isArray(val)) || [];

      console.log("Final Questions Array:", questionsArray);

      setInterviewQuestions(questionsArray);
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Function to Change Active Question
  const handleNext = () => {
    if (activequestion < interviewQuestions.length - 1) {
      setActivequestion(activequestion + 1);
    }
  };

  const handlePrev = () => {
    if (activequestion > 0) {
      setActivequestion(activequestion - 1);
    }
  };

  return (
    <>
      <div className="flex gap-60 p-10">
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-4">Interview Questions</h1>

          {loading ? (
            <p className="text-gray-500">Loading questions...</p>
          ) : interviewQuestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <QuestionSection
                interviewquestion={interviewQuestions}
                activequestion={activequestion}
              />
              <div className="flex gap-4 mt-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={handlePrev}
                  disabled={activequestion === 0}
                >
                  Previous
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleNext}
                  disabled={activequestion === interviewQuestions.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No questions available</p>
          )}
        </div>

        <div>
          <Recordedans
            interviewQuestions={interviewQuestions} // Ensure correct prop name
            interviewData={interviewData}
          />
        </div>
        <div className="flex justify-end gap-4">
          {activequestion > 0 && <Button>prev qq </Button>}
          {activequestion != interviewQuestions?.length - 1 && (
            <Button> next question</Button>
          )}

          {activequestion == interviewQuestions?.length - 1 && (
            <Link
              href={`/dashboard/interview/${interviewData?.mockId}/feedback`}
            >
              <Button>End Interview</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default InterviewStart;
