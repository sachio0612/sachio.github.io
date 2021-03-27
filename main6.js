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
  });