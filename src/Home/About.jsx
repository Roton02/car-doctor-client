import img1 from '../assets/images/about_us/person.jpg'
import img2 from '../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="flex gap-10 mb-10">
            <div className='relative rounded-xl w-1/2 '>
                <img className='w-[470px] h-[473px]  rounded-xl' src={img1} alt="" />
                <img className='absolute  w-72  h-80 top-52 border-8  border-white  right-0 rounded-xl ' src={img2} alt="" />
            </div>
            <div className='space-y-7 mt-10 w-1/2'>
                <p className='text-red-500'>About Us</p>
                <h2 className='text-3xl font-bold'>
                We are qualified & of experience in this field
                </h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className='btn btn-secondary'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;