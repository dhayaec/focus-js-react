export default function ProductGrid() {
  const products = [
    { name: "Laptop", price: "$999" },
    { name: "Phone", price: "$699" },
    { name: "Tablet", price: "$499" },
  ];

  return (
    <>
      <p className="2xl">{ProductGrid.name}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg text-center"
          >
            <div className="h-32 bg-blue-300 flex items-center justify-center">
              Image
            </div>
            <h3 className="mt-4 font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
