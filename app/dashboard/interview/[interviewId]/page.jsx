
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Addnewelement from "../../_components/Addnewelement";
import Link from "next/link";

const Interview = () => {
  const { interviewId } = useParams(); 
  // Get interviewId from the URL
  const [interviewData,setInteviewData]=useState();
  const [webcampEnable,setWebcamp]=useState(false);

  useEffect(() => {
    console.log("Interview Is:", interviewId);
    getInervewdetails();
  }, [interviewId]); // Runs whenever interviewId changes

  const getInervewdetails= async ()=>{
    const result=await db.select().from(MockInterview).where(eq(MockInterview.mockId,interviewId))
   console.log(result);
   
   setInteviewData(result[0])
   
  }

  return (
    <div className="my-10 ">
      <h1 className=" font-bold text-2xl p-5 ">lets starsts the interview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
        <div className="flex flex-col gap-5 my-5">
          <div className="flex flex-col gap-5 p-5 rounded-lg border">
            {" "}
            <h1 className="text-lg">
              <strong>Job Pos className="text-lition: </strong>{" "}
              {interviewData?.jobPosition || "Loading..."}
            </h1>
            <h1 className="text-lg">
              <strong>Job Description: </strong>{" "}
              {interviewData?.jobDesc || "Loading..."}
            </h1>
            <h1 className="text-lg">
              <strong>Job Experience: </strong>{" "}
              {interviewData?.jobExperience || "Loading..."}
            </h1>
          </div>

          <div className="p-5 border rounded-lg bg bg-yellow-200">
            <h2 className="flex items-center gap-2">
              <Lightbulb></Lightbulb> <strong>Information</strong>
            </h2>
            <h2>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
          </div>
        </div>

        <div>
          {webcampEnable ? (
            <Webcam
              onUserMedia={() => setWebcamp(true)}
              onUserMediaError={() => setWebcamp(false)}
              mirrored={true}
              style={{
                height: 200,
                width: 100,
              }}
            />
          ) : (
            <>
              <div className=" flex flex-col items-center justify-center">
                <WebcamIcon className="h-52 w-full my-20 bg-gray-300 rounded-md "></WebcamIcon>
                <Button
                  onClick={() => setWebcamp(true)}
                  className="bg-slate-500 flex items-center"
                  variant="ghost"
                >
                  open cemra strat the interview
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end items-end px-8">
        <Link href={`/dashboard/interview/${interviewId}/start`}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
