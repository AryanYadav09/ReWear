const StatsCard = ({ title, value, icon, darkMode }) => {
  return (
    <div className={`p-6 rounded-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-md'}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
          <span className="text-xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;