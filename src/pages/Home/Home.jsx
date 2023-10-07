/* eslint-disable react/no-unknown-property */
// import Navbar from "../../components/Header/Navbar";

import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ServicesCard from "./ServicesCard";
import { MdEvent, MdOutlineLocationOn } from 'react-icons/md';


const Home = () => {
    const servicesDataAvailable = useLoaderData();
    // console.log(servicesDataAvailable);
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-4xl font-extrabold text-center mt-16 mb-16">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    servicesDataAvailable.map(services => <ServicesCard key={services.id} services={services}></ServicesCard>)
                }

            </div>
            <h1 className="text-4xl font-extrabold text-center mt-16 mb-16">Upcoming Events</h1>

            {/* upcoming events starts here  */}

            {/* Event-1  */}
            <div className="mb-20">
                <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src="/codingbootcamp.png"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            Training Program
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Web development bootcamp
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased text-justify">
                            The web development bootcamp is an intensive, immersive program that is aimed at providing learners with the necessary skills and knowledge to flourish in the field of web development. This bootcamp often covers front-end and back-end technologies, coding languages, and industry best practices, providing ambitious web developers with a fast-track path to launch their careers in the computer industry.
                        </p>
                        <div className="flex gap-5 mb-5">
                            <div className="flex gap-2 items-center">
                                <MdEvent></MdEvent>
                                <p>15 October, 2023, 9 AM</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdOutlineLocationOn></MdOutlineLocationOn>
                                <p>Brac University</p>
                            </div>
                        </div>
                        <Link to='/eventdetails'>
                            <a className="inline-block" href="#">
                                <button
                                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Book now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Event-2  */}
            <div className="mb-20">
                <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src="/jobfair.png"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            Career Fair
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Unlock Your Dream Job: The Ultimate Career Quest
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased text-justify">
                            A career fair is an exciting event where job seekers may meet with several employers, explore various career options, and network with industry professionals. The expo provides a valuable platform for both businesses and job seekers, promoting face-to-face encounters and encouraging the exchange of resumes, job openings, and important job market information.
                        </p>
                        <div className="flex gap-5 mb-5">
                            <div className="flex gap-2 items-center">
                                <MdEvent></MdEvent>
                                <p>21 October, 2023, 9 AM</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdOutlineLocationOn></MdOutlineLocationOn>
                                <p>Dhaka University</p>
                            </div>
                        </div>
                        <Link to='/eventdetails'>
                            <a className="inline-block" href="#">
                                <button
                                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Book now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Event-3  */}
            <div className="mb-20">
                <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src="/educonference.png"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            Conference
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            IEEE conference on Electrical & Electronic Engineering, Computer Science & Engineering
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased text-justify">
                            The IEEE Electrical and Electronics Engineering (EEE) and Computer Science and Engineering (CSE) conferences bring together prominent researchers, academia, and industry leaders to share cutting-edge ideas and breakthroughs in these constantly expanding domains.This prominent conference acts as a hub for interdisciplinary collaboration, providing a forum for discussing emerging trends, sharing research discoveries, and shaping the future of EEE and CSE, eventually promoting technological and scientific progress.
                        </p>
                        <div className="flex gap-5 mb-5">
                            <div className="flex gap-2 items-center">
                                <MdEvent></MdEvent>
                                <p>27 October, 2023, 10 AM</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdOutlineLocationOn></MdOutlineLocationOn>
                                <p>Bangladesh University of Engineering & Technology</p>
                            </div>
                        </div>
                        <Link to='/eventdetails'>
                            <a className="inline-block" href="#">
                                <button
                                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Book now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;