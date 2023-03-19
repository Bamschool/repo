export const relativeToAbsouluteUrls = (htmlStirng = "") => {
  return htmlStirng.split(process.env.NEXT_PUBLIC_WP_URL).join("");
};
