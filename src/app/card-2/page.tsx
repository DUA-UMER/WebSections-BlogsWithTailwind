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
      <div><h1 className='absolute top-3 left-16 italic font-black'>Taramira Oil</h1>
      <h4 className=' text-lime-900 absolute top-10 left-6 italic right-96  '> promoting growth and a healthy scalp naturally. Discover the ancient secret to 
     luxurious hair with RD Organic Taramira Hair Oil. Extracted from premium Taramira seeds, this lightweight oil is a powerhouse of
     nutrients that deeply nourishes and rejuvenates your hair. Known for its exceptional moisturizing properties, Taramira Oil promotes
     elasticity and reduces breakage, making it perfect for dry or damaged hair. Rich in antioxidants, it protects against environmental
     stressors while enhancing natural shine. Whether used as a treatment or styling aid, RD Organic Taramira Hair Oil delivers a smooth,
     frizz-free finish, allowing you to embrace your hair's natural beauty effortlessly</h4>
      </div></div>
  
    <div><Footer/></div>
    </>
);
}

export default HomePage;