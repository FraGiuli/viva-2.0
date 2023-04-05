import Link from "next/link";
import { Image } from "@nextui-org/react";
import { Navbar, Dropdown } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/language";
import { PAGES_IT, PAGES_EN } from "../../constants/PagesConst";
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";

export default function Header({ page }) {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };

  const PAGES = selectedLanguage === "en" ? PAGES_EN : PAGES_IT;
  const showLang = page === PAGES.BISTROT.name || page === PAGES.GELATI.name;
  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <div style={{ width: "80px" }}>
            <Link href={PAGES.HOME.slug}>
              <Image alt="logo" src="https://www.vivavivianavarese.it/" />
            </Link>
          </div>
        </Navbar.Brand>
        {!showLang && (
          <Navbar.Content>
            {selectedLanguage === "it" && (
              <button
                onClick={() => handleLanguageChange("en")}
                disabled={selectedLanguage === "en"}
              >
                <Image src="/en.png" alt="en" width="30px" height="15px" />
              </button>
            )}
            {selectedLanguage === "en" && (
              <button
                onClick={() => handleLanguageChange("it")}
                disabled={selectedLanguage === "it"}
              >
                <Image src="/it.png" alt="en" width="30px" height="15px" />
              </button>
            )}
          </Navbar.Content>
        )}
      </Navbar>
      <div className="rainbowbg" style={{ height: "10px" }}></div>
    </>
  );
}
