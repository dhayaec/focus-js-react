export default function FlexCenter() {
  return (
    <>
      <p className="text-2xl">{FlexCenter.name}</p>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-40 h-40 bg-blue-500 flex items-center justify-center text-white font-bold text-2xl">
        Centered
      </div>
    </div>
    </>
  );
}
