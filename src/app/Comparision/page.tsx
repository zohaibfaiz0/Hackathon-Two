import ActualComp from "../components/ActualComp";
import ComparisionBanner from "../components/CompBanner";
import ShopShipping from "../components/ShopShipping";

export default function Comparision (){
    return(
        <div>
            <ComparisionBanner/>
            <ActualComp/>
            <ShopShipping/>
        </div>
    )
}