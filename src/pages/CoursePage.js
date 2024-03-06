import { FaClock } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";

const CoursePage = (dataProps) => {
    var courses = [
        {
            id: 1,
            title: "FLUTTER MOBILE DEVELOPMENT",
            full_price: 40.00,
            discount: 50,
            price: 20.00
        },
        {
            id: 2,
            title: "IOS DEVELOPMENT",
            full_price: 100.00,
            discount: 50,
            price: 50.00
        },
        {
            id: 3,
            title: "SQL & DATA MODELING WITH POSTGRESQL",
            full_price: 120.00, 
            discount: 50,
            price: 60.00
        },
        {
            id: 4,
            title: "WEB DESIGN",
            full_price: 250.00,
            discount: 50,
            price: 125.00
        },
    ];

    return(
        <div className="container mx-auto py-4 mt-14">
            <h1 className="text-gray-800 text-4xl font-bold text-center my-2">
                All Courses
            </h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-6 mt-8">
                    {courses.map((item, index) => {
                        return(
                            <div key={index} className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-sm md:max-w-3xl border border-white bg-white">
                            <div className="w-full md:w-1/3 bg-white grid place-items-center">
                                <img src={require("../assets/images/1.png")} alt="tailwind logo" class="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-4 p-3">
                                <div className="flex justify-between space-x-4">
                                    <h3 className="font-black text-gray-800 md:text-xl text-lg">
                                        {item.title}
                                    </h3>
                                    <div>
                                        <div className="flex space-x-2 items-center">
                                            <FaClock className="text-base text-blue-800" />
                                            <span className="text-base text-blue-800">80</span>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <FaLayerGroup className="text-base text-blue-800" />
                                            <span className="text-base text-blue-800">Normal</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div className="text-sm text-white bg-red-500 rounded-full px-2 py-1 w-fit">
                                        {item.discount}% Discount
                                    </div>
                                    <div className="text-sm text-white bg-gray-500 rounded-full px-2 py-1 w-fit font-semibold">
                                        <del>$ {item.full_price}</del>
                                    </div>
                                    <div className="text-sm text-white bg-blue-500 rounded-full px-2 py-1 w-fit font-semibold">
                                        $ {item.price}
                                    </div>
                                </div>
                                <p class="text-base text-gray-500 line-clamp-2">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept.</p>
                                <button className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40 rounded-full">
                                <span relative="relative z-10">Enroll Now</span>
                                </button>
                            </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}  

export default CoursePage;