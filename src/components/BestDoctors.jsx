import doctorImg from "../assets/doctor-sample-2.png";

const BestDoctors = () => {
  return (
    <div className="max-w-7xl mx-auto px-16 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-base-100 shadow-md rounded-2xl p-4">
          <div className="rounded-xl overflow-hidden">
            <img src={doctorImg} alt="doctor" className="w-full object-cover" />
          </div>

          <div className="flex gap-2 mt-3">
            <span className="badge badge-success badge-soft rounded-full">
              Available
            </span>
            <span className="badge badge-info badge-soft rounded-full">
              5+ Years Experience
            </span>
          </div>

          <div className="mt-3">
            <h2 className="text-lg font-semibold">Dr. Cameron Williamson</h2>
            <p className="text-gray-500 text-sm">
              MBBS, MD - General Medicine, DNB
            </p>
          </div>

          <div className="border-t my-3"></div>

          <p className="text-sm text-gray-500">® Reg No: BD 12451254</p>

          <button className="btn btn-outline w-full mt-4 rounded-full border border-info text-info">
            View Details
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-base-100 shadow-md rounded-2xl p-4">
          <div className="rounded-xl overflow-hidden">
            <img src={doctorImg} alt="doctor" className="w-full object-cover" />
          </div>

          <div className="flex gap-2 mt-3">
            <span className="badge badge-success badge-soft rounded-full">
              Available
            </span>
            <span className="badge badge-info badge-soft rounded-full">
              5+ Years Experience
            </span>
          </div>

          <div className="mt-3">
            <h2 className="text-lg font-semibold">Dr. Cameron Williamson</h2>
            <p className="text-gray-500 text-sm">
              MBBS, MD - General Medicine, DNB
            </p>
          </div>

          <div className="border-t my-3"></div>
          <p className="text-sm text-gray-500">® Reg No: BD 12451254</p>
          <button className="btn btn-outline w-full mt-4 rounded-full border border-info text-info">
            View Details
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-base-100 shadow-md rounded-2xl p-4">
          <div className="rounded-xl overflow-hidden">
            <img src={doctorImg} alt="doctor" className="w-full object-cover" />
          </div>

          <div className="flex gap-2 mt-3">
            <span className="badge badge-success badge-soft rounded-full">
              Available
            </span>
            <span className="badge badge-info badge-soft rounded-full">
              5+ Years Experience
            </span>
          </div>

          <div className="mt-3">
            <h2 className="text-lg font-semibold">Dr. Cameron Williamson</h2>
            <p className="text-gray-500 text-sm">
              MBBS, MD - General Medicine, DNB
            </p>
          </div>

          <div className="border-t my-3"></div>
          <p className="text-sm text-gray-500">® Reg No: BD 12451254</p>
          <button className="btn btn-outline w-full mt-4 rounded-full border border-info text-info">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestDoctors;
