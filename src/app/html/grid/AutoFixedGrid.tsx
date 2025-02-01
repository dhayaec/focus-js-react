export default function AutoFixedGrid() {
  return (
    <>
      <p className="2xl">{AutoFixedGrid.name}</p>
      <div className="grid grid-cols-[200px_auto] gap-4 p-4 bg-gray-100">
        <div className="bg-blue-500 p-4 text-white">Fixed Width (200px)</div>
        <div className="bg-green-500 p-4 text-white">Auto Resizing</div>
      </div>
    </>
  );
}
