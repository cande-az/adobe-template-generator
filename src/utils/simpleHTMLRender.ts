const simpleHTMLRender = (key: string, list: Record<string, string>) => {
  console.log("Data", key, list);

  if (list[key]) return `${list[key]}`;
  else return "";
};
export default simpleHTMLRender;
