// jshint esversion: 6

exports.getDate = function() {
  var option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date().toLocaleString('en-US', option);
};

exports.getDay = function() {
  let option = {
    weekday: 'long'
  };

  return new Date().toLocaleString('ko-KR', option);
};
