function toggleMenu() {
  const nav = document.getElementsByClassName('topnav')[0];
  if (nav.className === 'topnav') {
    nav.className = 'topnav responsive';
  } else {
    nav.className = 'topnav';
  }
}
