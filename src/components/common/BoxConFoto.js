import TextViva from "./TextViva";
import { Modal, Image, Card } from "@nextui-org/react";

export default function BoxConFoto({
  className,
  bodyhead,
  body,
  src,
  title,
  href,
  alt,
  calltoaction,
}) {
  return (
    <Card className={className}>
      <Card.Body css={{ p: 0, minHeight: "350px", flexGrow: 0 }}>
        <Card.Image
          src={src}
          objectFit="cover"
          width="100%"
          height={350}
          alt={alt}
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start", height: "100%" }}>
        <div className="flex flex-col p-4 md:p-8" style={{ height: "100%" }}>
          {title && (
            <TextViva className="text-3xl playfair leading-relaxed text-left mb-4 font-medium">
              {title}
            </TextViva>
          )}
          {bodyhead && (
            <TextViva className="text-lg leading-relaxed text-left font-bold mb-4">
              {bodyhead}
            </TextViva>
          )}
          <TextViva className="text-lg leading-relaxed text-left">
            {body}
          </TextViva>
          {calltoaction && (
            <div className="mt-8">
              <a className="rainbow-link-inline" href={href}>
                <span>{calltoaction}</span>
              </a>
            </div>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
}
