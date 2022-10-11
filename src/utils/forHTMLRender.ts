const forHTMLRender = (props: {
  list: any[];
  html: string;
  options: any | undefined[];
}) => {
  const { list, html, options } = props;
  let finalHTML = "";
  console.log(list)
  list.forEach((item) => {
    let newFragment = html;
    options.forEach((key: string | number) => {
      if (item[key]) {
        newFragment = newFragment.replaceAll(`{{${key}-replace}}`, item[key]);
      } else {
        newFragment = newFragment.replaceAll(`{{${key}-replace}}`, "");
      }
    });
    finalHTML = finalHTML + newFragment;
  });
  return finalHTML;
};

export default forHTMLRender;
