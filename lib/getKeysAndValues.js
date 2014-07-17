module.exports = function(str) {
  var customDirectives = [], pairs = [];
  var matchScope = str.replace(/\n/g,'').match(/scope:\s*?{\s*.*['"]\s*}/);
  matchScope[0].match(/\w+\s*: ?['"][a-zA-Z=@]+['"]/g).map(function(str){
    var temp = str.match(/(\w+): ?['"](.+)['"]/);
    pairs.push({key:temp[1],value:temp[2]});
  });
  pairs.forEach(function(pair){
    var name = (pair.value === '=') || (pair.value === '@')? pair.key : pair.value.substring(1);
    customDirectives.push({directiveName: name , restrict:'A'});
  });
  return customDirectives;
};