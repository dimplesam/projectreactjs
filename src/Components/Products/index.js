import React from "react";
import ProductCard from "../../Shared/ProductCard";

const Products = () => {
  const dummyProducts = [
    {
      id: 1,
      name: "Widget",
      price: 9.99,
      description: "A fantastic widget for your everyday needs.",
      category: "Widgets",
      image: "https://source.unsplash.com/random/",
    },
    {
      id: 2,
      name: "Gadget",
      price: 19.99,
      description: "A cool gadget that will make your life easier.",
      category: "Gadgets",
      image: "https://source.unsplash.com/random/",
    },
    {
      id: 3,
      name: "Thingamajig",
      price: 14.99,
      description: "You never knew you needed this thingamajig until now.",
      category: "Miscellaneous",
      image: "https://source.unsplash.com/random/",
    },
    {
      id: 4,
      name: "Doohickey",
      price: 7.49,
      description: "The perfect accessory for any toolkit.",
      category: "Tools",
      image: "https://source.unsplash.com/random/",
    },
    {
      id: 5,
      name: "Doodad",
      price: 12.99,
      description: "Add a little flair to your everyday life with this doodad.",
      category: "Accessories",
      image: "https://source.unsplash.com/random/",
    },
    {
      id: 6,
      name: "Contraption",
      price: 29.99,
      description: "An ingenious contraption that will amaze you.",
      category: "Inventions",
      image: "https://source.unsplash.com/random/",
    },
    {
      id: 7,
      name: "Thingummy",
      price: 8.99,
      description: "You'll wonder how you ever lived without this thingummy.",
      category: "Miscellaneous",
      image: "https://source.unsplash.com/random/",
    },
    {
      id: 8,
      name: "Whatchamacallit",
      price: 16.49,
      description: "For those moments when you can't remember the name.",
      category: "Miscellaneous",
      image: "https://source.unsplash.com/random/",
    },
    {
      id: 9,
      name: "Widget 2.0",
      price: 24.99,
      description: "Upgrade to the latest version of the classic widget.",
      category: "Widgets",
      image: "https://source.unsplash.com/random/",
    },
    {
      id: 10,
      name: "Thingamajig 2.0",
      price: 19.99,
      description: "The upgraded version of the original thingamajig.",
      category: "Miscellaneous",
      image: "https://source.unsplash.com/random/",
    },
  ];

  console.log(dummyProducts);

  return (
    <div className="bg-gray-200 p-2 gap-5 grid grid-cols-4">
      {dummyProducts.map((item) => {
        return <ProductCard p={item} />;
      })}
      {/* {dummyProducts.map((product) => {
        return (
          <div key={product.id} className=" bg-white p-2 rounded-xl">
            <img
              src={product.image + product.id}
              alt=""
              className="h-40 object-cover w-full"
            />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Products;
