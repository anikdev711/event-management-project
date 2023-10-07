/* eslint-disable react/prop-types */


const ServiceDetailsCard = ({ myEventServiceDetails }) => {
    // console.log(myEventServiceDetails);
    const { name, image, price, description } = myEventServiceDetails;
    return (
        <div className="max-w-2xl mx-auto">

            <div>
                <img src={image} alt="" />
            </div>
            <div className="flex gap-5 mt-8 mb-8">
                <div>
                    <button
                        className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        {name}
                    </button>
                </div>
                <div>
                    <button
                        className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        ${price}
                    </button>
                </div>
            </div>
            <div className="text-justify mb-10">
                {description}
            </div>

        </div>
    );
};

export default ServiceDetailsCard;