"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Get params in Next.js
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { db } from "@/utils/db";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";


const Feedback = () => {
  const params = useParams();
   // Get dynamic route params
   const [feedbacks,setFeedback]=useState([]);

   const router=useRouter()

useEffect(() => {
  console.log("Params:", params); // Debugging step
  if (params?.interviewId) {
    GetfeedBack();
  }
}, [params?.interviewId]);

  const GetfeedBack = async () => {
    try {
      if (!params?.interviewId) return; // Avoid running if interviewId is missing

      const results = await db
        .select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockId, params.interviewId))
        .orderBy(UserAnswer.id);

      console.log(results);
      setFeedback(results)
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  // Ensure useEffect runs when interviewId changes

  //   GetfeedBack();

  // },[])

  // const GetfeedBack =async()=>{
  //   const results =await db.select()
  //   .from(UserAnswer)
  //   .where (eq(UserAnswer.mockIdRef,params.interviewId))
  //   .orderBy(UserAnswer.id)
  //   console.log(results);

  // }

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-400 ">congrachulation</h2>
      <h2 className="font-bold text-2xl ">here is your interview Feedback</h2>
      <h2 className="text-primary text-lg my-3">
        {" "}
        intriew rating in the rating:<strong>7/10</strong>
      </h2>
      <h2 className="text-sm text-gray-500">
        interveow is here is temporary her
      </h2>

      {feedbacks &&
        feedbacks.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger>{item.question}</CollapsibleTrigger>
            <CollapsibleContent>{item.answer}</CollapsibleContent>
          </Collapsible>
        ))}


        <Button onClick={()=>router.replace('/dashboard')} >Home page</Button>
    </div>
  );
};

export default Feedback;
