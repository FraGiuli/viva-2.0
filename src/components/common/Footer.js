import TextViva from "./TextViva";

export default function Footer() {
  return (
    <div className="mb-8">
      <div className="rainbowbg" style={{ height: "10px" }}></div>

      <div className="flex justify-center mt-8">
        <TextViva className="text-sm">
          © 2023 ALICETTE S.R.L. P.IVA 08390270968
        </TextViva>
      </div>
      <div className=" text-start">
        {/* Link alla Privacy Policy */}
        <a
          href="https://www.iubenda.com/privacy-policy/38943154"
          className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
          target="_blank"
          title="Privacy Policy"
        >
          Privacy Policy
        </a>
        <span> | </span>
        {/* Link alla Cookie Policy */}
        <a
          href="https://www.iubenda.com/privacy-policy/38943154/cookie-policy"
          className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
          target="_blank"
          title="Cookie Policy"
        >
          Cookie Policy
        </a>
      </div>
    </div>
  );
}
