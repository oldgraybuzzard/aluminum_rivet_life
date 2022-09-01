var defaultText = "Search";
var searchBox = document.getElementById("search");
searchBox.value = defaultText;

searchBox.onfocus = fucntion() {
  if (this.value == defaultText) {

    this.value = "";

  }
}

searchBox.onblur = function() {
  if (this.value == "") {
    this.value = defaultText;
  }
}
