export default function FlexGrowShrink() {
    return (
      <>
      <p className="text-2xl">{FlexGrowShrink.name}</p>
      <div className="flex gap-4 p-4 bg-gray-100">
        <div className="flex-grow bg-blue-500 text-white p-4">Grow</div>
        <div className="flex-shrink bg-green-500 text-white p-4 w-64">Shrink</div>
      </div>
      </>
    );
  }
  