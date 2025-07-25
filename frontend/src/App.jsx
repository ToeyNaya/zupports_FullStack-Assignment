import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [searchTerm, setSearchTerm] = useState('Bang Sue');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    if (searchTerm === '') {
      setDebouncedValue('');
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/api/restaurants?q=${debouncedValue}`);
        if (!response.ok) throw new Error('ไม่พบข้อมูล');

        const json = await response.json();
        setRestaurants(json.data);
      } catch (err) {
        setRestaurants([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, [debouncedValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="max-w-md md:max-w-xl mx-auto px-4 pb-6">
        <div className="space-y-4 mt-8">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-800 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">กำลังค้นหาร้านอาหาร</h3>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          {searchTerm && !isLoading && (
            <div className="mb-8 text-start">
              <span className="text-sm text-gray-500 bg-white/80 px-4 py-2 rounded-xl shadow-sm border border-white/50">
                ผลการค้นหา {restaurants.length} ร้าน
              </span>
            </div>
          )}

          {!isLoading && restaurants.length > 0 ? (
            restaurants.map((restaurant, index) => (
              <Card
                key={restaurant.id}
                restaurant={restaurant}
                index={index}
                toggleLike={toggleLike}
                likedItems={likedItems}
              />
            ))
          ) : !isLoading ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="text-blue-600" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                ไม่พบร้านอาหารที่ตรงกับคำค้นหา
              </h3>
              <p className="text-gray-500 mb-6">
                ลองค้นหาด้วยคำอื่น หรือดูร้านอาหารทั้งหมด
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:from-green-600 hover:to-green-700 hover:cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ดูร้านทั้งหมด
              </button>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default App;