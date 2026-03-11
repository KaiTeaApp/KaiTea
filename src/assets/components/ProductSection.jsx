import ProductCard from "./ProductCard";

function ProductSection({ title, products }) {
  return (
    <section>
      <h2>{title}</h2>

      <div className="slide-menu  ">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
