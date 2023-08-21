import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center h-[100vh] w-[80vw]">
      <h1 className="text-4xl font-semibold mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-600">
        We're working on something awesome. Stay tuned!
      </p>
      <img
        src="https://img.freepik.com/premium-vector/construction-sign-label_24886-506.jpg"
        alt="Coming Soon"
        className="mt-8"
      />
    </div>
  );
};

export default ComingSoon;
