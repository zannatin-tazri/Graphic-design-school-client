import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import phoneimg from '../../assets/06.PNG';

const OnlineEducation = () => {
  return (
    <div id="contact" className="bg-gray-800 text-white rounded-xl px-6 py-16 md:px-16 md:py-32">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-center mb-10">
        Online Education
      </h1>

      <div className="lg:ps-20 ps-0 flex flex-col-reverse lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <ul className="list-disc pl-5 space-y-4 text-sm sm:text-base text-left">
            <li>Eligendi quidem nam soluta laborum optio doloremque, vitae commodi omnis quae animi, accusamus laudantium repudiandae eum tempore dicta voluptas corporis quisquam vel?</li>
            <li>Vitae commodi omnis quae animi, accusamus laudantium repudiandae eum tempore dicta voluptas corporis quisquam vel?</li>
            <li>Eligendi quidem nam soluta laborum optio doloremque, vitae commodi omnis quae animi, accusamus laudantium repudiandae eum tempore dicta voluptas corporis quisquam vel?</li>
            <li>Vitae commodi omnis quae animi, accusamus laudantium repudiandae eum tempore dicta voluptas corporis quisquam vel?</li>
          </ul>

          <div className="py-8 text-xl sm:text-2xl font-semibold">
            <p>Our Service</p>
            <p>+01234567890</p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
              Download Our App
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <button className="text-white mb-4 sm:mb-0 btn bg-green-700 border-none">
                <FaGooglePlay className="mr-2" />
                Learn Graphics
              </button>
              <button className="text-white btn bg-green-700 border-none">
                <FaApple className="mr-2" />
                Learn Graphics
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img className="max-w-full h-auto" src={phoneimg} alt="Phone preview" />
        </div>
      </div>
    </div>
  );
};

export default OnlineEducation;
