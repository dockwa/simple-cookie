var Cookie = {

  set: function(name, value, minutes) {
    var path = arguments.length <= 3 || arguments[3] === undefined ? "/" : arguments[3];

    var expires = "";
    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=" + path;
  },

  get: function(name) {
    var name = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return;
  },

  remove: function(name) {
    this.set(name, "", -100);
  },

  exists: function(name) {
    return typeof this.get(name) !== "undefined";
  }

}
