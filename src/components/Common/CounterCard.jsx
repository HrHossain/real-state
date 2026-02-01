import useCounter from "../../hooks/useCounter";

const CounterCard = ({ icon: Icon, number, desc, index }) => {
  const [count, countRef] = useCounter(number, 2500);

  const colors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600'
  ];

  const bgColors = [
    'bg-blue-50',
    'bg-green-50',
    'bg-purple-50',
    'bg-orange-50'
  ];

  const iconColors = [
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'text-orange-600'
  ];

  return (
    <div
      ref={countRef}
      className="*:p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl divide-x-2"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="flex flex-col items-center text-center py-[75px]">
        <div className={`${iconColors[index % 4]} mb-4 transform transition-transform hover:rotate-12`}>
          <img src={Icon}/>
        </div>
        
        <div className={`text-5xl font-bold bg-gradient-to-r ${colors[index % 4]} bg-clip-text text-transparent mb-3`}>
          {count.toLocaleString()}
          {count === number && (
            <span className="inline-block animate-bounce ml-2 text-3xl">+</span>
          )}
        </div>
        
        <p className="text-gray-600 font-medium text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CounterCard