import { Image } from "@nextui-org/react";
import TextViva from "./TextViva";
import Slider from "./Slider";

export default function TextSlider({
  bodyhead,
  body,
  left,
  right,
  sliderImages,
  title,
  half,
  calltoaction,
  className,
}) {
  if (left)
    return (
      <div
        className={`${className} flex  gap-8 lg:gap-12 flex-col lg:flex-row`}
      >
        <div className={`${half ? "lg:w-1/2" : "lg:w-2/6"}`}>
          <Slider images={sliderImages} />
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
            {calltoaction}
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
            {calltoaction}
          </div>
        </div>
        <div className={`${half ? "lg:w-1/2" : "lg:w-2/6"}`}>
          <Slider images={sliderImages} />
        </div>
      </div>
    );
}
