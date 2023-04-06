import TextViva from "./TextViva";
import { Modal, Image, Card } from "@nextui-org/react";

export default function BoxHome({
  className,
  borderColor,
  src,
  title,
  text,
  href,
  alt,
  calltoaction,
}) {
  return (
    <Card
      className={className}
      isHoverable
      isPressable
      style={{ border: `8px solid ${borderColor}`, borderRadius: "30px" }}
    >
      <a href={href}>
        <Card.Body css={{ flexGrow: 0 }}>
          <Image src={src} alt={alt} width="100%" />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start", height: "100%" }}>
          <div
            className="flex flex-col text-center"
            style={{ height: "100%", width: "100%" }}
          >
            {title && (
              <TextViva className="text-3xl playfair leading-relaxed text-center font-medium">
                {title}
              </TextViva>
            )}

            {text && (
              <TextViva className="text-2xl leading-relaxed text-center font-medium">
                {text}
              </TextViva>
            )}

            {/* {calltoaction && (
              <div>
                <button className="rainbow-link-inline">
                  <span>{calltoaction}</span>
                </button>
              </div>
            )} */}
          </div>
        </Card.Footer>
      </a>
    </Card>
  );
}
