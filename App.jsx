import './index.css'

const desserts = [
  {
    name: "Tarte aux Fraises",
    price: "45 DH",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=500"
  },
  {
    name: "Cheesecake Lotus",
    price: "55 DH", 
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500"
  },
  {
    name: "Millefeuille",
    price: "35 DH",
    img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=500"
  }
];

export default function App() { 
  return (
    <div className="container">
      <h1>Veloura Desserts 🍰</h1>
      <div className="grid">
        {desserts.map((item) => (
          <div key={item.name} className="card">
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  ) 
}
