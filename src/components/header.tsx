
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-emerald-950 h6">
    
    
      <div className="header flex justify-end items-start p-4">
        <ul className="flex space-x-6 text-white">

            <Link href="/">
              <li className="hover:text-gray-300">Home</li>
            </Link>
            <Link href="/about">
              <li className="hover:text-gray-300">About</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-gray-300">Contact</li>
            </Link>
            <Link href="/services">
              <li className="hover:text-gray-300">Services</li>
            </Link>
        </ul>
      </div>
    </div>
  );
}


// export default function Header (){
//     return(

//      <div className="bg-red-400 h-screen ">
//         <div className="header">
//             <ul className="header-button">
//                 <Link href={"/"}>
//                 <li>Home</li>
//                 </Link>
//                 <Link href={"about"}>
//                 <li>About</li>
//                 </Link>
//                 <Link href={"contact"}>
//                 <li>Contact</li>
//                 </Link>
//                 <Link href={"services"}>
//                 <li>services</li>
//                 </Link>
                
//             </ul>
//         </div>
//         </div>
//     )
// }