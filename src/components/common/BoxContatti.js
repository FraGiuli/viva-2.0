import TextViva from "./TextViva";
import Link from "next/link";
import { Image, Card } from "@nextui-org/react";

export default function BoxContatti({
  className,
  borderColor,
  src,
  title,
  address,
  tel,
  mail,
  alt,
  location,
  seeMap,
  linkMap,
  href,
  instagram,
}) {
  return (
    <Card
      className={className}
      style={{ border: `8px solid ${borderColor}`, borderRadius: "30px" }}
    >
      <Card.Body css={{ flexGrow: 0 }}>
        <Link href={href} className="flex items-center justify-center">
          <img src={src} alt={alt} width="300px" />
        </Link>
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
            <TextViva className="text-lg leading-relaxed">{address}</TextViva>
          )}
          {seeMap && (
            <a
              className="text-lg mb-[12px] block"
              target="_blank"
              href={linkMap}
            >
              {seeMap}
            </a>
          )}

          {tel && (
            <TextViva className="text-lg leading-relaxed ">{tel}</TextViva>
          )}

          {mail && (
            <TextViva className="text-lg leading-relaxed mb-[24px]">
              {mail}
            </TextViva>
          )}

          <div className="flex flex-col items-center">
            {instagram && (
              <a href={instagram} target="_blank">
                <Image
                  src="/iconainsta.png"
                  alt="instagram"
                  style={{ maxWidth: "40px" }}
                />
              </a>
            )}
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}
