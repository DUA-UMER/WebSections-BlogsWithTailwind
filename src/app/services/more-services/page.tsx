import Header from '@/components/header';
const NestedPage = () =>{
    return( 
    <div >
      <Header/>
      <div className="childContainer">
        <h1 className='font-serif h-96 text-lime-900 text-3xl italic text-center  '>Welcome TO RD Organic Hair Oils</h1>
      </div>
      
      <h1 className='h-96 italic absolute top-32 left-0 text-2xl'>Hello This Is Nested Page</h1>
    </div>
    )
    }; 
    export default NestedPage