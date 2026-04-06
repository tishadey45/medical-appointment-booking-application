import { Link } from "react-router-dom";

const DoctorsCard = ({ doctorData }) => {
  const {
    name,
    image,
    education,
    speciality: specialty,
    experience,
    registration,
    id,
  } = doctorData;
  return (
    <div>
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> */}
      {/* Card 1 */}
      <div className="p-4 shadow-md bg-base-100 rounded-2xl">
        <div className="overflow-hidden rounded-xl">
          <img src={image} alt="doctor" className="object-cover w-full" />
        </div>

        <div className="flex gap-2 mt-3">
          <span className="rounded-full badge badge-success badge-soft">
            {specialty}
          </span>
          <span className="rounded-full badge badge-info badge-soft">
            {experience}
          </span>
        </div>

        <div className="mt-3">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{education}</p>
        </div>

        <div className="my-3 border-t"></div>

        <p className="text-sm text-gray-500">® Reg No:{registration}</p>

        <Link to={`/doctor-details/${id}`}>
          <button className="w-full mt-4 border rounded-full btn btn-outline border-info text-info">
            View Details
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
};
export default DoctorsCard;
