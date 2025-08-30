"use client";

import { useParams } from "next/navigation";

const TestingID = () => {
  const params = useParams();
  const appraisalID = params?.appraisalID;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">Testing ID</h1>
      <p className="text-2xl font-bold mb-4">
        This is the id of this page: {appraisalID}
      </p>
    </div>
  );
};

export default TestingID;
