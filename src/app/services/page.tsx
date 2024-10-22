import Header from '@/components/header';
import Link from "next/link";
const services = () =>{
    return (
    <div >
      <Header/>
      <div className="childContainer">
        <h1 className='font-serif h-96 text-lime-900 text-3xl italic text-center  '>Welcome TO RD Organic Hair Oils</h1>
      </div>
      
      <h1 className='h-96 italic absolute top-32 left-0 text-2xl'>Hello This Is in process...</h1>
      <Link href={"services/more-services"}>
                <li className='bg-orange-50 h-96 italic absolute top-48 left-0 text-2xl'>more-services</li>
                </Link>
    </div>
    )
    }; 
    export default services;