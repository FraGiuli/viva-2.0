import { useSelector } from "react-redux";
import {
  BISTROT_CONTENT,
  SLIDER,
} from "../../constants/PagesContent/BistrotContent";

import Hero from "../common/Hero";
import Slider from "../common/Slider";
import TextViva from "../common/TextViva";
import Contacts from "../common/Contacts";

export default function VivaIlBistrot() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content =
    selectedLanguage === "en" ? BISTROT_CONTENT.en : BISTROT_CONTENT.it;

  return (
    <>
      <div>
        <Hero
          src="/vivailbistrot/bistrot-interno.jpg"
          borderBottomColor="#ba8a76"
          srcLogo="/vivailbistrot/bistrot-logo-bianco.png"
        />
        <div className="mx-auto mt-0 lg:mt-32" style={{ maxWidth: "1528px" }}>
          <div
            className="flex flex-col items-center justify-center px-[16px] mb-16 mx-auto mt-16 md:mt-32"
            style={{ maxWidth: "1000px" }}
          >
            <TextViva className="text-3xl playfair leading-relaxed text-center mb-4 font-medium">
              {Content.bodyhead}
            </TextViva>

            <TextViva className="text-lg leading-relaxed text-center mb-8">
              {Content.body}
            </TextViva>
          </div>
          <div className="w-full md:w-4/6 mb-8 mx-auto">
            <Slider images={SLIDER} />
          </div>
          <div
            className="flex flex-col items-center justify-center px-[16px] mb-16 mx-auto mt-16 md:mt-32"
            style={{ maxWidth: "1000px" }}
          >
            <TextViva className="text-lg leading-relaxed text-center mb-8">
              {Content.body2}
            </TextViva>
            <div key={Content.menu.label} className="text-center mb-[56px]">
              <a
                href={Content.menu.pdf}
                target="_blank"
                className="menu-buttons-inline"
              >
                <span>{Content.menu.label}</span>
              </a>
            </div>
            <img
              src="/vivailbistrot/gruppo.jpg"
              alt="ristorante"
              width="100%"
              className="mb-8 lg:mb-16"
            />
            <TextViva className="text-lg leading-relaxed text-center mb-8 lg:mb-16">
              {Content.body3}
            </TextViva>

            <div
              className="flex flex-wrap gap-8 md:gap-16 justify-center mb-8 lg:mb-16"
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
            </div>
          </div>

          <Contacts
            className="mb-16 lg:mb-32"
            title={Content.contatti.title}
            name={Content.contatti.name}
            address={Content.contatti.address}
            linkMap="https://goo.gl/maps/PJJFTFfkhusi7NUx6"
            fb="https://www.facebook.com/vivailbistrotnoto"
            insta="https://www.instagram.com/viva_ilbistrotnoto/"
            color="#ba8a76"
            seeMap={Content.contatti.seeMap}
            // prenotaButton={Content.prenota}
            prenotaTitle={Content.prenotaTitle}
            prenotaSubtitle={Content.prenotaSubtitle}
            prenotaLink={Content.prenotaLink}
          >
            <TextViva className="text-lg">{Content.contatti.tel}</TextViva>
            <TextViva className="pb-4 text-lg">
              {Content.contatti.mail}
            </TextViva>
            <TextViva className="pb-4 text-lg">
              {Content.contatti.orari}
            </TextViva>
          </Contacts>
        </div>
      </div>
    </>
  );
}
