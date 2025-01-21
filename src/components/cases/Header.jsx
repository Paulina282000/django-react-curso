import { Link } from 'react-router-dom';
import face from "assets/img/facebook.png";
import insta from "assets/img/insta.png";
import wha from "assets/img/whatsapp.png";

const navigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/', // Change this to your Facebook link
      icon: face,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/', // Change this to your Instagram link
      icon: insta,
    },
    {
      name: 'WhatsApp',
      href: 'https://api.whatsapp.com/send/?phone=5493515924478&text&type=phone_number&app_absent=0', // Change this to your WhatsApp link
      icon: wha,
    },
  ],
};

function Header() {
  return (
    <main>
      <div className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-indigo-600">Casos que Resolvemos</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Experiencia en la resolución de casos legales complejos
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Brindamos a nuestros clientes un servicio efectivo y profesional con una amplia experiencia en el área legal.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {/* Legal cases descriptions here */}
            </dl>
          </div>
          
          {/* Social Icons: Modified Position and Size */}
          <div className="absolute bottom-10 left-0 flex space-x-6 xl:mx-20 mx-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{item.name}</span>
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="h-6 w-6 object-contain hover:opacity-80 transition duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Background (Blurred Gradient) */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#003366" />
                <stop offset={1} stopColor="#006699" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </main>
  );
}

export default Header;

