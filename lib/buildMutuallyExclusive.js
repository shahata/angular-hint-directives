module.exports = function(info, id, type) {
  var pair = ddLib.isMutExclusiveDir(info.error);
  var message = 'Angular attributes "'+info.error+'" and "'+pair+'" in '+type+ ' element'+id+
    ' should not be attributes together on the same HTML element';
  return message;
};