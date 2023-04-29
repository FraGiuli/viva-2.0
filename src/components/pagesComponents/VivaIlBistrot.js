import { useState } from "react";
import { useSelector } from "react-redux";
import {
  BISTROT_CONTENT,
  SLIDER,
} from "../../constants/PagesContent/BistrotContent";
import { Modal, Image } from "@nextui-org/react";
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

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <div>
        <Hero
          src="/vivailbistrot/bistrot-interno.jpg"
          borderBottomColor="#ba8a76"
          srcLogo="/vivailbistrot/logo-bistrot-4.png"
        />
        <div className="mx-auto mt-0 lg:mt-32" style={{ maxWidth: "1528px" }}>
          <div
            className="flex flex-col items-center justify-center px-8 mb-16 mx-auto mt-16 md:mt-32"
            style={{ maxWidth: "1000px" }}
          >
            <TextViva className="text-3xl playfair leading-relaxed text-center mb-4 font-medium">
              {Content.bodyhead}
            </TextViva>
            <TextViva className="text-lg leading-relaxed text-center">
              {Content.body}
            </TextViva>
            <TextViva className="text-lg leading-relaxed text-center mb-8 lg:mb-32">
              {Content.body2}
            </TextViva>
            <div className="w-full mb-8 lg:mb-32">
              <Slider images={SLIDER} />
            </div>
            <TextViva className="text-lg leading-relaxed text-center mb-8 lg:mb-16">
              {Content.body3}
            </TextViva>

            <div
              className="flex flex-wrap gap-16 justify-center mb-8 lg:mb-16"
              style={{ width: "100%" }}
            >
              {Content.menus.length > 0 &&
                Content.menus.map((el) => (
                  <div key={el.label} className="text-center">
                    <a href={el.pdf} target="_blank" className="menu">
                      <span className="rainbow-link-inline">{el.label}</span>
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
            linkMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.9376342352734!2d15.069395399999998!3d36.8918402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131229ae4c539e19%3A0x2ff4017d09fa1660!2sVia%20Rocco%20Pirri%2C%2019%2C%2096017%20Noto%20SR!5e0!3m2!1sit!2sit!4v1680699096271!5m2!1sit!2sit"
            fb="/"
            insta="/"
            color="#ba8a76"
          >
            <TextViva className="text-lg">{Content.contatti.tel}</TextViva>
            <TextViva className="pb-4 text-lg">
              {Content.contatti.mail}
            </TextViva>
            <TextViva className="pb-4 text-lg">
              {Content.contatti.orari}
            </TextViva>

            <div className="pb-8">
              <a className="rainbow-link" onClick={handler}>
                <span>{Content.prenota}</span>
              </a>
            </div>
          </Contacts>
        </div>
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
    </>
  );
}
