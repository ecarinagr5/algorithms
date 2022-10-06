let word = "Capital FUND";
let finalWord = word?.toLocaleLowerCase().split(" ");
let capatilizeWord = [];

if (finalWord.length > 0) {
  finalWord?.forEach((item) => {
    capatilizeWord?.push(item?.charAt(0)?.toUpperCase() + item?.slice(1));
  });
}
finalWord = capatilizeWord?.toString()?.replace(",", " ");
console.log("word", finalWord);
