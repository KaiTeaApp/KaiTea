function MenuCard({ item }) {
  return (
    <div className="flex flex-col items-center min-w-27.5 cursor-pointer hover:scale-105 transition">
      <div className="bg-white shadow-md rounded-xl p-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover"
        />
      </div>

      <h3 className="text-sm font-medium mt-2 text-center">{item.name}</h3>
    </div>
  );
}

export default MenuCard;
