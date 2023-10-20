import TextViva from "./TextViva";
import { Modal, Image, Card } from "@nextui-org/react";

export default function BoxHome({
  className,
  src,
  title,
  text,
  href,
  alt,
  srcbg,
  target,
}) {
  return (
    <Card
      className={className}
      isHoverable
      isPressable
      // style={{ border: `8px solid ${borderColor}`, borderRadius: "30px" }}
      style={{
        minHeight: "400px",
        backgroundImage: `url(${srcbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          opacity: 0.3,
          zIndex: -1,
        }}
      ></div>
      <a href={href} target={target} style={{ height: "100%" }}>
        <div
          className="flex flex-col items-center justify-center"
          style={{ height: "100%" }}
        >
          <Card.Body css={{ flexGrow: 0 }}>
            <Image src={src} alt={alt} width="200px" />
          </Card.Body>
          <Card.Footer css={{ justifyItems: "flex-start", height: "100%" }}>
            <div
              className="flex flex-col text-center"
              style={{ height: "100%", width: "100%" }}
            >
              {title && (
                <TextViva className="text-3xl playfair leading-relaxed text-center font-medium white">
                  {title}
                </TextViva>
              )}

              {text && (
                <TextViva className="text-2xl leading-relaxed text-center font-medium white">
                  {text}
                </TextViva>
              )}
            </div>
          </Card.Footer>
        </div>
      </a>
    </Card>
  );
}
