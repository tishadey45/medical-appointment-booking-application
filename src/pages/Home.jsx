import { useLoaderData } from "react-router-dom";
import BestDoctors from "../components/BestDoctors";
import Hero from "../components/Hero";

const Home = () => {
    const doctors=useLoaderData();
    console.log(doctors?.length);
    console.log(Array.isArray(doctors));

    
  return (
    <div>
     <Hero/>
     <BestDoctors doctors={doctors}/>
    </div>
  );
};

export default Home;
