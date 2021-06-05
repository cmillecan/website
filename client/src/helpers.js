export const contentToMinutes = (content) => {
  return Math.floor(content.split(" ").length / 200) || 1;
};
