export default function SidebarGrid() {
  return (
    <>
      <p className="2xl">{SidebarGrid.name}</p>
      <div className="grid grid-cols-4 gap-4 h-screen">
        <aside className="col-span-1 bg-gray-800 text-white p-4">Sidebar</aside>
        <main className="col-span-3 bg-gray-200 p-4">Main Content</main>
      </div>
    </>
  );
}
