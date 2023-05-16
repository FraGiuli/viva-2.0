import { Image } from "@nextui-org/react";
import TextViva from "./TextViva";

export default function TextImage({
  bodyhead,
  body,
  left,
  right,
  src,
  bgColor,
  payoff,
  alt,
  title,
  className,
  half,
}) {
  if (left)
    return (
      <div
        className={`${className} flex  gap-8 lg:gap-12 flex-col lg:flex-row mb-8`}
      >
        <div className={`${half ? "lg:w-1/2" : "lg:w-2/6"}`}>
          {src ? (
            <Image src={src} alt={alt} />
          ) : (
            <div
              style={{
                backgroundColor: bgColor,
                width: "100%",
                height: "100%",
              }}
            >
              <TextViva className="text-4xl playfair white p-10 leading-relaxed font-medium">
                {payoff}
              </TextViva>
            </div>
          )}
        </div>
        <div
          className={`${
            half ? "lg:w-1/2" : "lg:w-4/6"
          } flex items-center justify-center  px-[16px] 2xl:px-0`}
        >
          <div>
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
          </div>
        </div>
      </div>
    );
  if (right)
    return (
      <div
        className={`${className} flex gap-8 lg:gap-12 flex-col-reverse lg:flex-row mb-8`}
      >
        <div
          className={`${
            half ? "lg:w-1/2" : "lg:w-4/6"
          } flex items-center justify-center px-[16px] 2xl:px-0`}
        >
          <div>
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
          </div>
        </div>
        <div className={`${half ? "lg:w-1/2" : "lg:w-2/6"}`}>
          <Image src={src} alt={alt} />
        </div>
      </div>
    );
}
