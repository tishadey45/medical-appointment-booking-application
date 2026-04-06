import { useLoaderData } from "react-router-dom";
import BestDoctors from "../components/BestDoctors";
import Hero from "../components/Hero";
import MedicalServices from "../components/MedicalServices";

const Home = () => {
    const doctors=useLoaderData();
    console.log(doctors?.length);
    console.log(Array.isArray(doctors));

    
  return (
    <div>
     <Hero/>
     <BestDoctors doctors={doctors}/>
     <MedicalServices/>
    </div>
  );
};

export default Home;
