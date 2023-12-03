import { useSelector } from "react-redux";
import TextViva from "../common/TextViva";
import Hero from "../common/Hero";
import { SHOP_CONTENT } from "../../constants/PagesContent/Shop";

export default function Shop() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? SHOP_CONTENT.en : SHOP_CONTENT.it;

  return (
    <div>
      <Hero src="/shopviva/Shop_hero.jpg" borderBottomColor="#e8cc72" />
      <div className="mx-auto md:mt-8" style={{ maxWidth: "1528px" }}>
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
            {Content.body}
          </TextViva>
          <div className="mb-16">
            <a
              className="rainbow-link-inline"
              target="_blank"
              href={Content.link}
            >
              <span>{Content.calltoaction}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
