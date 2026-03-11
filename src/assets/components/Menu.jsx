import MenuCard from "./MenuCard";

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Cake Slices",
      image: "./public/img/bigSlice.png",
    },
    {
      id: 2,
      name: "Premium Cakes",
      image: "./public/img/pre-cake.png",
    },
    {
      id: 3,
      name: "Custard",
      image: "./public/img/curstard.png",
    },
    {
      id: 4,
      name: "Scones",
      image: "./public/img/1.png",
    },
    {
      id: 5,
      name: "Specials",
      image: "./public/img/cake-f.png",
    },
  ];

  return (
    <>
      <div className="px-4 mt-6">
        <h1 className="text-2xl font-bold mb-4">What Do You Crave?</h1>

        <div className="flex md:justify-between gap-5 overflow-x-auto pb-2">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="promo-box p-2">
        <div className="flex md:justify-evenly gap-5 overflow-x-auto p-2">
          <img
            src="./public/img/promo.png"
            className="w-70 rounded-2xl"
            alt=""
          />
          <img
            src="./public/img/promo2.png"
            className="w-70 rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
