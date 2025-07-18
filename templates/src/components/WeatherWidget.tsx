import { useState, useEffect } from 'react';

interface WeatherData {
  location: string;
  temperature: number;
  description: string;
  icon: string;
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Get weather data
    const getWeather = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            
            // Using a free weather API (you can replace with OpenWeatherMap API key)
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY&units=metric`
            );
            
            if (response.ok) {
              const data = await response.json();
              
              const weatherCode = data.weather[0].id;
              let icon = '🌤️';
              if (weatherCode >= 200 && weatherCode < 300) icon = '⛈️';
              else if (weatherCode >= 300 && weatherCode < 500) icon = '🌧️';
              else if (weatherCode >= 500 && weatherCode < 600) icon = '🌧️';
              else if (weatherCode >= 600 && weatherCode < 700) icon = '❄️';
              else if (weatherCode >= 700 && weatherCode < 800) icon = '🌫️';
              else if (weatherCode === 800) icon = '☀️';
              else if (weatherCode >= 801 && weatherCode < 900) icon = '☁️';
              
              setWeather({
                location: data.name,
                temperature: Math.round(data.main.temp),
                description: data.weather[0].description,
                icon: icon
              });
            } else {
              // Fallback data if API fails
              setWeather({
                location: 'San Francisco',
                temperature: 22,
                description: 'Partly cloudy',
                icon: '🌤️'
              });
            }
            setLoading(false);
          }, () => {
            // Fallback if geolocation fails
            setWeather({
              location: 'San Francisco',
              temperature: 22,
              description: 'Partly cloudy',
              icon: '🌤️'
            });
            setLoading(false);
          });
        } else {
          // Fallback if geolocation not supported
          setWeather({
            location: 'San Francisco',
            temperature: 22,
            description: 'Partly cloudy',
            icon: '🌤️'
          });
          setLoading(false);
        }
      } catch (error) {
        console.log('Weather API not available');
        setWeather({
          location: 'San Francisco',
          temperature: 22,
          description: 'Partly cloudy',
          icon: '🌤️'
        });
        setLoading(false);
      }
    };

    getWeather();

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed top-5 left-5 z-50 glass-effect rounded-2xl p-4 text-white min-w-[200px] animate-pulse">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm opacity-75">Loading...</div>
            <div className="text-2xl font-bold">--°C</div>
            <div className="text-sm">--</div>
          </div>
          <div className="text-3xl">🌤️</div>
        </div>
        <div className="mt-2 text-sm opacity-75">Loading time...</div>
      </div>
    );
  }

  return (
    <div className="fixed top-5 left-5 z-50 glass-effect rounded-2xl p-4 text-white min-w-[200px] transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm opacity-75">{weather?.location}</div>
          <div className="text-2xl font-bold">{weather?.temperature}°C</div>
          <div className="text-sm capitalize">{weather?.description}</div>
        </div>
        <div className="text-3xl animate-pulse-slow">{weather?.icon}</div>
      </div>
      <div className="mt-2 text-sm opacity-75">{currentTime}</div>
    </div>
  );
};

export default WeatherWidget; 