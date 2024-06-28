
function detail(id){
  location.href = `detail.html?id=${id}`;
}
function url(){
  location.href = ('https://www.hay88.one/?inviteCode=8325612');
}
$(document).ready(function(){
  const FunVisible = () => {
    if (window.pageYOffset > 750) {
      $("header").addClass("is-sticky");
    } else {
      $("header").removeClass("is-sticky");
    }
  };
  window.addEventListener("scroll", FunVisible);
  const swiper = new Swiper('#swiper1', {
      loop: true,
      spaceBetween: 20,
      pagination: {
        el: '#swiper-pagination1',
      },
      // breakpoints: {
      //   640: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //   },
      // },

      navigation: {
        nextEl: '#swiper-button-next1',
        prevEl: '#swiper-button-prev1',
      },
      autoplay: {
        delay: 3000,
      }
    
    });


    $(".content p img").closest('p').append(`<img class="loadingoverlay" src="./assets/images/loading-buffering.gif" alt="">`);
    $(".content p img").closest('p').addClass("relative");

    $(".content_left .grid-template .shadow-lg").addClass("relative");
    $(".content_left .grid-template .shadow-lg .cursor-pointer").append(`<img class="loadingoverlay" src="./assets/images/loading-buffering.gif" alt="">`);



  const header = `
    <div class="bg-[#21232a] py-4 hidden md:block">
      <div class="container mx-auto">
        <div class="flex gap-5 justify-end">
          <button class="btn py-1 px-5" onclick="url()">ĐĂNG NHẬP</button>
          <button class="btn btn1 py-1 px-5" onclick="url()">ĐĂNG KÝ</button>
        </div>
      </div>
    </div>
    <div class="bg-[#ffb700]">
      <div class="container mx-auto py-2">
        <div class="flex items-center justify-between md:justify-start gap-5 md:gap-16">
        
          <div class="menu-icon md:hidden duration-500">
            <label class="hamburger">
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>

          <div class="max-w-40 md:max-w-32 ">
          <a href="index.html">
            <img class="w-full" src="./assets/images/LOGO_FIVE888.png" alt=""></a>
          </div>

          <ul class=" items-center gap-7  relative  w-full flex-wrap h-auto hidden md:flex  *:flex *:items-center *:p-4*:text-gray-900 *:font-bold *:text-2xl         *:uppercase *:relative">
            
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="game-bai-doi-thuong.html">
                <img class="h-8 w-8 inline-block mr-2" src="./assets/images/icon-songbai-b.svg" alt="" />
                <span class="tracking-wider">FIVE888</span>
              </a>
            </li>
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="huong-dan-five888.html">
                <span class="tracking-wider">HƯỚNG DẪN</span>
              </a>
            </li>
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="the-thao.html">
                <img class="h-8 w-8 inline-block mr-2" src="./assets/images/icon-sport-b.svg" alt="" />
                <span class="tracking-wider">THỂ THAO</span>
              </a>
            </li>
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="tro-choi-five888.html">
                <img class="h-8 w-8 inline-block mr-2" src="./assets/images/icon-game-b.svg" alt="" />
                <span class="tracking-wider">TRÒ CHƠI</span>
              </a>
            </li>
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="game-bai-five888.html">
                <img class="h-8 w-8 inline-block mr-2" src="./assets/images/icon-gamebai-b.svg" alt="" />
                <span class="tracking-wider">GAME BÀI</span>
              </a>
            </li>
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="./lo-de-online-five888.html">
                <span class="tracking-wider">LÔ ĐỀ</span>
              </a>
            </li>
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="soi-keo.html">
                <span class="tracking-wider">SOI KÈO</span>
              </a>
            </li>
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="euro-2024.html">
                <span class="tracking-wider">EURO 2024</span>
              </a>
            </li>
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="khuyen-mai-five888.html">
                <img class="h-8 w-8 inline-block mr-2" src="./assets/images/icon-trading-b.svg" alt="" />
                <span class="tracking-wider">KHUYẾN MÃI</span>
              </a>
            </li>
            <li class="hover:text-gray-700">
              <a class="flex items-center" href="tin-five888.html">
                <img class="h-8 w-8 inline-block mr-2" src="./assets/images/icon-sukien-b.svg" alt="" />
                <span class="tracking-wider">TIN TỨC</span>
              </a>
            </li>
            
          </ul>

          <div class="flex gap-5 justify-end md:hidden">
            <button class="btn py-4 px-5" onclick="url()">ĐĂNG NHẬP</button>
            <button class="btn btn1 py-4 px-5" onclick="url()">ĐĂNG KÝ</button>
          </div>


        </div>
      </div>
    </div>


    <!-- Side-bar mobile menu -->
    <div class="side-menu-mobile fixed top-0 -translate-x-full z-[1000] overflow-y-hidden transition-transform duration-500 ">
      <ul class="w-[60vw] bg-[#f8f8f8] h-screen">
        <li class="game-bai-doi-thuong.html">
          <a href="index.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">FIVE888</span>
          </a>
        </li>
        <li class="">
          <a  href="huong-dan-five888.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200">
            <span class="ml-3">HƯỚNG DẪN</span>
          </a>
        </li>
        <li class="">
          <a
            href="./the-thao.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">THỂ THAO</span>
          </a>
        </li>
        <li class="">
          <a
            href="./tro-choi-five888.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">TRÒ CHƠI</span>
          </a>
        </li>
        <li class="./game-bai-five888.html">
          <a
            href="tin tuc.html"
            class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200"
          >
            <span class="ml-3">GAME BÀI</span>
          </a>
        </li>
        <li class="">
          <a  href="./lo-de-online-five888.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200" >
            <span class="ml-3">LÔ ĐỀ</span>
          </a>
        </li>
        <li class="">
          <a  href="soi-keo.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200" >
            <span class="ml-3">SOI KÈO</span>
          </a>
        </li>
        <li class="">
          <a  href="euro-2024.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200" >
            <span class="ml-3">EURO 2024</span>
          </a>
        </li>
        <li class="">
          <a  href="khuyen-mai-five888.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200" >
            <span class="ml-3">KHUYẾN MÃI</span>
          </a>
        </li>
        <li class="">
          <a  href="tin-five888.html" class="flex items-center px-5 py-5 font-semibold text-2xl text-gray-900 rounded-lg hover:bg-gray-200" >
            <span class="ml-3">TIN TỨC</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="bg-[#0000006b] w-screen h-screen absolute top-0 z-30 hidden"  id="background_sidebar">
      <div class="float-right mt-14 mr-8">
      <button class="btnclose">
        <span class="X"></span>
        <span class="Y"></span>
        <div class="close">Close</div>
      </button>
    </div>
      

    </div>
    <!-- End Side bar mobile -->

  `;
  $("#header").html(header);
    const footer = `
        <div class="bg-[#000000]">
      <div class="container mx-auto py-10">
        <div class="flex items-center justify-center gap-8 flex-wrap *:text-xl *:font-medium *:text-gray-400 mb-5">
          <a href="index.html" class=" hover:text-gray-200">FIVE888</a>
          <a href="huong-dan-five888.html" class=" hover:text-gray-200">HƯỚNG DẪN</a>
          <a href="the-thao.html" class=" hover:text-gray-200">THỂ THAO</a>
          <a href="tro-choi-five888.html" class=" hover:text-gray-200">TRÒ CHƠI</a>
          <a href="game-bai-five888.html" class=" hover:text-gray-200">GAME BÀI</a>
          <a href="lo-de-online-five888.html" class=" hover:text-gray-200">LÔ ĐỀ</a>
          <a href="soi-keo.html" class=" hover:text-gray-200">SOI KÈO</a>
          <a href="euro-2024.html" class=" hover:text-gray-200">EURO 2024</a>
          <a href="khuyen-mai-five888.html" class=" hover:text-gray-200">KHUYẾN MÃI</a>
          <a href="tin-five888.html" class=" hover:text-gray-200">TIN TỨC</a>
        </div>
        <p class="text-gray-400 text-center">Copyright 2024 © <span class="font-semibold"> Bản quyền thuộc về Five888.live</span></p>
      </div>
    </div>
    `;

  $("#footer").html(footer);
  const backtotop = `<button class="Btn-backtotop1 ">
          <svg class="Btn-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
      if ($(window).scrollTop() > 250) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
  });
  btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "600");
  }); 
  const content_right = `
            <h3 class="text-[1.7rem] font-bold mb-10">CHUYÊN MỤC</h3>
            <div class="link *:mb-3">
                <h3 class="text-[1.7rem]"><a href="euro-2024.html" class="text-[#df3333] hover:text-gray-700 font-normal"  id="menu_link">Euro 2024</a><span class="text-gray-700"> (8)</span> </h3>
                <hr class="border-t border-gray-200">
            </div>
            <div class="link *:mb-3">
                <h3 class="text-[1.7rem]"><a href="game-bai-five888.html" class="text-[#df3333] hover:text-gray-700 font-normal" id="menu_link">GAME BÀI</a><span class="text-gray-700"> (2)</span> </h3>
                <hr class="border-t border-gray-200">
            </div>
            <div class="link *:mb-3">
                <h3 class="text-[1.7rem]"><a href="huong-dan-five888.html" class="text-[#df3333] hover:text-gray-700 font-normal" id="menu_link">HƯỚNG DẪN</a> <span class="text-gray-700"> (6)</span></h3>
                <hr class="border-t border-gray-200">
            </div>
            <div class="link *:mb-3">
                <h3 class="text-[1.7rem]"><a href="./khuyen-mai-five888.html" class="text-[#df3333] hover:text-gray-700 font-normal" id="menu_link">KHUYẾN MÃI</a><span class="text-gray-700"> (1)</span></h3>
                <hr class="border-t border-gray-200">
            </div>
            <div class="link *:mb-3">
                <h3 class="text-[1.7rem]"><a href="./lo-de-online-five888.html" class="text-[#df3333] hover:text-gray-700 font-normal" id="menu_link">LÔ ĐỀ</a><span class="text-gray-700"> (3)</span> </h3>
                <hr class="border-t border-gray-200">
            </div>
            <div class="link *:mb-3">
                <h3 class="text-[1.7rem]"><a href="./soi-keo.html" class="text-[#df3333] hover:text-gray-700 font-normal" id="menu_link">SOI KÈO</a><span class="text-gray-700"> (6)</span> </h3>
                <hr class="border-t border-gray-200">
            </div>
            <div class="link *:mb-3">
                <h3 class="text-[1.7rem]"><a href="./the-thao.html" class="text-[#df3333] hover:text-gray-700 font-normal" id="menu_link">THỂ THAO</a> <span class="text-gray-700"> (6)</span> </h3>
                <hr class="border-t border-gray-200">
            </div>
            <div class="link *:mb-3">
                <h3 class="text-[1.7rem]"><a href="./tin-five888.html" class="text-[#df3333] hover:text-gray-700 font-normal" id="menu_link">TIN FIVE888</a> <span class="text-gray-700"> (6)</span> </h3>
                <hr class="border-t border-gray-200">
            </div>
            <div class="link *:mb-3">
                <h3 class="text-[1.7rem]"><a href="./tro-choi-five888.html" class="text-[#df3333] hover:text-gray-700 font-normal" id="menu_link">TRÒ CHƠI</a> <span class="text-gray-700"> (6)</span> </h3>
                <hr class="border-t border-gray-200">
            </div>`;
  $("#content_right").html(content_right);


  // $('.header2  ul.items-center > li').each(function() {
  //   a = $(this).find(".tittle_navbar").text();
    
  //   if(active == a){
      
  //     $(this).addClass('B');
  //   }
  // });

  $("#content_right .link").each(function(){
    c = $(this).find("#menu_link").text();
    if(active == c){
      $(this).find("#menu_link").addClass("text-gray-900");
      
    }
    
    
  });


  $(".menu-icon").on("click", function () {
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
        $("#background_sidebar").addClass("hidden");
    }
    else{
        $(this).addClass("active");
        $(".side-menu-mobile").removeClass("-translate-x-full");
        $("#background_sidebar").removeClass("hidden");
    }
  });
  $(document).on("click", function (event) {
      if (!$(event.target).closest(".side-menu-mobile").length && !$(event.target).closest(".menu-icon").length ) {
        $(".menu-icon").removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
        $("#background_sidebar").addClass("hidden");
      }
    });
    $(".icon-dropdown-side-menu-mobile").on("click", function(){
        $(this).toggleClass("rotate-180");
        $(this).closest("li").find('ul').toggleClass('active');
    })

    $('#showloading').delay(500).queue(function(next) {
      $(this).addClass('hidden');
      next();
    });

});

