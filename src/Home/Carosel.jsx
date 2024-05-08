import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'

const Carosel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className=" carousel-item h-[650px]  relative w-full">
        <img
          src={img1}
          className="w-full rounded-xl"
        />
       <div className='absolute flex items-center h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
       <div className="  space-y-7 w-1/2 pl-10">
          <h1 className='text-6xl font-bold text-white'> Affordable Price For Car Servicing</h1>
          <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div> 
          <button className="btn text-white btn-warning mr-4">Discover More</button>
          <button className="btn text-white btn-outline btn-secondary">Latest Project</button>
          </div>
        </div>
       </div>
        <div className="absolute flex  bottom-0 right-0 gap-5 p-10">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item  h-[650px]  relative w-full">
        <img
          src={img2}
          className="w-full rounded-xl"
        />
         <div className='absolute flex items-center h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
       <div className="  space-y-7 w-1/2 pl-10">
          <h1 className='text-6xl font-bold text-white'> Affordable Price For Car Servicing</h1>
          <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div> 
          <button className="btn text-white btn-warning mr-4">Discover More</button>
          <button className="btn text-white btn-outline btn-secondary">Latest Project</button>
          </div>
        </div>
       </div>
        <div className="absolute flex  bottom-0 right-0 gap-5 p-10">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item  h-[650px]  relative w-full">
        <img
          src={img3}
          className="w-full rounded-xl"
        />
        <div className='absolute flex items-center h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
       <div className="  space-y-7 w-1/2 pl-10">
          <h1 className='text-6xl font-bold text-white'> Affordable Price For Car Servicing</h1>
          <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div> 
          <button className="btn text-white btn-warning mr-4">Discover More</button>
          <button className="btn text-white btn-outline btn-secondary">Latest Project</button>
          </div>
        </div>
       </div>
        <div className="absolute flex  bottom-0 right-0 gap-5 p-10">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item  h-[650px]  relative w-full">
        <img
          src={img4}
          className="w-full rounded-xl"
        />
         <div className='absolute flex items-center h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
       <div className="  space-y-7 w-1/2 pl-10">
          <h1 className='text-6xl font-bold text-white'> Affordable Price For Car Servicing</h1>
          <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div> 
          <button className="btn text-white btn-warning mr-4">Discover More</button>
          <button className="btn text-white btn-outline btn-secondary">Latest Project</button>
          </div>
        </div>
       </div>
        <div className="absolute flex  bottom-0 right-0 gap-5 p-10">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
