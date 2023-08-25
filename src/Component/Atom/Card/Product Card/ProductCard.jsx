import "./ProductCardstyle.css";

const CardProduct = (props) => {
  return (
    <button className="CardProduct">
      <img className="ProductImage" src={props.item?.image} alt="" />
      <h1 className="TitleCard">{props.item?.title}</h1>
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
          <div className="button">Add To Cart</div>
        </div>
      </div>
    </button>
  );
};

export default CardProduct;