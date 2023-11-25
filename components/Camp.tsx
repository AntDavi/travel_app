// Importação de constantes e componentes necessários
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

// Interface para as propriedades do componente CampSite
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

// Componente CampSite que representa um local de camping individual
const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`w-full h-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        {/* Seção de informações do local de camping */}
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src='/folded-map.svg'
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        {/* Seção de pessoas que se inscreveram */}
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
}

// Componente Camp que representa a seção de campings
const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mg-10 lg:py-20 xl:mb-20">
      {/* Lista de locais de camping */}
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lh:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Camping Doce Oeste"
          subtitle="Itatiba, São Paulo"
          peopleJoined="50+ inscreveram-se"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Camping Rio Amaranto"
          subtitle="Bento Gonçalves, Rio Grande do Sul"
          peopleJoined="30+ inscreveram-se"
        />
      </div>

      {/* Seção de destaque e chamada para ação */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          {/* Título e descrição */}
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Se sente perdido </strong> 
            e não sabe o caminho?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            A partir da ansiedade dos escaladores ao visitar um novo local de escalada, a possibilidade de se perderem é muito grande. É por isso que estamos aqui para aqueles que querem começar uma aventura
          </p>
          {/* Citação de destaque */}
          <Image
            src='/quote.svg'
            alt="camp-2"
            width={186}
            height={216}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
}

export default Camp;
