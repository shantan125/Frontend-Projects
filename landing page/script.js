function showMenu(menuSection) {
  var menuSections = document.getElementsByClassName("menu-section");
  for (var i = 0; i < menuSections.length; i++) {
    menuSections[i].style.display = "none";
  }
  document.getElementById(menuSection).style.display = "flex";

  // Prevent the default behavior of anchor links
  event.preventDefault();

  // Scroll to the selected menu section
  var yOffset = -70; // Adjust as needed
  var element = document.getElementById(menuSection);
  var y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
