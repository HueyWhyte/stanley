export const colorChanger = (category) => {
  if (category === "APP") {
    return "#ff6a6a";
  } else if (category === "WEBSITE") {
    return "#6a99ff";
  } else if (category === "UI/UX") {
    return "#ff6aeb";
  } else {
    return "#a1ff6a";
  }
};

export const headerImageChanger = (category) => {
  if (category === "APP") {
    return "https://i.ibb.co/1qSHkQd/appmobileapp.jpg";
  } else if (category === "WEBSITE") {
    return "https://i.ibb.co/5Kd9pNg/Art-Tutor-Grid-Pic-1.jpg";
  } else if (category === "UI/UX") {
    return "https://i.ibb.co/cYS8ppZ/Art-Tutor-Grid-Pic.jpg";
  } else {
    return "https://i.ibb.co/Lh8xjVC/Art-Tutor-Grid-Pic-2.jpg";
  }
};
