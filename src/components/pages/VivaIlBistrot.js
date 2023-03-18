import { useSelector } from "react-redux";
import { BISTROT_CONTENT } from "../../constants/Pages/BistrotContent";

export default function VivaIlBistrot() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content =
    selectedLanguage === "en" ? BISTROT_CONTENT.en : BISTROT_CONTENT.it;
  return (
    <>
      <div> {Content.title}</div>
    </>
  );
}
