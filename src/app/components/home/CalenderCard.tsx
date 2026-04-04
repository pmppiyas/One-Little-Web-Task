const CalenderCard = () => {
  return (
    <div className="bg-background rounded-2xl shadow-md p-3 w-44">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-gray-700">March 2024</span>
        <div className="flex gap-1">
          <button className="text-xs bg-gray-100 rounded px-1">‹</button>
          <button className="text-xs bg-gray-100 rounded px-1">›</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] text-gray-400 mb-1">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center text-[10px]">
        {[
          '',
          '',
          '',
          '',
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          '',
        ].map((day, i) => (
          <span
            key={i}
            className={`py-0.5 rounded-full ${
              [8, 9, 10, 11].includes(Number(day))
                ? 'bg-[#e91e8c] text-white font-semibold'
                : day === 12
                  ? 'text-[#e91e8c] font-semibold'
                  : 'text-gray-700'
            }`}
          >
            {day || ''}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CalenderCard;
