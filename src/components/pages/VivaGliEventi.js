import { useSelector } from "react-redux";
import { VIVA_GLI_EVENTI } from "../../constants/Pages/VivaGliEventi";
import TextImage from "../common/TextImage";
import { PAGES_IT } from "@/constants/PagesConst";

export default function VivaGliEventi() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content =
    selectedLanguage === "en" ? VIVA_GLI_EVENTI.en : VIVA_GLI_EVENTI.it;

  return (
    <div>
      <div
        style={{
          borderBottom: "10px solid #FF0286",
          width: "100%",
          backgroundImage: "url(/vivaglieventi/eventi_sfondo.png)",
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
            <h1 className="text-5xl md:text-6xl playfair pt-8 white mb-16">
              {Content.title}
            </h1>
            <div className="pb-8">
              <a
                className="rainbow-link-inline eventi-link"
                href="/vivaglieventi/VIVA_presentazione_eventi-compresso.pdf"
              >
                <span>{Content.calltoaction}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 md:mt-32" style={{ maxWidth: "1528px" }}>
        <TextImage
          title={Content.bodyhead}
          body={Content.body}
          src="/vivaglieventi/catering-banqueting.jpg"
          alt="banqueting"
          left
          className="mb-8 lg:mb-32"
          half
        />
        <TextImage
          title={Content.bodyhead1}
          body={Content.body1}
          src="/vivaglieventi/corsi-team-building.jpg"
          alt="team-building"
          right
          className="mb-8 lg:mb-32"
          half
        />
        <TextImage
          title={Content.bodyhead2}
          body={Content.body2}
          src="/vivaglieventi/Newsletter-natale-VIVA_1-1024x1024.jpg"
          alt="aperitivo"
          left
          className="mb-8 lg:mb-32"
          half
        />
      </div>
    </div>
  );
}
