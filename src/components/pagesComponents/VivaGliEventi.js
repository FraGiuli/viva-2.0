import { useSelector } from "react-redux";
import { VIVA_GLI_EVENTI } from "../../constants/PagesContent/VivaGliEventiContent";
import TextViva from "../common/TextViva";
import Hero from "../common/Hero";
import BoxConFoto from "../common/BoxConFoto";
import { PAGES_IT } from "@/constants/PagesConst";

export default function VivaGliEventi() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content =
    selectedLanguage === "en" ? VIVA_GLI_EVENTI.en : VIVA_GLI_EVENTI.it;

  return (
    <div>
      <Hero
        borderBottomColor="#FF0286"
        src="/vivaglieventi/eventi-sfondo.jpg"
        nooverlay
      />
      <div className="mx-auto mt-8 md:mt-32 " style={{ maxWidth: "1528px" }}>
        <div
          className="flex flex-col items-center justify-center mx-auto px-[16px] lg:px-[8px]"
          style={{ maxWidth: "1200px" }}
        >
          <TextViva
            tag="h1"
            className="text-5xl md:text-6xl playfair pt-8 mb-16 text-center"
          >
            {Content.title}
          </TextViva>
          <TextViva className="text-2xl leading-relaxed text-center mb-16">
            {Content.subtitle}
          </TextViva>
          <div
            className="flex flex-col flex-start justify-center mx-auto px-[16px] lg:px-[8px]"
            style={{ maxWidth: "1200px" }}
          >
            <TextViva className="text-lg leading-relaxed text-left font-bold mb-4">
              {Content.bodyhead}
            </TextViva>

            <TextViva className="text-lg leading-relaxed text-left mb-8">
              {Content.body}
            </TextViva>
            <TextViva className="text-lg leading-relaxed text-left font-bold mb-4">
              {Content.bodyhead1}
            </TextViva>

            <TextViva className="text-lg leading-relaxed text-left mb-8">
              {Content.body1}
            </TextViva>
            <TextViva className="text-lg leading-relaxed text-left font-bold mb-4">
              {Content.bodyhead2}
            </TextViva>

            <TextViva className="text-lg leading-relaxed text-left mb-16">
              {Content.body2}
            </TextViva>
            <TextViva className="text-lg leading-relaxed text-left font-bold mb-16">
              {Content.info}
            </TextViva>
          </div>

          {/* <div className="mb-32">
            <a
              className="rainbow-link-inline "
              target="_blank"
              href={Content.pdf}
            >
              <span>{Content.calltoaction}</span>
            </a>
          </div>        */}
        </div>
        {/* <div
          className="flex flex-col lg:flex-row flex-wrap mb-8 lg:mb-32 gap-8 px-[16px] lg:px-[8px] mx-auto justify-center items-center"
          style={{ maxWidth: "1200px" }}
        >
          <BoxConFoto
            title={Content.bodyhead}
            body={Content.body}
            src="/vivaglieventi/catering-banqueting-1.jpg"
            alt="catering"
            className="md:w-[98%] md:min-h-[500px]"
          />
          <BoxConFoto
            title={Content.bodyhead1}
            body={Content.body1}
            src="/vivaglieventi/corsi-team-building-1.jpg"
            alt="team-building"
            className="md:w-[47%] md:min-h-[700px]"
          />

          <BoxConFoto
            title={Content.bodyhead2}
            body={Content.body2}
            src="/vivaglieventi/showcooking-1.jpg"
            alt="showcooking.jpg"
            className="md:w-[47%] md:min-h-[700px]"
          />
        </div> */}
      </div>
    </div>
  );
}
