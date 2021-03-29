$(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $('.toggle_btn').on('click', function() {//toggle_btnをクリックしたときの関数定義（onはscrollやhoverとも一緒に使える）
      if ($('#header').hasClass('open')) {   //もし#headerがopenクラスを持っているなら
        $('#header').removeClass('open');    //openクラスを外す
      } else {                               //openクラス持ってないなら
        $('#header').addClass('open');       //openクラスつける
      }
    });
  
    $('#mask').on('click', function() {      //#maskがクリックされたときの関数
      $('#header').removeClass('open');      //#headerはopenクラスを外す
    });

    /*=================================================
    スムーススクロール
    ===================================================*/
    $('a[href^="#"]').click(function(){
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, 600, "swing");
      return false;
    });

    /*=================================================
    スクロール時の画像フェード表示
    ===================================================*/
    $(window).scroll(function(){            //画面をスクロールしたときの関数
      $('.fadein').each(function(){         //fadeinクラスに対して繰り返し処理する
        var targetElement = $(this).offset().top;   //fadeinからtopまでの高さを代入
        var scroll = $(window).scrollTop();         //スクロールの座標代入
        var windowHeight = $(window).height();      //画面のサイズ代入
        if (scroll > targetElement - windowHeight + 200){ //もしスクロール量＞fadeinからtopまでの高さー画面の高さ＋２００なら
          $(this).css('opacity','1');               //透明度MAXにして表示
          $(this).css('transform','translateY(0)'); //Y座標0にする
        }
      });
    });
    $('.slick-area').slick({
      autoplay: true, //「オプション名: 値」の形式で書く
      dots: true, //複数書く場合は「,」でつなぐ
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

});
