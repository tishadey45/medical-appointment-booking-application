// "name": "Dr. Sarah Johnson",
// "image": "https://randomuser.me/api/portraits/women/44.jpg",
// "education": "MBBS, FCPS (Cardiology)",
// "speciality": "Cardiologist",
// "experience": "8+ Years",
// "registration": "BD 22334455"



const DoctorsCard = ({doctorData}) => {
  const {
  name,image,education,speciality,experience,registration
  }=doctorData
  return (
    <div>
      
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        {/* Card 1 */}
        <div className="bg-base-100 shadow-md rounded-2xl p-4">
          <div className="rounded-xl overflow-hidden">
            <img src={image} alt="doctor" className="w-full object-cover" />
          </div>

          <div className="flex gap-2 mt-3">
            <span className="badge badge-success badge-soft rounded-full">
              {speciality}
            </span>
            <span className="badge badge-info badge-soft rounded-full">
             {experience}
            </span>
          </div>

          <div className="mt-3">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-500 text-sm">
              {education}
            </p>
          </div>

          <div className="border-t my-3"></div>

          <p className="text-sm text-gray-500">® Reg No:{registration}</p>

          <button className="btn btn-outline w-full mt-4 rounded-full border border-info text-info">
            View Details
          </button>
        </div>
     
      </div>
      // </div>
  );
};
export default DoctorsCard;
