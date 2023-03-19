import { text } from "@fortawesome/fontawesome-svg-core";
import { getTextAlign } from "utils/fonts";
import { relativeToAbsouluteUrls } from "utils/rleativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
  return (
    <p
      className={`max-w-5xl mx-auto" ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsouluteUrls(content) }}
    ></p>
  );
};
