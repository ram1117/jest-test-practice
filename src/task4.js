function capitalize(str){
const words = str.split(' ');
const newArr = [];
words.forEach(word => {
  newArr.push(word.charAt(0).toUpperCase(0)+word.slice(1));
});
return newArr.join(' ');
}

module.exports = capitalize;