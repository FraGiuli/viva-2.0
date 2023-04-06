import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Image } from "@nextui-org/react";
import TextViva from "../common/TextViva";
import Slider from "../common/Slider";
import Hero from "../common/Hero";
import Contacts from "../common/Contacts";
import {
  VILLADORATA_CONTENT,
  SLIDER,
} from "../../constants/PagesContent/VilladorataContent";
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

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div>
      <Hero
        src="/villadorata/Villadorata-tre.jpg"
        borderBottomColor="#e8cc72"
        srcLogo="/villadorata/w-villadorata-restaurant-logo.png"
      />
      <div className="mx-auto md:mt-8" style={{ maxWidth: "1528px" }}>
        <div
          className="flex flex-col items-center justify-center px-8 mb-16 mx-auto mt-16 md:mt-32"
          style={{ maxWidth: "1000px" }}
        >
          <h1 className="text-5xl md:text-6xl playfair pt-8 mb-4">
            {Content.title}
          </h1>
          <TextViva className="text-3xl playfair leading-relaxed text-center mb-4 font-medium">
            {Content.subtitle}
          </TextViva>
        </div>
        <TextImage
          bodyhead={Content.bodyhead}
          body={Content.body1}
          payoff={Content.payoff}
          bgColor="#e8cc72"
          alt="payoff"
          left
          className="mb-8 lg:mb-32"
        />
        <TextImage
          body={Content.body2}
          src="/villadorata/chefs-villadorata-giardino.jpg"
          alt="villadorata-viviana"
          right
          className="mb-8 lg:mb-32"
        />
        <div
          className="flex flex-col items-center mb-24 "
          style={{ width: "100%" }}
        >
          <TextViva className="text-4xl playfair font-semibold text-center mb-16 px-8 lg:px-0">
            {Content.opening}
          </TextViva>
          <div className="w-full lg:w-4/6">
            <Slider images={SLIDER} />
          </div>
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
        >
          <div className="mb-8 text-left">
            <a className="rainbow-link" onClick={handler}>
              <span>{Content.prenota}</span>
            </a>
          </div>
        </Contacts>
      </div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="500px"
      >
        <Modal.Header>
          <div className="flex flex-col">
            <TextViva
              className="text-3xl playfair font-medium mb-4"
              id="modal-title"
            >
              {Content.prenotaTitle}
            </TextViva>
            <TextViva className="text-lg">{Content.prenotaSubtitle}</TextViva>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div align="center">
            <iframe
              src={Content.prenotaLink}
              style={{
                width: "100%",
                minHeight: "500px",
                border: "none",
                scrolling: "yes",
              }}
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
