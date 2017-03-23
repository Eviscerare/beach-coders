function toggleMenu() {
  const nav = document.getElementsByClassName('topnav')[0];
  if (nav.className === 'topnav') {
    nav.className = 'topnav responsive';
  } else {
    nav.className = 'topnav';
  }
}

window.addEventListener('scroll', function() {
  const stop = window.pageYOffset;
  const header = document.getElementById('header');
  if (stop > 100) {
    header.style.background = '#FFFFFF';
    header.style.boxShadow = '1px 1px 5px #444444'
  } else {
    header.style.background = '#e5e5e5'
    header.style.boxShadow = 'none'
  }
});