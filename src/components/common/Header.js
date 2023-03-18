import Link from "next/link";
import { Image } from "@nextui-org/react";
import { Navbar } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/language";
import { PAGES } from "../../constants/PagesConst";

export default function Header({ page }) {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    console.log(language);
    dispatch(setLanguage(language));
  };
  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <div style={{ width: "80px" }}>
            <Link href={PAGES.HOME.slug}>
              <Image alt="logo" src="/logo-viva.png" />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link
            isActive={page === PAGES.BISTROT.name}
            href={PAGES.BISTROT.slug}
          >
            Bistrot
          </Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <button
            onClick={() => handleLanguageChange("en")}
            disabled={selectedLanguage === "en"}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("it")}
            disabled={selectedLanguage === "it"}
          >
            Italiano
          </button>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
