$().ready(() => {
  const signupContainer = $('.signup-container');
  const loginContainer = $('.login-container');
  const signupSwap = $('.signup-swap');
  const loginSwap = $('.login-swap');
  $('.swap-button').on('click', toggleForms);

  function toggleForms() {
    signupContainer.toggle();
    loginContainer.toggle();
    signupSwap.toggle();
    loginSwap.toggle();
  }
});
