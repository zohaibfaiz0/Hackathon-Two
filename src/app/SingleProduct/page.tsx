import Related from "../components/Related";
import Single from "../components/Single";
import SingleBottom from "../components/SingleBottom";
import SingleTop from "../components/SinglTop";

export default function SingleProduct (){
    return(
        <div>
            <SingleTop/>
            <Single/>
            <SingleBottom/>
            <Related/>
        </div>
    )
}