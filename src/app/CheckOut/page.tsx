import BillingDetails from "../components/Billing";
import CheckOutBanner from "../components/CheckOutBanner";
import ShopShipping from "../components/ShopShipping";

export default function CheckOut (){
    return(
        <div>
            <CheckOutBanner/>
            <BillingDetails/>
            <ShopShipping/>
        </div>
    )
}