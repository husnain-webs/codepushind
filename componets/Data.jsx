import React from 'react';
import { Link } from 'react-router-dom';

function Data({ students }) {
  return (
    <div className="flex justify-center content-center text-center">
      <div className="grid grid-cols-1 pt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {students.map((student) => (
          <div  className="rounded p-4 transition-transform transform hover:scale-105 bg-slate-400" key={student.id}>
            <p className="text-xl font-medium  ">{student.name}</p>
            <Link to={`/data/${student.id}`} className="font-medium text-blue-900 hover:underline ">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
