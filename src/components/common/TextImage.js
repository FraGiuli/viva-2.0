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
}) {
  if (left)
    return (
      <div className="flex  gap-8 md:gap-12 flex-col md:flex-row mb-8">
        <div className="md:w-2/6">
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
        <div className="flex items-center justify-center md:w-4/6 px-8 md:px-0">
          <div>
            {bodyhead && (
              <TextViva className="text-lg leading-relaxed text-left font-bold mb-8">
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
      <div className="flex gap-8 md:gap-12 flex-col-reverse md:flex-row mb-8">
        <div className="flex items-center justify-center md:w-4/6 px-8 md:px-0">
          <div>
            {bodyhead && (
              <TextViva className="text-lg leading-relaxed text-left font-bold mb-8">
                {bodyhead}
              </TextViva>
            )}
            <TextViva className="text-lg leading-relaxed text-left">
              {body}
            </TextViva>
          </div>
        </div>
        <div className="md:w-2/6">
          <Image src={src} alt={alt} />
        </div>
      </div>
    );
}
