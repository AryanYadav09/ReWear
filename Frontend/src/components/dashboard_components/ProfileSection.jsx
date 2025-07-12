const ProfileSection = ({ user, darkMode }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-xl mb-8 transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
      {/* Profile photo */}
      <div className="relative group">
        <img 
          src={user.profilePhoto} 
          alt={`${user.name}'s profile`}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-500 group-hover:border-gray-600 transition-all duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-gray-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Profile info */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
        <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{user.username}</p>
        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{user.bio}</p>
        
        <div className="flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
            {user.listings} Listings
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
            {user.purchases} Purchases
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
            {user.points} Points
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;