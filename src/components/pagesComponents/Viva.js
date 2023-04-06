import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Image, Card } from "@nextui-org/react";
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
import TextImage from "../common/TextImage";
import TextSlider from "../common/TextSlider";

export default function Viva() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? VIVA.en : VIVA.it;

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Hero
        src="/viva/hero_viva.jpg"
        borderBottomColor="#FF0286"
        srcLogo="/viva/logo-viva-2019.svg"
      />

      <div className="mx-auto md:mt-8" style={{ maxWidth: "1528px" }}>
        <div
          className="flex flex-col items-center justify-center px-8 mb-16 mx-auto mt-16 md:mt-32"
          style={{ maxWidth: "1000px" }}
        >
          <h1 className="text-5xl md:text-6xl playfair pt-8 mb-4">
            {Content.title}
          </h1>
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
        </div>
        <div className="w-[100%] md:w-4/6 mt-16 mx-auto">
          <Slider images={SLIDER} />
        </div>
        <TextImage
          title={Content.bodyhead2}
          body={Content.body2}
          src="/viva/terrotorio.jpg"
          alt="territorio"
          left
          className="mb-32 mt-32"
        />
        <TextSlider
          title={Content.bodyhead3}
          body={Content.body3}
          sliderImages={SLIDER_LOCALE}
          right
          className="mb-32"
        />

        <div className="flex gap-8 md:gap-12 flex-col md:flex-row items-center justify-center my-16 md:my-32 px-8">
          <Card
            isHoverable
            css={{ mw: "400px" }}
            className="card-menu"
            isPressable
          >
            <a
              className="flex items-center justify-center"
              href={`/viva/${Content.menu}`}
              target="_blank"
              style={{
                width: "100%",
                backgroundImage: "url(/viva/sfondo-menu.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
                backgroundPosition: "center",
                padding: "24px",
                minHeight: "300px",
              }}
            >
              <TextViva
                className="text-4xl playfair text-center"
                style={{ lineHeight: "1.5" }}
              >
                {Content.menuTitle}
              </TextViva>
            </a>
          </Card>
          <Card
            isHoverable
            css={{ mw: "400px" }}
            className="card-menu"
            isPressable
          >
            <a
              className="flex items-center justify-center"
              href={`/viva/${Content.menuDolci}`}
              target="_blank"
              style={{
                width: "100%",
                backgroundImage: "url(/viva/sfondo-menu-dolci.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
                backgroundPosition: "center",
                padding: "24px",
                minHeight: "300px",
              }}
            >
              <TextViva
                className="text-4xl playfair text-center"
                style={{ lineHeight: "1.5" }}
              >
                {Content.menuDolciTitle}
              </TextViva>
            </a>
          </Card>
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

        <div
          className="flex flex-col lg:flex-row gap-16 mx-auto mt-16 mb-16 lg:mb-32 px-8 lg:px-0"
          style={{ maxWidth: "1000px" }}
        >
          {selectedLanguage === "it" && (
            <Card isHoverable className="card-menu boxes" isPressable>
              <a href="https://www.shopify.com/" target="_blank">
                <Card.Image
                  src="/viva/ITA_VIVA-Lo-shopping-.png"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  alt="Card image background"
                />
              </a>
            </Card>
          )}
          <Card
            isHoverable
            className="card-menu boxes max-w-[550px] mx-auto"
            isPressable
          >
            <a href="https://www.shopify.com/" target="_blank">
              <Card.Image
                src={Content.regalaViva}
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Card image background"
              />
            </a>
          </Card>
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
          linkMap="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5594.931402896579!2d9.188105!3d45.48056600000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c134c8aeb8ef%3A0x2abf1c40e9ed1235!2sPiazza%20Venticinque%20Aprile%2C%2010%2C%2020124%20Milano%20MI!5e0!3m2!1sit!2sit!4v1680514749560!5m2!1sit!2sit"
          fb="https://www.facebook.com/vivavivianavarese"
          insta="https://www.instagram.com/vivavivianavarese/?hl=it"
        >
          <TextViva className="text-lg">{Content.contatti.tel}</TextViva>
          <TextViva className="text-lg">{Content.contatti.mail}</TextViva>
          <TextViva className="text-lg pb-8">{Content.contatti.orari}</TextViva>

          <div className="pb-8">
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
