import { useState } from 'react'
import RestaurantMap from './RestaurantMap';

const Card = ({ restaurant, index, toggleLike, likedItems }) => {
    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => {
        setShowMap(prev => !prev);
    };

    return (
        <div
            key={restaurant.id}
            className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-blue-100 transform hover:-translate-y-1"
            style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
            }}
        >
            <div className="relative overflow-hidden">
                <img
                    className="w-full h-52 object-cover"
                    src={restaurant.image}
                    alt={restaurant.name}
                    onError={(e) => {
                        e.target.src = "https://placehold.co/600x400?text=NoImage";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                {restaurant.name_en && (
                    <div className="absolute top-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-lg">
                            <span className="text-gray-800 text-xs font-medium">
                                {restaurant.name_en}
                            </span>
                        </div>
                    </div>
                )}
                <button
                    onClick={() => toggleLike(restaurant.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:cursor-pointer hover:scale-110 transition-all duration-200"
                >
                    <svg
                        className="w-5 h-5"
                        fill={likedItems[restaurant.id] ? 'red' : 'none'}
                        stroke={likedItems[restaurant.id] ? 'red' : 'currentColor'}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </button>
            </div>
            <div className="p-5">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                            {restaurant.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                            {restaurant.description}
                        </p>

                        <div className="flex items-center text-gray-500 mb-3">
                            <div className="w-5 h-5 mr-2 flex-shrink-0">
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium hover:underline hover:cursor-pointer transition-all duration-300" onClick={() => setSearchTerm(restaurant.location)}>
                                {restaurant.location}
                            </span>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={toggleMap}
                                className="flex flex-1 items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 px-4 rounded-xl font-medium hover:cursor-pointer hover:from-green-600 hover:to-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                {showMap ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        ซ่อนแผนที่ร้านอาหาร
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt h-5 w-5" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                       
                                        ดูแผนที่ร้านอาหาร
                                    </>
                                )}
                            </button>

                            <button className="px-4 py-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                </svg>
                            </button>
                        </div>
                        {showMap && (
                            <div className="transition-all duration-500 ease-in-out transform opacity-0 translate-y-[-10px] animate-fadeInSlideDown">
                                <RestaurantMap location={restaurant.name} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card