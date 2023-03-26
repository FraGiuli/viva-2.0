import showdown from "showdown";
import { Text } from "@nextui-org/react";

const createMarkup = (html) => {
  return { __html: html };
};

export default function TextViva({ children, className, ...otherProps }) {
  const noMorePsExt = {
    type: "output",
    filter: function (text, converter) {
      const re = /<\/?p[^>]*>/gi;
      text = text.replace(re, "");
      return text;
    },
  };
  const converter = new showdown.Converter({ extensions: [noMorePsExt] });
  const html = converter.makeHtml(children);

  return (
    <Text
      color="#212529"
      className={`${className} roboto`}
      dangerouslySetInnerHTML={createMarkup(html)}
      {...otherProps}
    />
  );
}
