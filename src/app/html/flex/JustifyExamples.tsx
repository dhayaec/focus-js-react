export default function JustifyExamples() {
    return (
      <>
      <p className="text-2xl">{JustifyExamples.name}</p>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-start bg-gray-200 p-4">Start</div>
        <div className="flex justify-center bg-gray-300 p-4">Center</div>
        <div className="flex justify-end bg-gray-400 p-4">End</div>
        <div className="flex justify-around bg-gray-500 p-4 text-white">Around</div>
        <div className="flex justify-between bg-gray-600 p-4 text-white">Between</div>
        <div className="flex justify-evenly bg-gray-700 p-4 text-white">Evenly</div>
      </div>
      </>
    );
  }
  