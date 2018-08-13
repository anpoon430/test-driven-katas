// const wrap = (str, num) => {
//   if (str.length === 0) return "";
//   let i = 0;
//   let result = "";
//   while (i < str.length) {
//     let line = str.slice(i, num + i);
//     let lastSpace = line.lastIndexOf(" ");
//     result += str.slice(i, lastSpace) + "\n";
//     i = lastSpace + 1;
//   }
//   return result;
// };

const wrap = (line, num) => {
  if (line.length <= num) return line;
  const indexOfBlank = line.lastIndexOf(" ", num);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = num;
    offset = 0;
  }
  return (
    line.substring(0, split) + "\n" + wrap(line.substring(split + offset), num)
  );
};

module.exports = wrap;
