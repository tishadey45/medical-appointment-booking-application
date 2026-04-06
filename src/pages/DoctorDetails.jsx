import { Link, useLoaderData, useParams } from "react-router-dom";

const DoctorDetails = () => {
  const doctorsData = useLoaderData();
  console.log(doctorsData);
  const { id } = useParams();
  console.log(id);

  const detail = doctorsData.find(
    (doctorData) => doctorData.id === parseInt(id),
  );
  console.log(detail);
  return (
    <div>
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl">
        <h1 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Doctor’s Profile Details
        </h1>

        <p className="py-6 text-sm text-gray-600 md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className="shadow-sm card card-side bg-base-100">
        <figure>
          <img src={detail?.image} alt="Movie" />
        </figure>
        <div className="p-10">
          <h1 className="text-2xl font-bold">{detail?.name}</h1>
          <p>{detail?.speciality}</p>
          <p>{detail?.experience}</p>
          <p>{detail?.education}</p>
          <p>{detail?.registration}</p>
        </div>
      </div>
     <Link to={`/my-booking`}>
         <button className="py-2 text-center text-white bg-indigo-700 px-80 rounded-3xl">Book Appointment Now</button>
     </Link>
    </div>
  );
};

export default DoctorDetails;
