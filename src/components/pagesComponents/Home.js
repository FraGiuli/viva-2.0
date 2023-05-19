import { useSelector } from "react-redux";
import { Image, Card } from "@nextui-org/react";
import { HOME_CONTENT } from "../../constants/PagesContent/HomeContent";
import Hero from "../common/Hero";
import TextViva from "../common/TextViva";
import BoxConFoto from "../common/BoxConFoto";
import BoxHome from "../common/BoxHome";
import { PAGES_IT } from "@/constants/PagesConst";

export default function Home() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? HOME_CONTENT.en : HOME_CONTENT.it;
  return (
    <div>
      <Hero
        src="/home/viviana-varese-hero1.jpg"
        borderNone
        bgPosition="top center"
        nooverlay
      />
      <div
        className="rainbowbg"
        style={{ width: "100%", height: "10px" }}
      ></div>
      <div
        className="flex flex-col mx-auto mt-16 lg:mt-32 px-[16px] lg:px-[8px]"
        style={{ maxWidth: "1000px" }}
      >
        <TextViva className="text-5xl playfair leading-relaxed text-center mb-4">
          {Content.locali.title}
        </TextViva>
        <TextViva className="text-2xl leading-relaxed text-center mb-8">
          {Content.locali.subtitle}
        </TextViva>
        <div className="text-center">
          <a className="rainbow-link-inline" href={PAGES_IT.CONTATTI.slug}>
            <span>{Content.locali.calltoaction}</span>
          </a>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row flex-wrap mb-16 lg:mb-32  mt-16 lg:mt-32 gap-8 px-[16px] lg:px-[8px] justify-center items-center mx-auto"
        style={{ maxWidth: "1000px" }}
      >
        {Content.locali.array.map((el) => (
          <BoxHome
            key={el.text}
            title={el.location}
            text={el.text}
            src={el.srcLogo}
            alt={el.alt}
            borderColor={el.bcolor}
            className="p-8 md:w-[46%]"
            href={el.href}
          />
        ))}
      </div>
      <div
        className="flex flex-col items-center justify-center mx-auto  md:mt-8 px-[16px] lg:px-[8px]"
        style={{ maxWidth: "1200px" }}
      >
        <TextViva className="text-3xl md:text-5xl leading-relaxed text-center mb-16">
          {Content.subtitle}
        </TextViva>
        <div className="mb-16 lg:mb-32">
          <a
            className="rainbow-link-inline"
            href={PAGES_IT.VIVIANA_VARESE.slug}
          >
            <span>{Content.calltoaction}</span>
          </a>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row flex-wrap mb-8 lg:mb-32 gap-8 px-[16px] lg:px-[8px] mx-auto justify-center items-center"
        style={{ maxWidth: "1200px" }}
      >
        <BoxConFoto
          title={Content.eventi.title}
          body={Content.eventi.body}
          src="/home/catering-banqueting.jpg"
          alt="eventi"
          className="md:w-[46%] md:min-h-[600px]"
          calltoaction={Content.eventi.calltoaction}
          href={Content.eventi.href}
        />

        <BoxConFoto
          title={Content.work.title}
          body={Content.work.body}
          src="/home/work-with-bn.jpg"
          alt="workwith"
          className="md:w-[46%] md:min-h-[600px]"
          calltoaction={Content.work.calltoaction}
          href={Content.work.href}
        />
      </div>
      <div
        className="flex flex-col  mx-auto mb-16 lg:mb-48 px-[16px] lg:px-[8px]"
        style={{ maxWidth: "1000px" }}
      >
        <TextViva className="text-5xl playfair leading-relaxed text-center mb-4">
          {Content.shop.title}
        </TextViva>
        <TextViva className="text-2xl leading-relaxed text-center mb-8">
          {Content.shop.body}
        </TextViva>
        <div className="text-center">
          <a
            className="rainbow-link-inline"
            href={Content.shop.href}
            target="_blank"
          >
            <span>{Content.shop.calltoaction}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
