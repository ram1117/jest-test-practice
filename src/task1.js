function stringLength(str){
  if(str.length<1) {
    throw new Error('String length less than 1');
  }
  if(str.length>10){
    throw new Error('String length greater than 10');
  }
  return str.length;
}

module.exports = stringLength;