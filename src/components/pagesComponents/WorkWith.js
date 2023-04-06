import { useSelector } from "react-redux";
import { WORK_WITH } from "../../constants/PagesContent/WorkWithContent";
import TextViva from "../common/TextViva";
import Hero from "../common/Hero";

export default function WorkWith() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? WORK_WITH.en : WORK_WITH.it;

  return (
    <div>
      <Hero
        borderBottomColor="#FF0286"
        src="/workwith/work-with-bn.jpg"
        nooverlay
      />
      <div className="mx-auto mt-8 md:mt-32 " style={{ maxWidth: "1528px" }}>
        <div
          className="flex flex-col items-center justify-center mx-auto"
          style={{ maxWidth: "1200px" }}
        >
          <h1 className="text-5xl md:text-6xl playfair pt-8 mb-16">
            {Content.title}
          </h1>
          <TextViva className="text-lg leading-relaxed text-center mb-4">
            {Content.subtitle}
          </TextViva>
          <TextViva className="text-lg leading-relaxed text-center mb-16">
            {Content.info}
          </TextViva>
          <div className="mb-32">
            <a
              className="rainbow-link-inline"
              target="_blank"
              href="https://www.linkedin.com/company/alice-ristorante/?viewAsMember=true"
            >
              <span>{Content.calltoaction}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
