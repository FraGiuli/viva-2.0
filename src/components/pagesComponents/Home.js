import { useSelector } from "react-redux";
import { HOME_CONTENT } from "../../constants/PagesContent/HomeContent";
export default function Home() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const Content = selectedLanguage === "en" ? HOME_CONTENT.en : HOME_CONTENT.it;
  return (
    <>
      <div> {Content.title}</div>
    </>
  );
}
