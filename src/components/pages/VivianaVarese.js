import { useState } from "react";
import { useSelector } from "react-redux";
import { Image, Card } from "@nextui-org/react";
import TextViva from "../common/TextViva";
import Slider from "../common/Slider";
import Contacts from "../common/Contacts";
import { VIVIANA_VARESE, SLIDER } from "../../constants/Pages/ViviavaVarese";
import TextImage from "../common/TextImage";
import TextSlider from "../common/TextSlider";
import { PAGES_IT } from "@/constants/PagesConst";

export default function VivianaVarese() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content =
    selectedLanguage === "en" ? VIVIANA_VARESE.en : VIVIANA_VARESE.it;

  return (
    <div>
      <div
        style={{
          borderBottom: "10px solid #FF0286",
          width: "100%",
          backgroundImage: "url(/vivianavarese/VIVA_viviana.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          backgroundPosition: "center",
        }}
      >
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
        <div
          className="mx-auto flex flex-col p-4 md:p-0 items-center justify-center min-h-0 md:min-h-[800px]"
          style={{
            maxWidth: "1528px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="flex flex-col w-full text-center">
            <h1 className="text-5xl md:text-6xl playfair pt-8 white">
              {Content.title}
            </h1>
            <h2 className="text-3xl md:text-4xl playfair pb-4 font-thin tracking-wide white">
              {Content.subtitle}
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 md:mt-32" style={{ maxWidth: "1528px" }}>
        <TextViva className="text-4xl playfair leading-relaxed text-center mb-4 font-medium">
          {Content.payoff.title1}
        </TextViva>
        <TextViva className="text-xl leading-relaxed text-center mb-8">
          {Content.payoff.body1}
        </TextViva>
        <TextViva className="text-4xl playfair leading-relaxed text-center mb-4 font-medium">
          {Content.payoff.title2}
        </TextViva>
        <TextViva className="text-xl leading-relaxed text-center mb-8">
          {Content.payoff.body2}
        </TextViva>
        <TextViva className="text-4xl playfair leading-relaxed text-center mb-4 font-medium">
          {Content.payoff.title3}
        </TextViva>
        <TextViva className="text-xl leading-relaxed text-center mb-8">
          {Content.payoff.body3}
        </TextViva>
        <TextViva className="text-4xl playfair leading-relaxed text-center mb-4 font-medium">
          {Content.payoff.title4}
        </TextViva>
        <TextViva className="text-xl leading-relaxed text-center mb-8">
          {Content.payoff.body4}
        </TextViva>
        <div className="w-[100%] lg:w-5/6 mx-auto  mt-16 mb-16">
          <Slider images={SLIDER} />
        </div>
        <div
          className="flex flex-col px-8 mb-16 mx-auto mt-16 md:mt-32"
          style={{ maxWidth: "1000px" }}
        >
          <TextViva className="text-lg leading-relaxed text-left mb-8">
            {Content.body}
          </TextViva>
          <TextViva className="text-lg leading-relaxed text-left">
            {Content.body2}
          </TextViva>
          <div className="my-8 lg:my-16">
            <a className="rainbow-link-inline" href={PAGES_IT.CONTATTI.slug}>
              {Content.calltoaction}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
