import { useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import TextViva from "../common/TextViva";
import Slider from "../common/Slider";
import Contacts from "../common/Contacts";
import {
  VILLADORATA_CONTENT,
  SLIDER,
} from "../../constants/Pages/VilladorataContent";
import TextImage from "../common/TextImage";

export default function VivaVilladorata() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content =
    selectedLanguage === "en" ? VILLADORATA_CONTENT.en : VILLADORATA_CONTENT.it;

  const logos = (
    <div className="mt-8">
      <a
        href="https://www.fondazioneslowfood.com/it/cosa-facciamo/alleanza-slow-food-dei-cuochi/#"
        target="_blank"
      >
        <Image
          src="/villadorata/slowfood-logo.jpg"
          alt="slowfood-logo"
          style={{ maxWidth: "150px" }}
        />
      </a>
    </div>
  );
  return (
    <div>
      <div
        style={{
          borderBottom: "10px solid #e8cc72",
          width: "100%",
          backgroundImage: "url(/villadorata/sfondo-hero.jpg)",
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row p-4 md:p-0 text-center md:text-left"
          style={{ maxWidth: "1400px" }}
        >
          <div className="flex flex-col w-full">
            <h1 className="text-5xl md:text-6xl playfair pt-16">
              {Content.title}
            </h1>
            <h2 className="text-3xl md:text-4xl playfair pb-4 font-thin tracking-wide">
              {Content.subtitle}
            </h2>
            <h3 className="text-xl roboto pb-16">{Content.location}</h3>
          </div>
          <div className="flex md:justify-end w-full">
            <Image
              src="/villadorata/w-villadorata-restaurant-logo.png"
              alt="logo-villadorata"
              style={{ maxWidth: "500px", margin: 0 }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto md:mt-8" style={{ maxWidth: "1400px" }}>
        <TextImage
          bodyhead={Content.bodyhead}
          body={Content.body1}
          payoff={Content.payoff}
          bgColor="#e8cc72"
          alt="payoff"
          left
        />
        <TextImage
          body={Content.body2}
          src="/villadorata/chefs-villadorata.jpg"
          alt="villadorata-viviana"
          right
        />
        <div
          className="flex flex-col items-center mb-24 "
          style={{ width: "100%" }}
        >
          <TextViva className="text-4xl playfair font-semibold text-center mb-16 px-8 md:px-0">
            {Content.opening}
          </TextViva>
          <div className="w-full md:w-1/2">
            <Slider images={SLIDER} />
          </div>
        </div>
        <div className="mb-16 text-center">
          <a className="rainbow-link">
            <span>PRENOTA</span>
          </a>
        </div>
        <Contacts
          className="mb-16"
          title={Content.contatti.title}
          name={Content.contatti.name}
          address={Content.contatti.address}
          linkMap="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6383.910579519786!2d15.039605!3d36.867489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13122822089fabeb%3A0x8584a75b06e93787!2sCountry%20House%20Villadorata!5e0!3m2!1sit!2sit!4v1679587584763!5m2!1sit!2sit"
          fb="https://www.facebook.com/WVilladoratacountryrestaurant/"
          insta="https://www.instagram.com/wvilladorata/?igshid=19oq9l39w4yqb"
          childrensLogo={logos}
        />
      </div>
    </div>
  );
}
