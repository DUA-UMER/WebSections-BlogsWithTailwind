import Header from '@/components/header';
import Footer from '@/components/footer';
const HomePage = () =>{
return (
  <>
  <Header/>

    <div className="parentContainer h-screen items-center">
      <div className="childContainer">
        <h1 className='font-serif h-96 text-lime-900 text-3xl italic text-center  '>Welcome TO RD Organic Hair Oils</h1>
      </div>
    
    </div>
    
    <div className= "cardContainer h-96 w-full  absolute top-24 bottom-0 right-16 left-1 bg-orange-50" >
      <div className='p-1 bg-lime-900 rounded-xl  w-96 absolute top-9 left-auto right-2'><img src="hair.jpg" alt="pic" /></div>
      <div><h1 className='text-emerald-950 absolute top-3 left-16 italic font-black'>Mustard Oil</h1>
      <h4 className=' text-lime-900 absolute top-10 right-96 left-1 italic '> promoting growth and a healthy scalp naturally At RD Organic Hair Oil, our
         Mustard Hair Oil is crafted with the finest natural ingredients to deliver deep nourishment and rejuvenation for your hair.
        Packed with essential vitamins and minerals, mustard oil strengthens hair from the roots, promotes healthy growth, and adds 
        a natural shine. Its unique blend helps to reduce hair fall, prevents dandruff, and maintains a healthy scalp. Perfect for
        those seeking a natural solution to stronger, thicker, and more lustrous hair, RD Organic Mustard Hair Oil is your go-to for vibrant hair health</h4>
      </div></div>
  
    <div><Footer/></div>
    </>
);
}

export default HomePage;
