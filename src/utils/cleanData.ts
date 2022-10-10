const cleanData = (currentTemplateData:any, setCurrentTemplateData:any) => {
  return setCurrentTemplateData(
    Object.keys(currentTemplateData).reduce(
      (o, key) => Object.assign(o, { [key]: "" }),
      {}
    )
  );
};

export default cleanData;
