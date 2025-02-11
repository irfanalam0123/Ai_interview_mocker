"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import InterviewCard from './InterviewCard';

const InterviewList = () => {
    const {user}=useUser()
    const [interviewList,setInterviewlist]=useState()


useEffect(() => {
  if (user?.primaryEmailAddress) {
    getInterviewList();
  }
}, [user?.primaryEmailAddress]);


  // const getInterviewList = async()=>{
  
  //   const result =await db.select()
  //   .from(MockInterview)
  //   .where(eq(MockInterview.createdBy,user?.primaryEmailAddress))
  //   .orderBy(desc(MockInterview.id))
    
  //   setInterviewlist(result)
  //   console.log(result);
    
  // }

  // const getInterviewList = async () => {
  //   try {
  //     const result = await db
  //       .select()
  //       .from(MockInterview)
  //       .where(eq(MockInterview.createdBy, user?.primaryEmailAddress))
  //       .orderBy(desc(MockInterview.id));

  //     console.log("Fetched Interviews:", result);
  //     setInterviewlist(result);
  //   } catch (error) {
  //     console.error("Error fetching interviews:", error);
  //   }
  // };
const getInterviewList = async () => {
  try {
    const result = await db
      .select({
        id: MockInterview.id,
        createdBy: MockInterview.createdBy,
        createdAt: MockInterview.createdAt, // Explicitly select this field
      })
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, user?.primaryEmailAddress))
      .orderBy(desc(MockInterview.id));

    console.log("Fetched Interviews:", result);
    setInterviewlist(result);
  } catch (error) {
    console.error("Error fetching interviews:", error);
  }
};

  return (
    <div>
      <h2 className='font-bold text-sm '>previous interview List </h2>
      <InterviewCard></InterviewCard>
    </div>
  );
}

export default InterviewList;
