import BelowBelow from "./components/BelowBelow";
import BelowProducts from "./components/BelowProducts";
import Browse from "./components/Browse";
import HeroSecOne from "./components/HeroSecOne";
import HomeProducts from "./components/HomeProducts";


export default function Home ( ){
  return (
    <div>
      
      <HeroSecOne/>
      <Browse/>
      <HomeProducts/>
      <BelowProducts/>
      <BelowBelow/>
    </div>
  )
}