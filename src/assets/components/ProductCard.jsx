function ProductCard({ image, name, price }) {
  return (
    <div className="main-Card">
      <div className="img-cart">
        <img src={image} alt={name} />
        <div></div>
      </div>

      <div className="product-info">
        <p>{name}</p>
        <h4>R {price}</h4>
      </div>
    </div>
  );
}

export default ProductCard;
