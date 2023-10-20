import { generateHTML } from "@tiptap/html";
import parse from "html-react-parser";
import { extensions } from "./Editor/tiptabExtensions";

const parseJsonToHtml = (json: any) => {
  return parse(generateHTML(json, extensions));
};

export default parseJsonToHtml;
