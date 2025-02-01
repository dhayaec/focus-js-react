export default function BasicGrid() {
  return (
    <>
      <p className="2xl">{BasicGrid.name}</p>
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100">
        {[1, 2, 3, 4, 5, 6,7,8].map((num) => (
          <div
            key={num}
            className="bg-blue-500 p-4 text-white flex items-center justify-center font-bold"
          >
            {num}
          </div>
        ))}
      </div>
    </>
  );
}
