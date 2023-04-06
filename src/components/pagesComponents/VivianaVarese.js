import { useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import TextViva from "../common/TextViva";
import Slider from "../common/Slider";
import Hero from "../common/Hero";
import {
  VIVIANA_VARESE,
  SLIDER,
} from "../../constants/PagesContent/ViviavaVareseContent";
import { PAGES_IT } from "@/constants/PagesConst";

export default function VivianaVarese() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content =
    selectedLanguage === "en" ? VIVIANA_VARESE.en : VIVIANA_VARESE.it;

  return (
    <div>
      <Hero
        borderBottomColor="#FF0286"
        src="/vivianavarese/VIVA_viviana-bn.jpg"
        nooverlay
      />

      <div className="mx-auto mt-8 md:mt-32" style={{ maxWidth: "1528px" }}>
        <div className="px-8">
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
