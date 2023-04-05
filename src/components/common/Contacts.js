import { Image } from "@nextui-org/react";
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
  ...otherProps
}) {
  return (
    <div
      className={`${className} flex flex-col-reverse md:flex-row gap-8 md:gap-12 px-8 lg:px-0`}
      {...otherProps}
    >
      <div className="md:w-1/2">
        <iframe
          src={linkMap}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mappa"
        ></iframe>
      </div>
      <div className="md:w-1/2">
        <TextViva className="text-4xl playfair font-regular mb-6">
          {title}
        </TextViva>
        <TextViva className="text-lg font-bold">{name}</TextViva>
        <TextViva className="text-lg mb-6">{address}</TextViva>
        {children}
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
        {childrensLogo}
      </div>
    </div>
  );
}
