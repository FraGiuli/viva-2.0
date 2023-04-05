import { useSelector } from "react-redux";
import { Image, Card } from "@nextui-org/react";
import TextViva from "../common/TextViva";
import Contacts from "../common/Contacts";
import { IO_SONO_VIVA } from "../../constants/Pages/IoSonoViva";

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
      <div
        style={{
          borderBottom: "10px solid #FF0286",
          width: "100%",
          backgroundImage: "url(/iosonoviva/VivaIlGelato_hero.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          backgroundPosition: "center",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            opacity: 0.5,
            zIndex: 0,
          }}
        ></div>
        <div
          className="mx-auto flex flex-col p-4 md:p-0 items-center justify-center min-h-0 md:min-h-[800px]"
          style={{
            maxWidth: "1528px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Image
            src="/iosonoviva/logo-dolci-gelati.png"
            alt="logo-villadorata"
            className="pt-16"
            style={{ maxWidth: "200px", margin: 0 }}
          />
          <div className="flex flex-col w-full text-center">
            <h1 className="text-5xl md:text-6xl playfair pt-8 white">
              {Content.title}
            </h1>
            <h2 className="text-3xl md:text-4xl playfair pb-4 font-thin tracking-wide white">
              {Content.subtitle}
            </h2>
            <h3 className="text-xl roboto pb-16 white">{Content.location}</h3>
          </div>
        </div>
      </div>
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
