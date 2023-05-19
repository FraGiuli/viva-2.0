import { useSelector } from "react-redux";
import TextViva from "../common/TextViva";
import Slider from "../common/Slider";
import Hero from "../common/Hero";
import {
  VIVIANA_VARESE,
  SLIDER,
} from "../../constants/PagesContent/ViviavaVareseContent";
import { PAGES_IT } from "@/constants/PagesConst";
import { Zoom } from "react-slideshow-image";

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
        <div
          className="flex flex-col items-center justify-center px-[16px] mb-16 mx-auto mt-16 md:mt-32"
          style={{ maxWidth: "1000px" }}
        >
          <TextViva
            tag="h1"
            className="text-5xl md:text-6xl playfair pt-8 mb-16 text-center"
          >
            {Content.title}
          </TextViva>
          <TextViva className="text-lg leading-relaxed  mb-8 text-center">
            {Content.body}
          </TextViva>
          <TextViva className="text-lg leading-relaxed  text-center">
            {Content.body2}
          </TextViva>
          <div className="my-8 lg:my-16">
            <a className="rainbow-link-inline" href={PAGES_IT.CONTATTI.slug}>
              {Content.calltoaction}
            </a>
          </div>
        </div>

        <div className="w-[100%] lg:w-5/6 mx-auto  mt-16 mb-16">
          <Slider images={SLIDER} />
        </div>
        <div className="w-[100%] lg:w-3/6 mx-auto  mt-32 mb-16">
          <Zoom scale={1.4} arrows={false} indicators={true}>
            <div>
              <TextViva className="text-4xl playfair leading-relaxed text-center mb-4 font-medium">
                {Content.payoff.title1}
              </TextViva>
              <TextViva className="text-xl leading-relaxed text-center mb-8">
                {Content.payoff.body1}
              </TextViva>
            </div>
            <div>
              <TextViva className="text-4xl playfair leading-relaxed text-center mb-4 font-medium">
                {Content.payoff.title2}
              </TextViva>
              <TextViva className="text-xl leading-relaxed text-center mb-8">
                {Content.payoff.body2}
              </TextViva>
            </div>
            <div>
              <TextViva className="text-4xl playfair leading-relaxed text-center mb-4 font-medium">
                {Content.payoff.title3}
              </TextViva>

              <TextViva className="text-xl leading-relaxed text-center mb-8">
                {Content.payoff.body3}
              </TextViva>
            </div>
            <div>
              <TextViva className="text-4xl playfair leading-relaxed text-center mb-4 font-medium">
                {Content.payoff.title4}
              </TextViva>

              <TextViva className="text-xl leading-relaxed text-center mb-8">
                {Content.payoff.body4}
              </TextViva>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}
