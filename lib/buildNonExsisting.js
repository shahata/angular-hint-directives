module.exports = function(info, id, type) {
  var message = ddLib.data.directiveTypes[info.directiveType].message+type+' element'+id+'. ';
  var error = (info.error.charAt(0) === '*') ? info.error.substring(1): info.error;
  message +='Found incorrect attribute "'+error+'" try "'+info.match+'".';
  return message;
};