export default function FlexCards() {
  return (
    <>
      <p className="text-2xl">{FlexCards.name}</p>
      <div className="flex flex-wrap gap-4 p-4 bg-gray-100">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex flex-col w-48 p-4 bg-white shadow-md rounded-lg"
          >
            <div className="h-24 bg-blue-300 flex items-center justify-center">
              Image
            </div>
            <p className="mt-2 text-center">Card {item}</p>
          </div>
        ))}
      </div>
    </>
  );
}
