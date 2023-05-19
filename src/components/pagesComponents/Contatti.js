import { useSelector } from "react-redux";
import { CONTATTI } from "../../constants/PagesContent/Contatti";
import TextViva from "../common/TextViva";
import Hero from "../common/Hero";
import BoxContatti from "../common/BoxContatti";

export default function WorkWith() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? CONTATTI.en : CONTATTI.it;

  return (
    <div>
      <Hero
        borderBottomColor="#FF0286"
        src="/contatti/Piastrelle.png"
        nooverlay
      />
      <div className="mx-auto mt-8 md:mt-32 " style={{ maxWidth: "1528px" }}>
        <div
          className="flex flex-col items-center justify-center mx-auto px-[16px] lg:px-[8px]"
          style={{ maxWidth: "1200px" }}
        >
          <TextViva
            tagh="h1"
            className="text-5xl md:text-6xl playfair pt-8 mb-16"
          >
            {Content.visitUs}
          </TextViva>
          <TextViva className="text-2xl leading-relaxed text-center mb-16 md:mb-32">
            {Content.subtitle}
          </TextViva>
        </div>
        <div
          className="flex flex-col lg:flex-row flex-wrap mb-8 lg:mb-32  gap-8 mx-auto justify-center items-center px-[16px] lg:px-[8px]"
          style={{ maxWidth: "1200px" }}
        >
          {Content.array.map((el) => (
            <BoxContatti
              key={el.title}
              location={el.location}
              title={el.title}
              mail={el.mail}
              tel={el.tel}
              address={el.address}
              src={el.srcLogo}
              alt={el.alt}
              borderColor={el.bcolor}
              address2={el.address2}
              tel2={el.tel2}
              address1={el.address1}
              tel1={el.tel1}
              seeMap={el.seeMap}
              linkMap={el.linkMap}
              seeMap1={el.seeMap1}
              linkMap1={el.linkMap1}
              seeMap2={el.seeMap2}
              linkMap2={el.linkMap2}
              href={el.href}
              className="p-[8px] md:p-[16px] lg:w-[46%] md:min-h-[620px]"
            />
          ))}
        </div>
        <div
          className="flex flex-col items-center justify-center mx-auto px-[16px] lg:px-[8px] mb-8 lg:mb-32"
          style={{ maxWidth: "1200px" }}
        >
          <TextViva className="text-5xl md:text-6xl playfair pt-8 mb-16 text-center">
            {Content.title}
          </TextViva>

          <TextViva className="text-2xl leading-relaxed text-center mb-8">
            {Content.otherContatti}
          </TextViva>
          <div>
            <a
              className="rainbow-link-inline "
              target="_blank"
              href="https://vivavivianavarese.substack.com/?r=1vtts1&utm_campaign=pub-share-checklist"
            >
              <span>{Content.newsletter}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
