const linkYes = `https://amazon.pl/?vote=yes`; //здесь нужно водить линки
const linkNo = `https://amazon.pl/?vote=no`; //здесь нужно водить линки



// burger menu
const open_btn = document.querySelector('.open_btn');
const mobile_links = document.querySelector('.mobile_links');
const close_btn = document.querySelector('.close_btn');

open_btn.addEventListener('click', () => {
  mobile_links.style.right = '0px';
});

close_btn.addEventListener('click', () => {
  mobile_links.style.right = '-100%';
});

// header scrolled
const header = document.querySelector('#header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// coockie
document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookieBanner').style.display = 'block';
  }
  document
    .getElementById('acceptCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookiesAccepted', 'true');
      document.getElementById('cookieBanner').style.display = 'none';
    });
});

// only_mobile container
window.addEventListener('load', function () {
  const mobile_content_no = document.querySelector('#mobile_content_no');
  const mobile_content_yes = document.querySelector('#mobile_content_yes');
  const container = document.querySelector('#accept_mobile_container');

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const gclid = urlParams.get('gclid');

  mobile_content_no.href = linkNo + gclid;
  mobile_content_yes.href = linkYes + gclid;
});

// coockie

window.addEventListener('load', function () {
  const cookieBanner = document.getElementById('cookieBanner');

  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'block';
  }

  document
    .getElementById('acceptCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
});
