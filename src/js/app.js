function Writer(inputContainer, outPutContainer) {
  const htmlWriter = document.querySelector(inputContainer);
  const htmlContainer = document.querySelector(outPutContainer);

  if (htmlWriter && htmlContainer) {
    htmlContainer.innerHTML = htmlWriter.textContent;

    htmlWriter.addEventListener('keyup', function (e) {
      const renderedCode = this.value;
      htmlContainer.innerHTML = renderedCode;
    });

    htmlWriter.oninput = function () {
      htmlWriter.style.height = '';
      htmlWriter.style.height = htmlWriter.scrollHeight + 'px';
    }
  }

}


Writer('.bg-c-w', '.bg-c-c');
Writer('.bg-nr-w', '.bg-nr-c');
Writer('.bg-f-w', '.bg-f-c');
Writer('.bg-ctr-w', '.bg-ctr-c');
Writer('.o-w', '.o-c');
Writer('.btn-w', '.btn-c');
Writer('.d-w', '.d-c');



var navTrigger = document.querySelector('.trigger');
var siteNav = document.querySelector('.site-nav');
var navSpinner = document.querySelector('.hamburger--spin');

navTrigger.addEventListener('click', function () {
  navSpinner.classList.toggle('is-active');
  siteNav.classList.toggle('is-active');
});