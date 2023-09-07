import { useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import TextViva from "../common/TextViva";
import Hero from "../common/Hero";
import Slider from "../common/Slider";
import Contacts from "../common/Contacts";
import {
  VIVA,
  SLIDER,
  SLIDER_LOCALE,
  RICONOSCIMENTI,
} from "../../constants/PagesContent/VivaContent";
import { HOME_CONTENT } from "../../constants/PagesContent/HomeContent";
import TextSlider from "../common/TextSlider";

export default function Viva() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? VIVA.en : VIVA.it;
  const SHOP =
    selectedLanguage === "en" ? HOME_CONTENT.en.shop : HOME_CONTENT.it.shop;

  return (
    <div>
      <Hero
        src="/viva/hero_viva.jpg"
        borderBottomColor="#FF0286"
        srcLogo="/viva/logo-viva-2019.svg"
      />

      <div className="mx-auto md:mt-8" style={{ maxWidth: "1528px" }}>
        <div
          className="flex flex-col items-center justify-center px-[16px] lg:px-[8px] mb-16 mx-auto mt-16 md:mt-32"
          style={{ maxWidth: "1000px" }}
        >
          <TextViva
            tag="h1"
            className="text-5xl md:text-6xl playfair pt-8 mb-4 text-center"
          >
            {Content.title}
          </TextViva>
          <Image
            src="viva/logo_michelin-1star.png"
            alt="logo-michelin"
            width="150px"
            className="py-8"
          />
          <TextViva className="text-3xl playfair leading-relaxed text-center mb-4 font-medium">
            {Content.bodyhead1}
          </TextViva>
          <TextViva className="text-lg leading-relaxed text-center">
            {Content.body1}
          </TextViva>
          <div className="flex flex-col md:flex-row mt-8 lg:mt-16 flex gap-12">
            <a
              className="menu-buttons-inline"
              href={Content.menu}
              target="_blank"
            >
              <span>{Content.menuTitle}</span>
            </a>
            <a
              className="menu-buttons-inline"
              href={Content.menuDolci}
              target="_blank"
            >
              <span>{Content.menuDolciTitle}</span>
            </a>
            <a
              className="menu-buttons-inline"
              href={Content.menuLunch}
              target="_blank"
            >
              <span>{Content.menuLunchTitle}</span>
            </a>
          </div>
        </div>
        <div className="w-[100%] md:w-4/6 mt-16 mx-auto">
          <Slider images={SLIDER} />
        </div>
        <div
          className="flex flex-col mx-auto mb-32 mt-32 px-[16px] lg:px-[8px]"
          style={{ maxWidth: "1000px" }}
        >
          <TextViva className="text-3xl text-center playfair leading-relaxed text-center mb-4 font-medium">
            {Content.bodyhead2}
          </TextViva>
          <TextViva className="text-lg leading-relaxed text-center">
            {Content.body2}
          </TextViva>
        </div>
        <TextSlider
          title={Content.bodyhead3}
          body={Content.body3}
          sliderImages={SLIDER_LOCALE}
          right
          half
          className="mb-8 md:mb-32"
          calltoaction={
            <div className="mt-8">
              <a
                className="rainbow-link-inline"
                href={Content.calltoactionLink}
                target="_blank"
              >
                <span>{Content.calltoaction}</span>
              </a>
            </div>
          }
        />
        <div
          className="flex flex-col mx-auto mb-32 mt-32 px-[16px] lg:px-[8px]"
          style={{ maxWidth: "1000px" }}
        >
          <TextViva className="text-3xl text-center playfair leading-relaxed text-center mb-4 font-medium">
            {Content.bodyhead4}
          </TextViva>
          <TextViva className="text-lg leading-relaxed text-center">
            {Content.body4}
          </TextViva>
        </div>
        <div className="md:my-32">
          <TextViva className="text-4xl playfair mb-16 text-center">
            {Content.riconoscimenti}
          </TextViva>
          <div className="flex flex-wrap md:flex-row flex-col gap-8 items-center justify-center">
            {RICONOSCIMENTI.map((el) => (
              <div
                key={el.name}
                className="flex flex-col items-center gap-8 mb-8 md:min-w-[300px]"
              >
                <div className="p-4" style={{ border: "1px solid #e7e7e7" }}>
                  <Image src={el.src} alt={el.name} width="150px" />
                </div>
                <div>
                  <TextViva className="text-xl font-bold text-center md:text-left">
                    {el.anno}
                  </TextViva>
                  <TextViva className="text-lg text-center md:text-left">
                    {el.name}
                  </TextViva>
                </div>
              </div>
            ))}
          </div>
        </div>

        {SHOP && (
          <div
            className="flex flex-col  mx-auto mb-16 lg:mb-48 px-[16px] lg:px-[8px]"
            style={{ maxWidth: "1000px" }}
          >
            <TextViva className="text-5xl playfair leading-relaxed text-center mb-4">
              {SHOP.title}
            </TextViva>
            <TextViva className="text-2xl leading-relaxed text-center mb-8">
              {SHOP.body}
            </TextViva>
            <div className="text-center">
              <a
                className="rainbow-link-inline"
                href={SHOP.href}
                target="_blank"
              >
                <span>{SHOP.calltoaction}</span>
              </a>
            </div>
          </div>
        )}
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
          linkMap="https://goo.gl/maps/tRNN7PdhEchcAJKUA"
          fb="https://www.facebook.com/vivavivianavarese"
          insta="https://www.instagram.com/vivavivianavarese/?hl=it"
          color="#FF0286"
          seeMap={Content.contatti.seeMap}
          prenotaButton={Content.prenota}
          prenotaTitle={Content.prenotaTitle}
          prenotaSubtitle={Content.prenotaSubtitle}
          prenotaLink={Content.prenotaLink}
        >
          <TextViva className="text-lg">{Content.contatti.tel}</TextViva>
          <TextViva className="text-lg">{Content.contatti.mail}</TextViva>
          <TextViva className="text-lg pb-8">{Content.contatti.orari}</TextViva>
        </Contacts>
      </div>
    </div>
  );
}
