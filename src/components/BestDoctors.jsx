

import { useState } from "react";
import DoctorsCard from "./DoctorsCard";

const BestDoctors = ({ doctors }) => {
  const [showAll, setShowAll] = useState(false);
  const cardsShow = showAll ? 12 : 6;

  return (
    <div className="max-w-7xl mx-auto px-16 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors?.slice(0, cardsShow).map((doctor) => (
          <DoctorsCard doctorData={doctor} key={doctor.id} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {!showAll && (
          <button
            className="btn btn-active btn-info rounded-3xl text-white"
            onClick={() => setShowAll(true)}
          >
            View All Doctors
          </button>
        )}
      </div>
    </div>
  );
};

export default BestDoctors;
