import { connect } from "react-redux";
import logo_delfi from "assets/img/image.png";

const navigation = {
  solutions: [
    { name: 'Consultoría Legal', href: '#' },
    { name: 'Asesoría', href: '#' },
    
  ],
  support: [
    { name: 'Contacto', href: '/contacto' },
  ],
  company: [
    { name: 'Casos', href: '/casos' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Carreras', href: '/carreras' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/tuPagina', // Coloca aquí el enlace real
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/abogado.consulta.cordoba/', // Coloca aquí el enlace real
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Ubicación',
      href: 'https://www.google.com.ar/maps/place/25+de+Mayo+125,+X5019EHC+C%C3%B3rdoba/@-31.4152612,-64.1845231,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a29cc2b84b8b:0x68f0ef91805b31e9!8m2!3d-31.4152658!4d-64.1819482!16s%2Fg%2F11dz57b12b?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D', // Coloca aquí el enlace real
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5493515924478%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAabmWLhtn3UhEc0NSRbdKJ63B6VEAcV078h_ZZVm10c4HGeAYkzkjq5_SFI_aem_0o3HBlwUHrc1riAxEv00og&e=AT0b_TYcBrtJp4Z3dVc9UvEo5jLKLkNskGhh0AYETCqg_mkroAbxDXGKd-w3Uj21JeHrFPECLKVKuyggvsUml1kd07avHS4MKgV-UQ', // Coloca aquí el número de teléfono real
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2a10 10 0 00-10 10c0 1.672.472 3.25 1.276 4.58L1 22l5.445-2.276A9.967 9.967 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm.548 14.304c-.417.266-.88.42-1.376.42-1.552 0-3.008-1.493-3.826-2.938-.137-.204-.02-.441.258-.502l1.541-.442c.269-.08.55.046.642.31.444 1.222 1.548 2.253 2.614 2.253.343 0 .662-.183.844-.494.181-.311.237-.683.172-1.04-.159-.625-.577-1.146-1.095-1.378-.328-.154-.656-.326-.965-.497-.258-.127-.537-.268-.787-.406-.357-.231-.624-.494-.72-.827-.094-.335-.017-.694.23-.931.156-.174.38-.229.596-.214 1.19.079 2.255.607 2.972 1.498.337.448.504.996.508 1.56-.006 1.296-.742 2.474-1.898 3.026z"
        clipRule="evenodd"
      />
    </svg>
  ),
    },
  ],
};

function Footer() {
  return (
    <footer className="bg-bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              src={logo_delfi}
              width={130}
              height={120}
              alt="Logo Delfi"
              className=""
            />
            <p className="text-lg text-gray-800 font-light">
             
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900">Soluciones</h3>
                <ul role="list" className="space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name} className="text-base text-gray-500 hover:text-gray-900">
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900">Soporte</h3>
                <ul role="list" className="space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name} className="text-base text-gray-500 hover:text-gray-900">
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium text-gray-900">Compañía</h3>
              <ul role="list" className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name} className="text-base text-gray-500 hover:text-gray-900">
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium text-gray-900">Legal</h3>
              <ul role="list" className="space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name} className="text-base text-gray-500 hover:text-gray-900">
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Nueva sección añadida */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="text-base text-gray-400 xl:text-center">&copy; 2025 Cúneo - Tirante, Abogados. </p>
        
        {/* Nueva información debajo */}
        <div className="mt-4 text-base text-gray-400 xl:text-center">
          
        </div>
      </div>
    </footer>
  );
}

export default connect()(Footer);
