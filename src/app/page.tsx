import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from "next/link";
const HomePage = () =>{
return (
  <>
  <Header/>

    <div className="parentContainer h-screen items-center">
      <div className="childContainer">
        <h1 className='font-serif h-96 text-lime-900 text-3xl italic text-center  '>Welcome TO RD Organic Hair Oils</h1>
      </div>
      <div className="imageContainer p-1 max-w-96 mx-96 bg-lime-900 rounded-xl flex flex-col w-80 absolute top-32  items-center "> <img src="oil bottle.jpg" alt="bottle" /></div>
    </div>
    <div className= "cardContainer h-80 w-36 p-28 absolute top-52 left-16 bg-emerald-950 rounded-xl">
    <div className='p-1 bg-lime-900 rounded-xl  w-48 absolute top-2 left-4 '><img src="hair.jpg" alt="pic" /></div>
    <div><h1 className='absolute top-36 left-16 italic font-black text-white'>Taramira Oil</h1>
    <h4 className='absolute top-44 left-6 italic text-white '> Elevate your hair game with Taramira Oil</h4>
    <Link href={"card-2"}>
      <button className='bg-white p-3 absolute top-60 left-16 rounded-xl hover:bg-lime-700 text-black'>Click here</button></Link></div></div>


    <div className= "cardContainer  h-80 w-36 p-28 absolute top-52 right-16 bg-emerald-950 rounded-xl " >
      <div className='p-1 bg-lime-900 rounded-xl  w-48 absolute top-2 left-4'><img src="hair.jpg" alt="pic" /></div>
      <div><h1 className='absolute top-36 left-16 italic font-black text-white'>Mustard Oil</h1>
      <h4 className='absolute top-44 left-6 italic text-white '> promoting growth and a healthy scalp naturally</h4>
      <Link href={"card-1"}>
      <button className='bg-white p-3 absolute top-60 left-16 rounded-xl hover:bg-lime-700 text-black'>Click here</button></Link></div></div>
     
     
    <div><Footer/></div>
    </>
);
}

export default HomePage;
