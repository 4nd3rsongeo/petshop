import Image from "next/image";
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>

          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum, necessitatibus adipisci nisi nulla illo exercitationem est delectus odit facere fugiat sed eveniet libero quis tempora dolorum excepturi omnis reprehenderit?.
            </p>
            <p className="disclaimer">Esse é um Front End feito por alguém que não tinha mais o que fazer. Todos os produtos e serviços são caricaturas mal feitas de um mundo em colapso e não devem ser levadas a sério (com exceção do ritual xamã).</p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2026.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários e dois ou três burros.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Felicidade corporativa é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target='_blank'
                href={`https://wa.me/551199998800?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
              
            </div>

          </div>

        </div>


      </div>
    </section>
  )
}