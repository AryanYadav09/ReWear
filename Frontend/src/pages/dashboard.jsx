import { useState } from 'react';
import ProfileSection from '../components/dashboard_components/ProfileSection';
import ListingsGrid from '../components/dashboard_components/ListingsGrid';
import PurchasesGrid from '../components/dashboard_components/ProfileSection';
import StatsCard from '../components/dashboard_components/StatsCard';
import ThemeToggle from '../components/dashboard_components/ThemeToggle';
import { HandCoins, List, ShoppingCart } from 'lucide-react';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('listings');

  // Sample data
  const userProfile = {
    name: "Alex Johnson",
    username: "@alexj",
    bio: "Fashion enthusiast and sustainable clothing advocate. Love exchanging clothes to refresh my wardrobe!",
    points: 1245,
    listings: 23,
    purchases: 17,
    profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg"
  };

  const listings = [
    { id: 1, title: "Denim Jacket", points: 250, image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500&auto=format&fit=crop&q=60", date: "2 days ago", category: "Fashion" },
    { id: 2, title: "Wireless Headphones", points: 350, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60", date: "1 week ago", category: "Electronics" },
    // Add more listings
  ];

  const purchases = [
    { id: 1, title: "Running Shoes", points: 300, image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60", date: "3 days ago", category: "Fashion" },
    { id: 2, title: "Modern Lamp", points: 200, image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&auto=format&fit=crop&q=60", date: "2 weeks ago", category: "Home Decor" },
    // Add more purchases
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen w-full font-sans ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Header matching landing page */}
      <header className={`py-2 px-6 ${darkMode ? 'bg-gray-900' : ''} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto flex justify-between items-center">

          <div className="flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Profile and Stats */}
        <ProfileSection user={userProfile} darkMode={darkMode} />


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <StatsCard
            title="Total Points"
            value={userProfile.points}
            icon={<HandCoins />}
            darkMode={darkMode}
          />
          <StatsCard
            title="Listings"
            value={userProfile.listings}
            icon={<List />}
            darkMode={darkMode}
          />
          <StatsCard
            title="Purchases"
            value={userProfile.purchases}
            icon={<ShoppingCart />}
            darkMode={darkMode}
          />
        </div>

        {/* Products Section */}
        <section>
          <div className=" justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-center p-[24px]"> ———————————————  PRODUCT LIST  ———————————————</h3>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('listings')}
                className={`px-4 py-2 ${activeTab === 'listings' ? 'border-b-2 border-indigo-500 font-medium' : 'text-gray-500 dark:text-gray-400'}`}
              >
                My Listings
              </button>
              <button
                onClick={() => setActiveTab('purchases')}
                className={`px-4 py-2 ${activeTab === 'purchases' ? 'border-b-2 border-indigo-500 font-medium' : 'text-gray-500 dark:text-gray-400'}`}
              >
                My Purchases
              </button>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {activeTab === 'listings'
              ? "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quos quos similique corporis."
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae similique corporis."}
          </p>

          {activeTab === 'listings' ? (
            listings.length === 0 ? (
              <p className="py-8 text-center text-gray-500 dark:text-gray-400">
                No items listed at the moment.
              </p>
            ) : (
              <ListingsGrid items={listings} darkMode={darkMode} />
            )
          ) : purchases.length === 0 ? (
            <p className="py-8 text-center text-gray-500 dark:text-gray-400">
              No best sellers available at the moment.
            </p>
          ) : (
            <PurchasesGrid items={purchases} darkMode={darkMode} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;