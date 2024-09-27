const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    668: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    470: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

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
  function showMobileContent() {
    const container = document.querySelector('#accept_mobile_container');
    if (window.innerWidth < 768) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const gclid = urlParams.get('gclid');

      if (!container.querySelector('.accept')) {
        let mobileContent = `
          <div class="accept">
            <div class="accept_title">
              <h2>18 yaşında mısın?</h2>
            </div>
            <div class="accept_btns">
              <div class="accept_btn default_btn no_btn_accept">
                <a href="https://" class="mobile_content_btn">Hayir</a>
              </div>
              <div class="accept_btn default_btn yes_btn_accept">
                <a href="https://" class="mobile_content_btn">Evet</a>
              </div>
            </div>
          </div>`;

        container.innerHTML = mobileContent;
      }
    } else {
      container.innerHTML = '';
    }
  }

  showMobileContent();

  window.addEventListener('resize', showMobileContent);
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
