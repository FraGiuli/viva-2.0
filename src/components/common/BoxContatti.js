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
  address2,
  tel2,
  address1,
  tel1,
  location,
  seeMap,
  linkMap,
  seeMap1,
  linkMap1,
  seeMap2,
  linkMap2,
  href,
}) {
  return (
    <Card
      className={className}
      style={{ border: `8px solid ${borderColor}`, borderRadius: "30px" }}
    >
      <Card.Body css={{ flexGrow: 0 }}>
        <Link href={href}>
          <Image src={src} alt={alt} width="100%" />
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

          <div className="flex flex-col md:flex-row gap-[12px] mb-[24px]">
            <div className="flex flex-col pr-[12px] bordo-laterale">
              {address1 && (
                <TextViva className="text-lg leading-relaxed">
                  {address1}
                </TextViva>
              )}
              {seeMap1 && (
                <a
                  className="text-lg mb-[12px] block"
                  target="_blank"
                  href={linkMap1}
                >
                  {seeMap1}
                </a>
              )}
              {tel1 && (
                <TextViva className="text-lg leading-relaxed ">{tel1}</TextViva>
              )}
            </div>
            <div className="flex flex-col">
              {address2 && (
                <TextViva className="text-lg leading-relaxed">
                  {address2}
                </TextViva>
              )}
              {seeMap2 && (
                <a
                  className="text-lg mb-[12px] block"
                  target="_blank"
                  href={linkMap2}
                >
                  {seeMap2}
                </a>
              )}

              {tel2 && (
                <TextViva className="text-lg leading-relaxed ">{tel2}</TextViva>
              )}
            </div>
          </div>
          {mail && (
            <TextViva className="text-lg leading-relaxed">{mail}</TextViva>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
}
