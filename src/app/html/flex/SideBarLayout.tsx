export default function SidebarLayout() {
  return (
    <>
      <p className="text-2xl">{SidebarLayout.name}</p>
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-800 text-white p-4">Sidebar</aside>
        <main className="flex-1 p-4 bg-gray-100">Main Content</main>
      </div>
    </>
  );
}
