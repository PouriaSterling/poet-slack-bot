// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = function(robot) {
    return robot.hear(/test-hubot (.*)/i, function(res) {
      var echo;
      echo = res.match[1];
      return res.send("Hi! How are you? " + echo);
    });
  };

}).call(this);