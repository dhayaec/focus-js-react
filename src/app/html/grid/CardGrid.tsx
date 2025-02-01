export default function CardGrid() {
  return (
    <>
      <p className="2xl">{CardGrid.name}</p>
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 text-center">
        <div className="col-span-2 bg-blue-500 text-white px-2 py-4">
          Card 1 (2 cols)
        </div>
        <div className="col-span-1 bg-green-500 text-white px-2 py-4">Card 2</div>
        <div className="col-span-1 bg-red-500 text-white px-2 py-4">Card 3</div>
        <div className="col-span-2 bg-purple-500 text-white px-2 py-4">
          Full-Width Card
        </div>
        <div className="col-span-2 bg-purple-500 text-white px-2 py-4">
          Full-Width Card
        </div>
      </div>
    </>
  );
}
