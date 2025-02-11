"use client"
import React from 'react';
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { v4 as uuidv4 } from "uuid";




import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
 
} from "@/components/ui/dialog";
import { ChatSession } from '@google/generative-ai';
import { chatSession } from '@/utils/geminiAImodals';
import { LoaderCircle, LogIn } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import moment from "moment"; 
import { useRouter } from 'next/navigation';





const Addnewelement = () => {
  const [openDailog, setOpenDailog] = useState(true);

   const [jobPosition, setJobPosition] = useState("");
   const [jobDesc, setJobDec] = useState("");
   const [jobExp, setJobExp] = useState("");
   const [loading, setLoading]=useState(false)
   const [jsonresponse,setJsonreponse]=useState([]);
   const {user}=useUser()
   const router=useRouter();
  

// Prevent hydration mismatch

  const onSubmit = async (e) => {
      setLoading(true);
    e.preventDefault();
  
    console.log(jobPosition);
    const InputPromt =
      "job Position:" +
      jobPosition +
      ", Job Description:" +
      jobDesc +
      ", Job Exprience :" +
      jobExp +
      ", Depends on this information please give me the " +
      process.env.NEXT_PUBLIC_COUN +
      " question with answer in json format .give me question and answer as field in json";

      const result= await chatSession.sendMessage(InputPromt)
      const Mockjson=(result.response.text()).replace('```json','').replace('```','')

      setJsonreponse(Mockjson);
      console.log(JSON.parse(Mockjson));
    
     
       console.log("mai mock ke bahr hu")
      if(Mockjson){
        console.log('mock ke ander hu');
        
       const resp = await db
         .insert(MockInterview)
         .values({
           mockId: uuidv4(),
           jsonMockResp: Mockjson,
           jobPosition:jobPosition,
           jobDesc:jobDesc,
           jobExperience: jobExp,
           createdBy: user.primaryEmailAddress?.emailAddress,
           createdAt: moment().format("DD-MM-YYYY"),
         })
         .returning({ mockId: MockInterview.mockId });
        console.log("idsend", resp);
        if(resp){
          setOpenDailog(false)
         router.push(`/dashboard/interview/${resp[0]?.mockId}`);

        }

      }else{

        console.log("error")
      }
      
       setLoading(false); 
    
    
  };
  return (
    <>
      <div>
        <div
          className="p-10 border rounded-lg bg-secondary hover:scale-100 hover:shadow-md cursor-pointer transition-all"
          onClick={() => setOpenDailog(true)}
        >
          <h1 className="font-bold text-lg text-center">add button</h1>
        </div>
        <Dialog open={openDailog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-bold">
                Are you abs yuour job
              </DialogTitle>
              <DialogDescription>
                <form onSubmit={onSubmit}>
                  <div>
                    <label>Tell us more about the job interview</label>

                    <div className="my-3">
                      <label>Job Role and Position</label>
                      <Input
                        type="text"
                        placeholder="Full Stack Developer"
                        required
                        value={jobPosition}
                        onChange={(event) => setJobPosition(event.target.value)}
                      />
                    </div>

                    <div className="my-3">
                      <label>Job Description & Tech Stack</label>
                      <Textarea
                        placeholder="e.g., React, Node.js"
                        value={jobDesc}
                        onChange={(event) => setJobDec(event.target.value)}
                      />
                    </div>

                    <div className="my-3">
                      <label>Years of Experience</label>
                      <Input
                        type="number"
                        placeholder="5"
                        value={jobExp}
                        onChange={(event) => setJobExp(event.target.value)}
                      />
                    </div>

                    <div className="flex gap-4 justify-end">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setOpenDailog(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" disabled={loading}>
                        {loading ? (
                          <>
                            <LoaderCircle className='animate-spin' />
                            'geneatin form ai'
                          </>
                        ) : (
                          "start interview"
                        )}
                  
                      </Button>
                    </div>
                  </div>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default Addnewelement
