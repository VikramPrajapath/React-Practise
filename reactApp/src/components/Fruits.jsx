import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Dragon fruit", "Kiwi"];
  const fruits = [
    { name: "Apple", price: 125, emoji: "🍎", soldout: false },
    { name: "Banana", price: 40, emoji: "🍌", soldout: true },
    { name: "Mango", price: 200, emoji: "🥭", soldout: false },
    { name: "Orange", price: 140, emoji: "🍊", soldout: true },
    { name: "Pineapple", price: 30, emoji: "🍍", soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
