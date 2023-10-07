import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";


const ServiceDetails = () => {
    const [myEventServiceDetails, setMyEventServiceDetails] = useState({});
    const {id} = useParams();
    // console.log(id);
    const integerId = parseInt(id);
    const myEventServices = useLoaderData();
    // console.log(myEventServices);

    useEffect(()=>{
        const findServiceDetails = myEventServices.find(item => item.id === integerId);
        // console.log(findServiceDetails);
        setMyEventServiceDetails(findServiceDetails);
        // console.log(myEventServiceDetails);
    },[integerId, myEventServices, myEventServiceDetails])

    
    return (
        <div>
            <ServiceDetailsCard myEventServiceDetails={myEventServiceDetails}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;