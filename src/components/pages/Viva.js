import { useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import TextViva from "../common/TextViva";
import Slider from "../common/Slider";
import Contacts from "../common/Contacts";
import { VIVA, SLIDER, SLIDER_LOCALE } from "../../constants/Pages/Viva";
import TextImage from "../common/TextImage";
import TextSlider from "../common/TextSlider";

export default function VivaVilladorata() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? VIVA.en : VIVA.it;

  return (
    <div>
      <div
        style={{
          borderBottom: "10px solid #FF0286",
          width: "100%",
          backgroundImage: "url(/viva/hero_viva.jpg)",
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
            maxWidth: "1400px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Image
            src="/viva/logo-viva-2019.svg"
            alt="logo-villadorata"
            className="pt-16"
            style={{ maxWidth: "500px", margin: 0 }}
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
      <div className="mx-auto md:mt-8" style={{ maxWidth: "1400px" }}>
        <TextSlider
          title={Content.bodyhead1}
          body={Content.body1}
          sliderImages={SLIDER}
          right
        />
        <TextImage
          title={Content.bodyhead2}
          body={Content.body2}
          src="/viva/terrotorio.jpg"
          alt="territorio"
          left
        />
        <TextSlider
          title={Content.bodyhead3}
          body={Content.body3}
          sliderImages={SLIDER_LOCALE}
          right
        />
        <div className="mb-16 text-center">
          <a className="rainbow-link">
            <span>SCOPRI IL NOSTRO MENÙ</span>
          </a>
        </div>
      </div>
      <div className="mx-auto md:mt-8" style={{ maxWidth: "1400px" }}>
        <Contacts
          className="mb-16"
          title={Content.contatti.title}
          name={Content.contatti.name}
          address={Content.contatti.address}
          linkMap="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5594.931402896579!2d9.188105!3d45.48056600000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c134c8aeb8ef%3A0x2abf1c40e9ed1235!2sPiazza%20Venticinque%20Aprile%2C%2010%2C%2020124%20Milano%20MI!5e0!3m2!1sit!2sit!4v1680514749560!5m2!1sit!2sit"
          fb="https://www.facebook.com/vivavivianavarese"
          insta="https://www.instagram.com/vivavivianavarese/?hl=it"
        >
          <TextViva>
            {'tel: <a href="tel:+390249497340">+39 02 4949 7340</a>'}
          </TextViva>
          <TextViva>
            {
              'Info e prenotazioni: <a href="mailto:info@vivavivianavarese.it">info@vivavivianavarese.it</a>'
            }
          </TextViva>
          <TextViva>
            {"Martedì – Sabato **12.30 > 14** e **19.30 > 22.00**"}
          </TextViva>
          <TextViva className="pb-8">
            {
              "**Domenica e Lunedì chiuso. Chiuso dal 24 al 27 dicembre. <br>Chiuso il 1 Gennaio Chiusura estiva ad agosto, Pasqua.**"
            }
          </TextViva>
          <div className="pb-8">
            <a className="rainbow-link">
              <span>PRENOTA</span>
            </a>
          </div>
          {/* <TextViva>
            {
              'Altri contatti: <a href="mailto:eventi@vivavivianavarese.it">eventi@vivavivianavarese.it'
            }
          </TextViva>
          <TextViva>
            {
              'PRESS OFFICE <a href="mailto:comunicazione@vivavivianavarese.it">comunicazione@vivavivianavarese.it</a>'
            }
          </TextViva>
          <TextViva>
            {
              'LAVORA CON NOI <a href="mailto:job@vivavivianavarese.it">job@vivavivianavarese.it</a>'
            }
          </TextViva>

          <TextViva className="pb-8">
            {
              'PER ISCRIVERTI ALLA NOSTRA NEWSLETTER <a href="https://vivavivianavarese.substack.com/?r=1vtts1&utm_campaign=pub-share-checklist" target="_blank">CLICCA QUI</a>'
            }
          </TextViva> */}
        </Contacts>
      </div>
    </div>
  );
}
