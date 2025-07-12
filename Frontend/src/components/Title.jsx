import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="relative flex items-center justify-center my-10">
      {/* Bold horizontal line */}
      <hr className="absolute w-full border-t-2 border-gray-700" />

      {/* Text content */}
      <h2 className="bg-white px-4 text-xl sm:text-2xl font-semibold z-10 text-gray-800">
        {text1} <span className="text-gray-600 font-medium">{text2}</span>
      </h2>
    </div>
  );
};

export default Title;
