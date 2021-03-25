$(function(){
    $('a[href^="#"]').click(function(){ //'a[href^="#"]'をクリックすると機能する関数定義
      var href= $(this).attr("href");   //クリックしたやつのhrefのurl部分を変数に代入
      var target = $(href == "#" || href == "" ? 'html' : href);  //hrefが「#」か「空欄」なら「html」を、違うなら（何か文字があるなら）href（上で取得したurl）をtargetに代入　？のやつは手前の比較演算が真なら前者、違うなら後者を選ぶような命令
      var position = target.offset().top;   //target要素とドキュメント一番上からの距離をpositionに代入
      $("html, body").animate({scrollTop:position}, 600, "swing"); //600msかけてアニメーションの動きをさせる
      return false;
    });
});

//jQueruの構文$('[ 属性 ^= "値" ]')
//href属性が "値" で始まる要素を取得する
//だから#から始まるやつを探してくれるらしい
//「^=」の部分は演算子のひとつ。


