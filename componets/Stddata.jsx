import React from 'react';
import { useParams } from 'react-router-dom';

function Stddata({ students }) {  
  const { id } = useParams();  
  const student = students.find(student => student.id === parseInt(id));  

  if (!student) {
    return <div>Student not found</div>;  
  }

  return (
    <div className='flex justify-center pt-40  content-center text-center'>
    <div className=' p-10  bg-slate-400 rounded-md '>
      <h2 className=' font-medium ' >Student Details:</h2>
      <p className='text-2xl font-medium'>Name: {student.name}</p>

      <p className='text-xl'>Age: {student.age}</p> 
      {/* <p className='text-xl'>Subjests: {student.subjects}</p> */}
      <p className='text-xl'>Grade: {student.grade}</p>
    </div>
    </div>
  );
}

export default Stddata;
