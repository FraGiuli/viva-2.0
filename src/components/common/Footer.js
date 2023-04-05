import TextViva from "./TextViva";
import { Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <div>
      <div className="rainbowbg" style={{ height: "10px" }}></div>
      <div
        className="mx-auto items-center flex p-8 flex-col w-full"
        style={{ maxWidth: "1528px" }}
      >
        <div className="flex flex-wrap gap-8  md:gap-16">
          <div className="flex flex-grow flex-col items-center">
            <Image
              src="/footer/newfooter_1.png"
              alt="Ristorante 1 Stella MICHELIN"
              width="100px"
            />
            <TextViva className="text-sm mt-4">
              Ristorante 1 Stella MICHELIN
            </TextViva>
          </div>
          <div className="flex flex-grow flex-col items-center">
            <Image
              src="/footer/newfooter_2.png"
              alt="Associazione Le Soste"
              width="100px"
            />
            <TextViva className="text-sm mt-4">Associazione Le Soste</TextViva>
          </div>
          <div className="flex flex-grow flex-col items-center">
            <Image
              src="/footer/newfooter_3.png"
              alt="Ambasciatori del Gusto"
              width="100px"
            />
            <TextViva className="text-sm mt-4">Ambasciatori del Gusto</TextViva>
          </div>
          <div className="flex flex-grow flex-col items-center">
            <Image
              src="/footer/newfooter_4.png"
              alt="50Best Discovery"
              width="100px"
            />
            <TextViva className="text-sm mt-4">50Best Discovery</TextViva>
          </div>
          <div className="flex flex-grow flex-col items-center">
            <Image
              src="/footer/newfooter_5.png"
              alt="Toques Italia"
              width="100px"
            />
            <TextViva className="text-sm mt-4">Toques Italia</TextViva>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 mt-16 md:w-1/2">
          <a
            href="https://cosaporto.it/partner/viva-di-viviana-varese/?utm_source=viviana.varese&utm_medium=referral&utm_campaign=viviana.varese.milano"
            target="_blank"
            className="flex flex-grow flex-col items-center"
          >
            <Image
              src="/footer/CP-logo-orizzontale-1.png"
              alt="Cosa ti porto"
              width="250px"
            />
          </a>
          <a
            href="https://www.scoolinary.net/courses/colorful-italian-pasta?ref=0929bf"
            target="_blank"
            className="flex flex-grow flex-col items-center"
          >
            <Image
              src="/footer/scoolinary.png"
              alt="Scoolinary"
              width="250px"
            />
          </a>
        </div>
        <div className="flex justify-center mt-16">
          <TextViva className="text-lg">
            © 2023 ALICETTE S.R.L. P.IVA 08390270968
          </TextViva>
        </div>
      </div>
    </div>
  );
}
