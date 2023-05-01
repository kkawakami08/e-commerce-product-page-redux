import ProductPrice from "./ProductPrice";
import Counter from "./Counter";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductDescription({ product }) {
  const { name, description, price } = product;

  return (
    <div className="p-5 flex flex-col gap-6 w-screen pb-36">
      <p className="font-bold text-primaryOrange tracking-widest ">
        SNEAKER COMPANY
      </p>
      <h2 className="font-bold text-3xl tracking-wider">{name}</h2>
      <p className="text-darkGrayishBlue leading-6">{description}</p>
      <ProductPrice price={price} />
      <Counter />
      <AddToCartBtn />
    </div>
  );
}
