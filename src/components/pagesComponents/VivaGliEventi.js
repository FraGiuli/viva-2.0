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
        src="/vivaglieventi/eventi-sfondo-hero.png"
        nooverlay
      />
      <div className="mx-auto mt-8 md:mt-32 " style={{ maxWidth: "1528px" }}>
        <div
          className="flex flex-col items-center justify-center mx-auto px-[16px] lg:px-0"
          style={{ maxWidth: "1200px" }}
        >
          <h1 className="text-5xl md:text-6xl playfair pt-8 mb-16">
            {Content.title}
          </h1>
          <TextViva className="text-lg leading-relaxed text-center mb-4">
            {Content.subtitle}
          </TextViva>

          <div className="mb-32">
            <a
              className="rainbow-link-inline "
              target="_blank"
              href={Content.pdf}
            >
              <span>{Content.calltoaction}</span>
            </a>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row flex-wrap mb-8 lg:mb-32 gap-8 px-[16px] lg:px-0 mx-auto justify-center items-center"
          style={{ maxWidth: "1200px" }}
        >
          <BoxConFoto
            title={Content.bodyhead}
            body={Content.body}
            src="/vivaglieventi/catering-banqueting.jpg"
            alt="catering"
            className="md:w-[46%] md:min-h-[800px]"
          />
          {Content.bodyhead3 && (
            <BoxConFoto
              title={Content.bodyhead3}
              body={Content.body3}
              src="/vivaglieventi/viva-aperitivo.jpg"
              alt="aperitivo"
              className="md:w-[46%] md:min-h-[800px]"
            />
          )}
          <BoxConFoto
            title={Content.bodyhead1}
            body={Content.body1}
            src="/vivaglieventi/corsi-team-building.jpg"
            alt="team-building"
            className="md:w-[46%] md:min-h-[800px]"
          />

          <BoxConFoto
            title={Content.bodyhead2}
            body={Content.body2}
            src="/vivaglieventi/showcooking.jpg"
            alt="showcooking.jpg"
            className="md:w-[46%] md:min-h-[800px]"
          />
        </div>
      </div>
    </div>
  );
}
