import ShopBanner from "../components/ShopBanner";
import ShopBar from "../components/ShopBar";
import ShopProducts from "../components/ShopProducts";
import ShopShipping from "../components/ShopShipping";

export default function Shop (){
    return(
        <div>
            <ShopBanner/>
            <ShopBar/>
            <ShopProducts/>
            <ShopShipping/>
        </div>
    )
}