import AboutBanner from "../components/Aboutbanner";
import Link from "next/link";
export default function About (){
    return(
        <div>
            <AboutBanner/>
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
                <p className="text-center text-2xl text-gray-800 mb-4">
                    The Figma project lacks an About page but About Link is included in Navigation Bar.
                </p>
                <p className="text-center text-lg text-gray-600">
                    Theres also a Blog page which is not included in Navigation Bar.
                </p>
                <div className="flex justify-center mt-6">
                    <Link href={"/Blog"} className="text-[#b88e2f] text-2xl hover:underline">
                        Blog Page
                    </Link>
                </div>
            </div>
            </div>
    )
}