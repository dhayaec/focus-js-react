export default function MasonryGrid() {
  return (
    <>
      <p className="2xl">{MasonryGrid.name}</p>
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100">
        {[100, 150, 120, 180, 140, 160].map((h, index) => (
          <div
            key={index}
            className="bg-purple-500 text-white flex items-center justify-center font-bold"
            style={{ height: `${h}px` }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </>
  );
}
