import TextViva from "./TextViva";
import { Modal, Image, Card } from "@nextui-org/react";

export default function BoxContatti({
  className,
  borderColor,
  src,
  title,
  address,
  tel,
  mail,
  alt,
  address2,
  tel2,
  address1,
  tel1,
  location,
}) {
  return (
    <Card
      className={className}
      style={{ border: `8px solid ${borderColor}`, borderRadius: "30px" }}
    >
      <Card.Body css={{ flexGrow: 0 }}>
        <Image src={src} alt={alt} width="100%" />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start", height: "100%" }}>
        <div
          className="flex flex-col"
          style={{ height: "100%", width: "100%" }}
        >
          <TextViva className="text-xl leading-relaxed ">{location}</TextViva>
          <TextViva className="text-xl playfair leading-relaxed font-bold">
            {title}
          </TextViva>

          {address && (
            <TextViva className="text-lg leading-relaxed pb-4">
              {address}
            </TextViva>
          )}

          {tel && (
            <TextViva className="text-lg leading-relaxed ">{tel}</TextViva>
          )}

          {address1 && (
            <TextViva className="text-lg leading-relaxed">{address1}</TextViva>
          )}
          {tel1 && (
            <TextViva className="text-lg leading-relaxed ">{tel1}</TextViva>
          )}
          {address2 && (
            <TextViva className="text-lg leading-relaxed pt-4">
              {address2}
            </TextViva>
          )}

          {tel2 && (
            <TextViva className="text-lg leading-relaxed ">{tel2}</TextViva>
          )}

          {mail && (
            <TextViva className="text-lg leading-relaxed">{mail}</TextViva>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
}
