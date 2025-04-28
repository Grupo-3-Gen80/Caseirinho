import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { CardProfissional } from "./Cardprofissional";
import "swiper/css";
import "swiper/css/navigation";

export default function EquipeCarrossel() {
  return (
    <section className="py-16 px-6  text-center">
      <h2 className="text-3xl font-bold text-red-700 mb-15 text-center">Equipe Desenvolvedora</h2>
      <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-2">
        Somos um time de desenvolvedoras Full Stack Java, formadas pelo bootcamp intensivo da Generation Brasil.
      </p>
      <p className="text-red-700 font-medium mb-10">
        Nosso diferencial? A união entre técnica, criatividade e muita vontade de evoluir.
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]}
        className="max-w-6xl mx-auto"
      >
        <SwiperSlide>
          <CardProfissional
            foto="https://avatars.githubusercontent.com/u/183421243?v=4"
            nome="Juliana Assi"
            resumo="Formada em Big Data e Analytics, Juliana combina sua formação analítica com o olhar de desenvolvedora Full Stack..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardProfissional
            foto="https://github.com/daniele-silveira.png"
            nome="Daniele Silveira"
            resumo="Com mais de 20 anos de experiência em tecnologia, Daniele fez uma transição inspiradora da infraestrutura para o desenvolvimento..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardProfissional
            foto="https://github.com/VictoriaBorges.png"
            nome="Victoria Borges"
            resumo="Desenvolvedora Full Stack, formada em ADS. Apaixonada por tecnologia e por atividade física..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardProfissional
            foto="https://avatars.githubusercontent.com/u/111655379?v=4"
            nome="Maria Gabriela"
            resumo="Com foco em backend, Maria está concluindo graduação em TI e já tem bagagem sólida em projetos full stack..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardProfissional
            foto="https://avatars.githubusercontent.com/u/194613682?v=4"
            nome="Sâmia França"
            resumo="Estudante de Engenharia da Computação com visão interdisciplinar e paixão por inovação, Spring Boot e React..."
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardProfissional
            foto="https://avatars.githubusercontent.com/u/151661437?v=4"
            nome="Rayanne Dias"
            resumo="Formada em GTI e DS, Rayanne une raciocínio lógico e aprendizado contínuo para criar soluções tecnológicas com propósito..."
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
