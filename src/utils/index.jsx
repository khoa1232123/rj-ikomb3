export const formatTime = (time) => {
  const t = new Date(time * 1000);
  t.getMinutes();
  t.getSeconds();

  let convertTime = t.getMinutes();

  if (t.getSeconds() > 9) {
    convertTime += ":" + t.getSeconds();
  } else {
    convertTime += ":0" + t.getSeconds();
  }
  return convertTime;
};
