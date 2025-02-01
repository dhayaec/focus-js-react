export default function FlexBetween() {
  return (
    <>
      <p className="text-2xl">{FlexBetween.name}</p>
      <nav className="flex justify-between p-4 bg-gray-900 text-white">
        <div className="font-bold">Logo</div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}
