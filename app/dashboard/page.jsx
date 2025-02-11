import React from 'react'
import Addnewelement from './_components/Addnewelement';
import InterviewList from './_components/InterviewList';



const Dashbordpage = () => {


  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl"> Dashbord</h2>
      <h2 className="text-gray-600">create and start your Ai Mock interview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-6">
        <Addnewelement></Addnewelement>
      </div>
      <div className='flex gap-5'>
        <InterviewList></InterviewList>
        <InterviewList></InterviewList>
        <InterviewList></InterviewList>
        <InterviewList></InterviewList>
      </div>
    </div>
  );

   
  
  
}

export default Dashbordpage;
