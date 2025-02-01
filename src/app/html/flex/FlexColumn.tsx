export default function FlexColumn() {
  return (
    <>
      <p className="text-2xl">{FlexColumn.name}</p>
      <div className="flex flex-col gap-4 p-4 bg-gray-100">
        <div className="w-20 h-20 bg-blue-500 flex items-center justify-center text-white font-bold">
          1
        </div>
        <div className="w-20 h-20 bg-green-500 flex items-center justify-center text-white font-bold">
          2
        </div>
        <div className="w-20 h-20 bg-red-500 flex items-center justify-center text-white font-bold">
          3
        </div>
      </div>
    </>
  );
}
