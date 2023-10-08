

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.imgur.com/24JJVeN.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl" data-aos="zoom-in-up">
                        <h1 className="mb-5 text-5xl text-white font-bold">EduQuest Events</h1>
                        <p className="mb-5 text-white">Welcome to EduQuest Events, your dependable educational and training event management partner! We are delighted to welcome you to this fascinating journey of knowledge and skill development. We at EduQuest Events are committed to making your educational events unforgettable. Enter an innovative environment where we design, coordinate, and take your educational and training activities to new heights. Let us start on a journey together to inspire, educate, and empower through precisely organized events. Hello and welcome to the EduQuest Events family!</p>
                        <button className="btn btn-secondary text-white font-extrabold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;