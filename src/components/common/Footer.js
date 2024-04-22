import TextViva from "./TextViva";
import { Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className="mb-8">
      <div className="rainbowbg" style={{ height: "10px" }}></div>

      <div className="flex justify-center mt-8">
        <TextViva className="text-sm">
          © 2023 ALICETTE S.R.L. P.IVA 08390270968
        </TextViva>
      </div>
    </div>
  );
}
