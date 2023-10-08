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
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
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
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="500"
                        data-aos-offset="0">
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
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
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

            {/* upcoming events ends here  */}

            {/* why choose us section starts  */}
            <div>
                <h1 className="text-4xl font-extrabold mt-16 mb-16 text-center">Why Choose Us</h1>
                {/* Reason-1  */}
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="w-1/2" data-aos="fade-down-left">
                            <img
                                src="/planning.png"
                                className=" rounded-lg shadow-2xl" />
                        </div>
                        <div className="w-1/2 text-right">
                            <h1 className="text-3xl font-bold">Event Planning</h1>
                            <ul className="">
                                <li>Developing event timelines and schedules</li>
                                <li>Venue selection and negotiation</li>
                                <li>Budge planning and management</li>
                                <li>Event logistics</li>
                            </ul>

                        </div>
                    </div>
                </div>
                {/* Reason-2  */}
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="w-1/2" data-aos="fade-down-right">
                            <img
                                src="/programdevelopment.png"
                                className=" rounded-lg shadow-2xl" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-3xl font-bold">Program development</h1>
                            <ul>
                                <li>Speaker and trainer selection</li>
                                <li>Educational material creation</li>
                                <li>Workshop and seminar design</li>
                                <li>Content development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Reason-3  */}

                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="w-1/2" data-aos="fade-down-left">
                            <img
                                src="/marketing.png"
                                className=" rounded-lg shadow-2xl" />
                        </div>
                        <div className="w-1/2 text-right">
                            <h1 className="text-3xl font-bold">Marketing & Promotion</h1>
                            <ul className="">
                                <li>Email marketing and campaign</li>
                                <li>Socail media marketing and advertising</li>
                                <li>Event branding</li>
                                <li>Logo design</li>
                                <li>T-shirt launch</li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/* Reason-4 */}

                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="w-1/2" data-aos="flip-left">
                            <img
                                src="/ticketing.png"
                                className=" rounded-lg shadow-2xl" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-3xl font-bold">Registration & Ticketing</h1>
                            <ul>
                                <li>Online and offline registration</li>
                                <li>Ticket sales and payment processing</li>
                                <li>Attende database management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Reason-5  */}
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="w-1/2" data-aos="flip-right">
                            <img
                                src="/virtualevent.png"
                                className=" rounded-lg shadow-2xl" />
                        </div>
                        <div className="w-1/2 text-right">
                            <h1 className="text-3xl font-bold">Virtual & Hybrid Events</h1>
                            <ul className="">
                                <li>Online and offline event platform setup</li>
                                <li>Audio and video equipment rental</li>
                                <li>Live streaming and recording services</li>
                                <li>Presentation technology setup</li>
                            </ul>

                        </div>
                    </div>
                </div>
                {/* Reason-6  */}
                <div className="hero bg-base-200 mb-16">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="w-1/2" data-aos="flip-left">
                            <img
                                src="/activesupport.png"
                                className=" rounded-lg shadow-2xl" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-3xl font-bold">Active support</h1>
                            <ul>
                                <li>Event staff and volunteers</li>
                                <li>Technical support for presenters</li>
                                <li>Post event surveys and feedback collection</li>
                                <li>Troubleshooting and problem solving</li>
                                <li>Data analysis and reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us section ends */}

            {/* FAQ Section starts  */}
            <div className="lg:max-w-5xl mx-auto">
                <h1 className="text-4xl text-center font-extrabold mb-16 mt-16">FAQ</h1>
                <div className="collapse collapse-arrow bg-base-200 mb-5">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What types of events can you manage?
                    </div>
                    <div className="collapse-content">
                        <p>Educational and training events like workshops, webinars, career fairs, training bootcamp, conferences</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can you handle both in-person and virtual events?
                    </div>
                    <div className="collapse-content">
                        <p>Yes. We can make plans and work according to your specific needs whether it is in-person, virtual and hybrid events</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do you handle event regestration and ticketing?
                    </div>
                    <div className="collapse-content">
                        <p>We provide online regestration and ticketing. We have managed attende list on the event day.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you provide post event evaluations?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we collect feedback from the attende on the event</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can you provide well known speakers and presenters?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, according to your need we invite qualified speakers and presenters. We can also handle their safe travel arrangements and ensure qualityful resources</p>
                    </div>
                </div>
            </div>
            {/* FAQ Section ends */}



        </div>
    );
};

export default Home;