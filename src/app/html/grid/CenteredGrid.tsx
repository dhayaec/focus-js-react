export default function CenteredGrid() {
  return (
    <>
      <p className="2xl">{CenteredGrid.name}</p>
      <div className="grid place-items-center h-screen bg-gray-100">
        <div className="w-40 h-40 bg-blue-500 flex items-center justify-center text-white font-bold text-2xl">
          Centered
        </div>
      </div>
    </>
  );
}
