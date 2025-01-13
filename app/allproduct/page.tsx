import HEADER from "@/components/HEADER"
import Navbar from "@/components/Navigation";
import Sidebar from "@/components/sidebar";
import ProductCard from "@/components/product-cards";
import Footer from "@/components/FOOTER";

const Home = () => {
  const products = [
    {
      name: "Nike Air Force 1 Mid '07",
      price: "₹ 10,795.00",
      image: "./Rectangle (1).png",
    },
    {
      name: "Nike Court Vision Low",
      price: "₹ 4,995.00",
      image: "./Rectangle (2).png",
    },
    {
      name: "Nike Air Force 1 PLT.AF.ORM",
      price: "₹ 8,695.00",
      image: "/Rectangle.png",
    },
    {
      name: "Nike Air Force 1 Mid '07",
      price: "₹ 10,795.00",
      image: "./Rectangle.png",
    },
    {
      name: "Nike Court Vision Low",
      price: "₹ 4,995.00",
      image: "./Rectangle (1).png",
    },
    {
      name: "Nike Air Force 1 PLT.AF.ORM",
      price: "₹ 8,695.00",
      image: "/Rectangle (2).png"
    },
  ];

  return (
    <div>
      <HEADER/>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
          
        </main>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;



