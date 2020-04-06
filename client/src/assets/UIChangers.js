export const colorChanger = (category) => {
  if (category === "APP") {
    return "#ff6a6a";
  } else if (category === "WEBSITE") {
    return "#6a99ff";
  } else if (category === "UI-UX") {
    return "#ff6aeb";
  } else {
    return "#a1ff6a";
  }
};

export const headerImageChanger = (category) => {
  if (category === "APP") {
    return require("./img/app.jpg");
  } else if (category === "WEBSITE") {
    return require("./img/roman.jpg");
  } else if (category === "UI-UX") {
    return require("./img/kevin.jpg");
  } else {
    return require("./img/desktop.jpg");
  }
};
