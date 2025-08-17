export default function Menu() {
    const kfcMenu = [
  { name: "Zinger Burger", price: 5.49 },
  { name: "Bucket of 8 Hot Wings", price: 7.99 },
  { name: "Original Recipe Chicken (2 Pieces)", price: 4.99 },
  { name: "Popcorn Chicken (Regular)", price: 3.49 },
  { name: "Chicken Sandwich Combo", price: 6.99 },
  { name: "Famous Bowl", price: 5.79 }
];



    return (
        <div>
            <p>{kfcMenu[1].name}</p>
        </div>
    )
}