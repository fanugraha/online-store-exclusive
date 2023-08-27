import "./ProductCardstyle.css";

const ProductCard = (props) => {
  return (
    <div className="ProductCard">
      <div className="ProductImage">
        <img src={props.item?.image} alt="" />
      </div>
      <div className="TitleWrap">
        <h1 className="TitleCard">{props.item?.title}</h1>
      </div>
      <div className="CardBody">
        <div className="Rating">
          <img
            className="RatingStar"
            src="src\assets\Icon\star-rating.png"
            alt=""
          />
          <p>{props.item?.rating.rate}</p>
        </div>
        <div className="wraperPiceButton">
          <div className="Price">{props.item?.price}$</div>
          <button className="ButtonProduct">
            <img src="src\assets\Image\cart.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
