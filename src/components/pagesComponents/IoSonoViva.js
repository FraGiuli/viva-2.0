import { useSelector } from "react-redux";
import { Image, Card } from "@nextui-org/react";
import TextViva from "../common/TextViva";
import Hero from "../common/Hero";
import Contacts from "../common/Contacts";
import { IO_SONO_VIVA } from "../../constants/PagesContent/IoSonoVivaContent";

export default function IoSonoViva() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? IO_SONO_VIVA.en : IO_SONO_VIVA.it;

  const logos = (
    <div className="mt-8">
      <a
        href="https://cosaporto.it/partner/viva-di-viviana-varese/?utm_source=viviana.varese&utm_medium=referral&utm_campaign=viviana.varese.milano"
        target="_blank"
      >
        <Image
          src="/iosonoviva/cosatiportologo.png"
          alt="cosa-ti-porto"
          style={{ maxWidth: "200px" }}
        />
      </a>
    </div>
  );
  return (
    <div>
      <Hero
        src="/iosonoviva/VivaIlGelato_hero.jpg"
        borderBottomColor="#FF0286"
        srcLogo="/iosonoviva/logo-dolci-gelati.png"
        width="300px"
      />
      <div className="mx-auto md:mt-8" style={{ maxWidth: "1528px" }}>
        <div
          className="flex flex-col items-center justify-center px-8 mb-16 mx-auto mt-16 md:mt-32"
          style={{ maxWidth: "1000px" }}
        >
          <TextViva className="text-3xl playfair leading-relaxed text-center mb-4 font-medium">
            {Content.payoff}
          </TextViva>
          <TextViva className="text-lg leading-relaxed text-center pb-8">
            {Content.body1}
          </TextViva>
          <Image
            src="/iosonoviva/donne-maltrattate.png"
            alt="cadmi"
            className="pb-8"
            style={{ maxWidth: "200px" }}
          />
          <TextViva className="text-lg leading-relaxed text-center">
            {Content.body2}
          </TextViva>
        </div>
      </div>
      <div
        className="mx-auto md:mt-8 my-16 md:my-32"
        style={{ maxWidth: "1528px" }}
      >
        <Contacts
          className="mb-16"
          title={Content.contatti.title}
          name={Content.contatti.name}
          address={Content.contatti.address}
          linkMap="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5594.0491372150655!2d9.191055!3d45.489450000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c12cdaf33bbd%3A0x3a9395f1bcbdd1a0!2sPiazzale%20Lagosta%2C%207%2C%2020159%20Milano%20MI!5e0!3m2!1sit!2sit!4v1680621530798!5m2!1sit!2sit"
          fb=""
          insta=""
          childrensLogo={logos}
          color="#FF0286"
        >
          <TextViva className="pb-8 text-lg">{Content.contatti.tel}</TextViva>

          <TextViva className="pb-4 text-lg">
            {Content.contatti.address2}
          </TextViva>
          <TextViva className="pb-4 text-lg">{Content.contatti.tel2}</TextViva>
          <TextViva className="text-lg">{Content.contatti.orari}</TextViva>
          <TextViva className="text-lg">{Content.contatti.mail}</TextViva>
        </Contacts>
      </div>
    </div>
  );
}
