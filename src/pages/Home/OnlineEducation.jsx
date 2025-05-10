import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import phoneimg from '../../assets/06.PNG'

const OnlineEducation = () => {
    return (
        <div className='bg-gray-800  h-full p-32 text-white' >
            <h1 className='text-6xl font-serif font-bold'>Online Education</h1>

            <div className='ps-3 flex gap-8 items-center'>
            <div className='text-center w-1/2'>
               <ul className='text-start'>
                <li className='list-disc text-wrap'>Eligendi quidem nam soluta laborum optio doloremque, vitae commodi omnis quae animi, accusamus laudantium repudiandae eum tempore dicta voluptas corporis quisquam vel?</li>
                <li className='list-disc text-wrap'>Vitae commodi omnis quae animi, accusamus laudantium repudiandae eum tempore dicta voluptas corporis quisquam vel?</li>
                <li className='list-disc text-wrap'>Eligendi quidem nam soluta laborum optio doloremque, vitae commodi omnis quae animi, accusamus laudantium repudiandae eum tempore dicta voluptas corporis quisquam vel?</li>
                <li className='list-disc text-wrap'>Vitae commodi omnis quae animi, accusamus laudantium repudiandae eum tempore dicta voluptas corporis quisquam vel?</li>
               </ul>
               <div className='p-10 text-3xl font-semibold'>
                <p >Our Service</p>
               <p >+01234567890</p>
               </div>
               <div>
                <h1 className='text-2xl font-serif font-bold'>Download Our App</h1>
                <div>
                <button className="text-white my-6 btn bg-green-700 border-none "> <FaGooglePlay />Learn Graphics</button> <br />
                <button className="text-white btn bg-green-700 border-none "> <FaApple />Learn Graphics</button>
                

                </div>

               </div>
               

            </div>
            <div>
              <img className='sm:ps-16 ' src={phoneimg}alt="" />
            </div>
            </div>
            
        </div>
    );
};

export default OnlineEducation;