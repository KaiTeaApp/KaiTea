import ProductSection from "../components/ProductSection";

function Home() {
  const specialItems = [
    {
      name: "Vanilla Cupcakes (4)",
      price: "50.00",
      image: "/img/Cupcakes/Ai-removebg-preview.png",
    },
    {
      name: "Carrot Cake",
      price: "50.00",
      image: "/img/Carrot Cake/squareSlice-removebg-preview.png",
    },
    {
      name: "Red Velvet Cake",
      price: "50.00",
      image: "/img/RedVelvet/dark-bg-removebg-preview.png",
    },
  ];

  const popularItems = [
    {
      name: "Dry Scones",
      price: "50.00",
      image: "/img/Scones/scones-removebg-preview.png",
    },
    {
      name: "Red Velvet Slice",
      price: "50.00",
      image: "/img/RedVelvet/SliceCake-removebg-preview.png",
    },
    {
      name: "Carrot Cake",
      price: "50.00",
      image: "/img/Carrot Cake/squareSlice-removebg-preview.png",
    },
  ];

  return (
    <div className="pb-24 px-3">
      <ProductSection title="Special for You" products={specialItems} />
      <ProductSection title="Popular Bakery" products={popularItems} />

      <div className="text-center mt-6">
        <img src="/img/Logo/xxl.png" alt="logo" width="300" />
        <p>Powered By Codenovators</p>
      </div>
    </div>
  );
}

export default Home;
