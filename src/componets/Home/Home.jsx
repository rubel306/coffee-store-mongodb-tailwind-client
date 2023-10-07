import { useLoaderData } from "react-router-dom";
import HeaderHero from "../HeaderHero/HeaderHero";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div className="home">
      <HeaderHero></HeaderHero>
      <div className="grid grid-cols-2 gap-4 " style={{ padding: "5%" }}>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
      <HeaderInfo></HeaderInfo>
    </div>
  );
};

export default Home;
