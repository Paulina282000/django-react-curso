import lesion from "assets/img/lesion.png"
import juvi from "assets/img/juvilaciones.png"

const incentives = [
  {
    name: 'Accidentes laborales',
    imageSrc: lesion, // Usando la imagen "lesion.png"
    description: "Si tuviste un accidente laboral tenes dos años para reclamar la indemnización.",
  },
  {
    name: 'Amparos Obras Sociales',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "Si tu obra social se niega a darte cobertura a un tratamiento o medicamento asesórate con un especialista para hacer valer tus derechos.",
  },
  {
    name: 'Inicio Juvilaciones',
    imageSrc: juvi, // Usando la imagen "juvilaciones.png"
    description:
      "Somos un estudio jurídico especializado en jubilaciones y te ofrecemos acompañarte y asesorarte para obtener la mejor jubilación posible para tu caso, en el menor tiempo posible.",
  },
]

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Nos especializamos en los derechos de los empleados
            </h2>
            <p className="mt-4 text-gray-500"></p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt={incentive.name} />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-lg font-medium text-gray-900">{incentive.name}</h3> {/* Aumenté el tamaño de la fuente aquí */}
                  <p className="mt-2 text-base text-gray-500">{incentive.description}</p> {/* Aumenté el tamaño de la fuente aquí */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
