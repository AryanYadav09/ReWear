import { motion } from 'framer-motion';

const PurchasesGrid = ({ items, darkMode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <motion.div 
          key={item.id}
          whileHover={{ y: -5 }}
          className={`rounded-lg overflow-hidden border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}
        >
          <div className="relative pt-[100%]">
            <img 
              src={item.image} 
              alt={item.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{item.title}</h3>
              <span className={`text-sm px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-800'}`}>
                {item.points} pts
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className={`px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                {item.category}
              </span>
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {item.date}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PurchasesGrid;