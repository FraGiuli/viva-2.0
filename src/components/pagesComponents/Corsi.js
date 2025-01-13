import { useSelector } from "react-redux";
import { COURSES } from "../../constants/PagesContent/CorsiContent";
import TextViva from "../common/TextViva";
import Hero from "../common/Hero";

export default function Corsi() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? COURSES.en : COURSES.it;

  return (
    <div>
      <Hero borderBottomColor="#FF0286" src="/corsi/corsi-bn.jpg" nooverlay />
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
          <TextViva className="text-2xl leading-relaxed text-center mb-8">
            {Content.subtitle}
          </TextViva>
          <div className="mb-24">
            <a
              className="rainbow-link-inline"
              target="_blank"
              href="https://ac80e3.myshopify.com/collections/corsi-di-cucina?_pos=1&_psq=CORSI&_ss=e&_v=1.0"
            >
              <span>{Content.calltoaction}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
