import { useState } from 'react';

const RestaurantMap = ({ location }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const googleMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

    return (
        <div className="w-full h-64 mt-5 border rounded-lg overflow-hidden shadow relative">
            {!isLoaded && (
                <div className="flex flex-col items-center justify-center py-16 px-4">
                    <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map h-8 w-8 text-white" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z" />
                            </svg>
                        </div>

                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">กำลังโหลดแผนที่</h3>
                        <div className="flex items-center justify-center space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    </div>
                </div>
            )}
            <iframe
                src={googleMapUrl}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="restaurant-map"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            ></iframe>
        </div>
    );
};

export default RestaurantMap;
