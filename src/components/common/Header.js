import Link from "next/link";
import { useState, useEffect } from "react";
import { Image, Modal } from "@nextui-org/react";
import { Navbar, Dropdown } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/language";
import { PAGES_IT, PAGES_EN } from "../../constants/PagesConst";
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import LinkDropdown from "./LinkDropdown";
import TextViva from "./TextViva";

export default function Header({ page }) {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
    if (typeof window !== undefined) {
      window.localStorage.setItem("lang", language);
    }
  };

  const PAGES = selectedLanguage === "en" ? PAGES_EN : PAGES_IT;
  const subMenuItem = [PAGES.POLPO, PAGES.FAAK, PAGES.PASSALACQUA];

  const dropDownMenuItem = subMenuItem.findIndex((el) => el.name === page) > -1;
  // const showLang = page === PAGES.BISTROT.name || page === PAGES.GELATI.name;
  const showLang = false;
  const PRENOTA = selectedLanguage === "en" ? "Book" : "Prenota";
  const PRENOTA_TITLE =
    selectedLanguage === "en"
      ? "Booking VIVA Vivana Varese"
      : "Prenota VIVA Vivana Varese";
  const PRENOTA_SUBTITLE =
    selectedLanguage === "en"
      ? "1 Michelin's star Restaurant"
      : "Ristorante 1 stella Michelin";
  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <div style={{ width: "160px", padding: "8px" }}>
            <Link href={PAGES.HOME.slug}>
              <Image alt="logo" src="/logo-viva-firma.png" />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link
            isActive={page === PAGES.VIVIANA_VARESE.name}
            href={PAGES.VIVIANA_VARESE.slug}
          >
            {PAGES.VIVIANA_VARESE.label}
          </Navbar.Link>
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                className={dropDownMenuItem ? "active" : ""}
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}
              >
                {PAGES.PROGETTI.label}
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="I progetti"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "auto",
              }}
            >
              {subMenuItem.map((item) => (
                <Dropdown.Item key={item.name}>
                  <LinkDropdown
                    isActive={page === item.name}
                    href={item.slug}
                    description={item.description}
                    target={item.target}
                  >
                    {item.label}
                  </LinkDropdown>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href={PAGES.SHOP_VIVA.slug} target="_blank">
            {PAGES.SHOP_VIVA.label}
          </Navbar.Link>
          <Navbar.Link
            isActive={page === PAGES.EVENTI.name}
            href={PAGES.EVENTI.slug}
          >
            {PAGES.EVENTI.label}
          </Navbar.Link>
          <Navbar.Link
            isActive={page === PAGES.CORSI.name}
            href={PAGES.CORSI.slug}
          >
            {PAGES.CORSI.label}
          </Navbar.Link>
          <Navbar.Link
            isActive={page === PAGES.WORK_WITH.name}
            href={PAGES.WORK_WITH.slug}
          >
            {PAGES.WORK_WITH.label}
          </Navbar.Link>
          <Navbar.Link
            isActive={page === PAGES.CONTATTI.name}
            href={PAGES.CONTATTI.slug}
          >
            {PAGES.CONTATTI.label}
          </Navbar.Link>
        </Navbar.Content>

        <Navbar.Content>
          <a href="mailto:info@vivianavaresechef.it" className="icon-link">
            <MdMail />
          </a>
          {!showLang && selectedLanguage === "en" && (
            <button
              onClick={() => handleLanguageChange("it")}
              disabled={selectedLanguage === "it"}
            >
              <Image src="/en.png" alt="en" width="30px" height="15px" />
            </button>
          )}
          {!showLang && selectedLanguage === "it" && (
            <button
              onClick={() => handleLanguageChange("en")}
              disabled={selectedLanguage === "en"}
            >
              <Image src="/it.png" alt="en" width="30px" height="15px" />
            </button>
          )}

          <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              className={`${
                PAGES.VIVIANA_VARESE.name === page ? "active" : ""
              } navbar-collapse-link`}
              href={PAGES.VIVIANA_VARESE.slug}
            >
              {PAGES.VIVIANA_VARESE.label}
            </Link>
          </Navbar.CollapseItem>
          <Dropdown>
            <Navbar.CollapseItem>
              <Dropdown.Button
                auto
                light
                className={dropDownMenuItem ? "active" : ""}
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}
              >
                {PAGES.PROGETTI.label}
              </Dropdown.Button>
            </Navbar.CollapseItem>
            <Dropdown.Menu
              aria-label="I progetti"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "50px",
              }}
            >
              {subMenuItem.map((item) => (
                <Dropdown.Item key={item.name} description={item.description}>
                  <Link
                    color="inherit"
                    className={`${
                      item.name === page ? "active" : ""
                    } navbar-collapse-link`}
                    href={item.slug}
                  >
                    {item.label}
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              className={"navbar-collapse-link"}
              href={PAGES.SHOP_VIVA.slug}
            >
              {PAGES.SHOP_VIVA.label}
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              className={`${
                PAGES.EVENTI.name === page ? "active" : ""
              } navbar-collapse-link`}
              href={PAGES.EVENTI.slug}
            >
              {PAGES.EVENTI.label}
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              className={`${
                PAGES.CORSI.name === page ? "active" : ""
              } navbar-collapse-link`}
              href={PAGES.CORSI.slug}
            >
              {PAGES.CORSI.label}
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              className={`${
                PAGES.WORK_WITH.name === page ? "active" : ""
              } navbar-collapse-link`}
              href={PAGES.WORK_WITH.slug}
            >
              {PAGES.WORK_WITH.label}
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link
              color="inherit"
              className={`${
                PAGES.CONTATTI.name === page ? "active" : ""
              } navbar-collapse-link`}
              href={PAGES.CONTATTI.slug}
            >
              {PAGES.CONTATTI.label}
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      <div className="rainbowbg" style={{ height: "10px" }}></div>
    </>
  );
}
