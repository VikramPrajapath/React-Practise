export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <>
      {price > 5 ? (
        <li>
          {name} {emoji} ₹{price} {soldout ? "SoldOut😵" : ""}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
