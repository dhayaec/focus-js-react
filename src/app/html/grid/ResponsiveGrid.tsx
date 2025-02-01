export default function ResponsiveGrid() {
  return (
    <>
      <p className="2xl">{ResponsiveGrid.name}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-100">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="bg-green-500 p-4 text-white flex items-center justify-center font-bold"
          >
            {num}
          </div>
        ))}
      </div>
    </>
  );
}
