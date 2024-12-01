import React from "react";
import "../style/Education.css";

const Education = () => {
  return (
    <section id="education" className="py-12 mt-24 mb-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-medium text-center mb-12">Education</h2>
        <div className="relative">
          {/* Timeline Vertical Line */}
        

          {/* Timeline Item 1 (Left Side) */}
          <div className="mb-8 flex flex-col sm:flex-row items-center w-full">
            <div className="bg-gray-50 p-6 rounded-md shadow-lg w-full sm:w-5/12">
            <h2>Graduation</h2>
              <h3 className="font-bold text-lg">
                K.A(P.G) College Kasganj , Uttar Pradesh
              </h3>
              <p className="text-sm text-gray-500">B.Sc (Voctionl) Computer Application | 2021 - 2024</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                • Graduation CGPA : 6.75 CGPA
              </p>
            </div>
          </div>

          {/* Timeline Item 2 (Right Side) */}
          <div className="mb-8 flex flex-col sm:flex-row items-center w-full justify-end">
            {/* SVG Icon */}
            <div className="bg-gray-50 p-6 rounded-md shadow-lg w-full sm:w-5/12">
            <h2>Post Graduation</h2>
              <h3 className="font-bold text-lg">Greater Noida Institute Of Technology (GNIOT) , Greater Noida Uttar Pradesh</h3>
              <p className="text-sm text-gray-500">Master of Computer Application (MCA) | 2024 - 2026</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                • Pursuing Master's of Computer Application from GNIOT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
