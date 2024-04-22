import { useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import TextViva from "../common/TextViva";
import Slider from "../common/Slider";
import Hero from "../common/Hero";
import Contacts from "../common/Contacts";
import {
  VILLADORATA_CONTENT,
  SLIDER,
} from "../../constants/PagesContent/VilladorataContent";
import TextImage from "../common/TextImage";
import TextSlider from "../common/TextSlider";

export default function VivaVilladorata() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content =
    selectedLanguage === "en" ? VILLADORATA_CONTENT.en : VILLADORATA_CONTENT.it;

  return (
    <div>
      <Hero
        src="/villadorata/foto-ristorante.jpg"
        borderBottomColor="#e8cc72"
        srcLogo="/villadorata/Logo_villadorata_white.png"
      />
      <div className="mx-auto md:mt-8" style={{ maxWidth: "1528px" }}>
        <div
          className="flex flex-col items-center justify-center px-[16px] mb-16 mx-auto mt-16 md:mt-32"
          style={{ maxWidth: "1000px" }}
        >
          <h1 className="text-5xl md:text-6xl playfair pt-8 mb-4">
            {Content.title}
          </h1>
          <TextViva className="text-3xl playfair leading-relaxed text-center mb-4 font-medium">
            {Content.subtitle}
          </TextViva>
          <div className="flex gap-[16px] mt-8 mb-8">
            <a
              href="https://www.fondazioneslowfood.com/it/cosa-facciamo/alleanza-slow-food-dei-cuochi/#"
              target="_blank"
            >
              <Image
                src="/villadorata/slowfood-logo.jpg"
                alt="slowfood-logo"
                style={{ maxWidth: "200px" }}
              />
            </a>
            <Image
              src="/villadorata/Il-golosario.jpg"
              alt="slowfood-logo"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <TextViva className="text-xl playfair leading-relaxed text-center mb-4 font-bold">
            {Content.bodyhead}
          </TextViva>
          <TextViva className="text-lg leading-relaxed text-center mb-4 lg:mb-8">
            {Content.body1}
          </TextViva>

          {/* <div
            key={Content.menu.label}
            className="text-center mb-8 lg:mb-16 "
          >
            <a
              href={Content.menu.pdf}
              target="_blank"
              className="menu-buttons-inline"
            >
              <span>{Content.menu.label}</span>
            </a>
          </div> */}

          <img
            src="/villadorata/gruppo-1.jpg"
            alt="ristorante"
            width="100%"
            className="mb-8 lg:mb-16"
          />
          <TextViva className="text-lg leading-relaxed text-center">
            {Content.body2}
          </TextViva>
          {/* <div
            className="flex flex-wrap gap-8 md:gap-16 justify-center mb-8 lg:mb-16 mt-4 lg:mt-8"
            style={{ width: "100%" }}
          >
            {Content.menus.length > 0 &&
              Content.menus.map((el) => (
                <div key={el.label} className="text-center">
                  <a
                    href={el.pdf}
                    target="_blank"
                    className="menu-buttons-inline"
                  >
                    <span>{el.label}</span>
                  </a>
                </div>
              ))}
          </div> */}
        </div>
        <TextSlider
          body={Content.body3}
          sliderImages={SLIDER}
          right
          half
          className="mb-8 md:mb-32"
        />
        {/* <TextViva className="text-4xl font-medium playfair leading-relaxed text-center mb-8 lg:mb-32">
          {Content.opening}
        </TextViva> */}
        <Contacts
          className="mb-16 lg:mb-32"
          title={Content.contatti.title}
          name={Content.contatti.name}
          address={Content.contatti.address}
          linkMap="https://goo.gl/maps/y5U26yAijbcTiHk96"
          fb="https://www.facebook.com/WVilladoratacountryrestaurant/"
          insta="https://www.instagram.com/wvilladorata/?igshid=19oq9l39w4yqb"
          color="#e8cc72"
          seeMap={Content.contatti.seeMap}
          prenotaButton={Content.prenota}
          prenotaTitle={Content.prenotaTitle}
          prenotaSubtitle={Content.prenotaSubtitle}
          prenotaLink={Content.prenotaLink}
        >
          <TextViva className="text-lg">{Content.contatti.tel}</TextViva>
          {/* <TextViva className="pb-4 text-lg">{Content.contatti.mail}</TextViva> */}
          <TextViva className="pb-4 text-lg">{Content.contatti.orari}</TextViva>
          {/* <TextViva className="pb-4 text-2xl font-bold">
            {Content.opening}
          </TextViva> */}
        </Contacts>
      </div>
    </div>
  );
}
