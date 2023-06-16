
import { FaArrowRight, FaFacebook, FaGithub, FaGoogle } from 'react-icons/Fa';


const Footer = () => {
    return (
        <>
            <footer className="footer  mx-auto  p-10 py-20 bg-black">
                <div>


                    <h1 className="font-bold text-white flex items-center mb-4  top-8 "><span className="text-2xl flex items-center text-gradient">
                     
                        Blog Website</span></h1>
                    <p className='text-sm font-lg text-white font-semibold w-56'>Unleash your summer potential at Blitz Camp! Elevate your sports skills and academic knowledge in a supportive environment. Join us</p>
                </div>
               

                <div>
                    <span className="text-white font-bold text-xl">Legal Information</span>
                    <a className="link text-white link-hover"> Trademarks</a>
                    <a className="link text-white link-hover">Terms of use</a>
                    <a className="link text-white link-hover">Privacy policy</a>
                    <a className="link text-white link-hover"> Cookie Policy</a>
                </div>
                <div>
                    <span className="text-white font-bold text-xl">Services</span>
                    <a className="link text-white link-hover">Shipping & Delivery</a>
                    <a className="link text-white link-hover">Online Delivery</a>
                    <a className="link text-white link-hover">Toy Marketing</a>
                    <a className="link text-white link-hover">Help Center</a>
                </div>

                <div>
                    <span className="text-white font-bold text-xl">About</span>
                    <a className="link text-white link-hover">About us</a>
                    <a className="link text-white link-hover">Contact</a>
                    <a className="link text-white link-hover">Toys Information</a>
                    <a className="link text-white link-hover">Press Contacts</a>
                </div>

                <div>
                    <span className="text-white font-bold text-xl">Subscribe</span>
                    <div className='flex items-center'>
                        <input className='p-3 rounded' type="email" name="email" placeholder='Enter Your Email' id="" />
                        <button className='p-4 btn-success rounded-xl'>
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </div>
                    {/* <hr  className='text-gray'/> */}
                    <div className='gap-4 flex text-2xl text-white mt-5'>
                        <FaGithub></FaGithub>
                        <FaGoogle></FaGoogle>
                        <FaFacebook></FaFacebook>
                    </div>
                </div>
            </footer>





        </>
    );
};

export default Footer;