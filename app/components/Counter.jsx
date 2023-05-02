import Image from "next/image";
import minusIcon from "../../public/images/icon-minus.svg";
import plusIcon from "../../public/images/icon-plus.svg";

export default function Counter({ quantity, setQuantity }) {
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity += 1));
  };
  const decrementQuantity = () => {
    if (quantity == 0) {
      setQuantity(0);
    } else {
      setQuantity((prevQuantity) => (prevQuantity -= 1));
    }
  };
  return (
    <div className="flex items-center w-full bg-lightGrayishBlue rounded-lg p-7 justify-between h-10">
      <div className=" px-10 py-5" onClick={decrementQuantity}>
        <Image
          src={minusIcon}
          alt="Minus Icon"
          width={500}
          height={500}
          className="w-3"
        />
      </div>
      {/* reQuantity variable */}
      <p className="font-bold">{quantity}</p>
      <div className="px-10 py-5" onClick={incrementQuantity}>
        <Image
          src={plusIcon}
          alt="Plus Icon"
          width={500}
          height={500}
          className="w-3"
        />
      </div>
    </div>
  );
}
