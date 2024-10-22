import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-emerald-950 h6">
    
        <div className="footer flex justify-end items-start p-4">
        <ul className="flex space-x-6 text-white">

            <Link href="/terms-&-conditions">
              <li className="hover:text-gray-300">Terms & Conditions</li>
            </Link>
            <Link href="/links">
              <li className="hover:text-gray-300">Links</li>
            </Link>
            <Link href="/products">
              <li className="hover:text-gray-300">Products</li>
            </Link>
        </ul>
      </div>
    </div>
  );
}







// import Link from "next/link";


// export default function Footer () {
//     return (
//         <div className= "footer">
//             <ul className="footer-button">
//                 <Link href={"terms-&-conditions"}>
//                 <li>Terms & condition</li>
//                 </Link>
//                 <Link href={"links"}>
//                 <li>Links</li>
//                 </Link>
//                 <Link href={"products"}>
//                 <li>products</li>
//                 </Link>
                

//             </ul>

//         </div>
//     )
// }