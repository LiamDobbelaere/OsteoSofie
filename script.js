function toggleCTADialog(event) {
  event.preventDefault();

  document
    .getElementById("call-to-action-dialog")
    .classList.toggle("invisible");
}

function toggleNavDrawer(event) {
  if (["nav-drawer-mobile-content"].indexOf(event.target.id) === -1) {
    document.getElementById("nav-drawer-mobile").classList.toggle("invisible");
  }
}
