import TextViva from "./TextViva";
import { Modal, Image, Card } from "@nextui-org/react";

export default function Hero({
  borderBottomColor,
  src,
  srcLogo,
  title,
  subtitle,
  width = "500px",
  nooverlay,
  bgPosition,
  payoff,
  borderNone,
}) {
  return (
    <div
      style={{
        borderBottom: `${
          borderNone ? "none" : `10px solid ${borderBottomColor}`
        }`,
        width: "100%",
        minHeight: "500px",
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        backgroundPosition: `${bgPosition ? bgPosition : "center"}`,
      }}
    >
      {!nooverlay && (
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            opacity: 0.5,
            zIndex: 0,
          }}
        ></div>
      )}
      <div
        className="mx-auto flex flex-col p-4 md:p-0 items-center justify-center min-h-0 md:min-h-[800px]"
        style={{
          maxWidth: "1528px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {srcLogo && (
          <Image
            src={`${srcLogo}`}
            alt="logo"
            className="pt-16"
            style={{ maxWidth: width, margin: 0 }}
          />
        )}
        <div className="flex flex-col w-full text-center">
          {title && (
            <h1 className="text-5xl md:text-6xl playfair pt-8 white">
              {title}
            </h1>
          )}
          {payoff && (
            <TextViva
              className="text-5xl md:text-6xl playfair pt-8 white"
              style={{ lineHeight: "1.5" }}
            >
              {payoff}
            </TextViva>
          )}
          {subtitle && (
            <h2 className="text-3xl md:text-4xl playfair pb-4 font-thin tracking-wide white">
              {subtitle}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
