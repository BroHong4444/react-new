const NewsPage = () => {

    var news = [
        {
            id: 1,
            title: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur",
            date: "01-March-2024",
        },
        {
            id: 2,
            title: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur",
            date: "27-Feb-2024",
        },
        {
            id: 3,
            title: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur",
            date: "24-Feb-2024",
        },
        {
            id: 4,
            title: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur",
            date: "24-Feb-2024",
        },
        {
            id: 1,
            title: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur",
            date: "01-March-2024",
        },
        {
            id: 2,
            title: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur",
            date: "27-Feb-2024",
        },
        {
            id: 3,
            title: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur",
            date: "24-Feb-2024",
        },
        {
            id: 4,
            title: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur",
            date: "24-Feb-2024",
        },
    ];
    return (
    <div className="container mx-auto py-4 mt-14">
        <h1 className="text-gray-800 text-4xl font-bold text-center my-4">
                All IT News
        </h1>
        <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {news.map((item, index) => {
                return(
                    <div key={index} className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm hover:cursor-pointer group bg-white">
                        <div className="h-auto overflow-hidden">
                            <div className="h-44 overflow-hidden relative">
                            <img src={require("../assets/images/7.jpg")} />
                            </div>
                        </div>
                        <div className="bg-white py-4 px-3">
                            <h3 className="text-base mb-2 font-medium line-clamp-3 group-hover:text-blue-500 duration-300 transition-all">
                                {item.title}
                            </h3>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-gray-400">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    );
};

export default NewsPage;
