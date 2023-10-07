// import Navbar from "../../components/Header/Navbar";

import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ServicesCard from "./ServicesCard";


const Home = () => {
    const servicesDataAvailable = useLoaderData();
    // console.log(servicesDataAvailable);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    servicesDataAvailable.map(services => <ServicesCard key={services.id} services={services}></ServicesCard>)
                }

            </div>
        </div>
    );
};

export default Home;