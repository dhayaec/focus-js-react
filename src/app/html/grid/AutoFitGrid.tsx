export default function AutoFitGrid() {
  return (
    <>
      <p className="2xl">{AutoFitGrid.name}</p>
      <div className="grid grid-cols-auto-fit min-w-[150px] gap-4 p-4 bg-gray-200">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div
            key={num}
            className="bg-red-500 p-4 text-white flex items-center justify-center font-bold"
          >
            {num}
          </div>
        ))}
      </div>
    </>
  );
}
