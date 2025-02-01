export default function AlignItemsExample() {
  return (
    <>
      <p className="text-2xl">{AlignItemsExample.name}</p>
      <div className="flex h-40 bg-gray-200 p-4">
        <div className="flex items-start w-20 h-20 bg-blue-500 text-white">
          Start
        </div>
        <div className="flex items-center w-20 h-20 bg-green-500 text-white">
          Center
        </div>
        <div className="flex items-end w-20 h-20 bg-red-500 text-white">
          End
        </div>
      </div>
    </>
  );
}
