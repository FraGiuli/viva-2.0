import { useState, useEffect } from "react";
import { Modal, Image } from "@nextui-org/react";
import TextViva from "./TextViva";

export default function Contacts({
  children,
  title,
  name,
  address,
  linkMap,
  fb,
  insta,
  className,
  childrensLogo,
  color,
  seeMap,
  prenotaButton,
  prenotaTitle,
  prenotaSubtitle,
  prenotaLink,
  ...otherProps
}) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div
      className={`${className} flex justify-center px-[16px] lg:px-[8px]`}
      {...otherProps}
    >
      <div
        className="w-full md:w-[600px] box-contatti p-[24px] md:p-[32px]"
        style={{
          border: `8px solid ${color}`,
          borderRadius: "30px",
        }}
      >
        <TextViva className="text-4xl playfair font-regular mb-6">
          {title}
        </TextViva>
        <TextViva className="text-lg font-bold">{name}</TextViva>
        <TextViva className="text-lg">{address}</TextViva>
        <a className="text-lg mb-[12px] block" target="_blank" href={linkMap}>
          {seeMap}
        </a>
        {children}
        <div className="flex flex-row justify-between items-center">
          {prenotaButton && (
            <div>
              <a className="rainbow-link" onClick={handler}>
                <span>{prenotaButton}</span>
              </a>
            </div>
          )}
          <div className="flex gap-2">
            {fb && (
              <a href={fb} target="_blank">
                <Image
                  src="/iconafb.png"
                  alt="facebook"
                  style={{ maxWidth: "40px" }}
                />
              </a>
            )}
            {insta && (
              <a href={insta} target="_blank">
                <Image
                  src="/iconainsta.png"
                  alt="instagram"
                  style={{ maxWidth: "40px" }}
                />
              </a>
            )}
          </div>
        </div>
        {childrensLogo}
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
              {prenotaTitle}
            </TextViva>
            <TextViva className="text-lg">{prenotaSubtitle}</TextViva>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div align="center">
            <iframe
              src={prenotaLink}
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
