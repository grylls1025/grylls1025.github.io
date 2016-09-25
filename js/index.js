/**
 * Created by 禹轩1025 on 2016/9/7.
 */
$(document).ready(function(){


//用户设备判断
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){

        //pc端代码
            $("<link>")
                .attr({ rel: "stylesheet",
                    type: "text/css",
                    href: "style/index.css"
                })
                .appendTo("head");
             //切换壁纸
            $('#bizhi').click(function(){
                string='url(images/p'+Math.floor(Math.random()*7+1)+'.jpg)';
                $('body').css('background-image',string);
            });
            $('#bbb').click(function(){
                string='url(images/p'+Math.floor(Math.random()*7+1)+'.jpg)';
                $('body').css('background-image',string);
            });

            //首页移入效果
            $('#face0').animate({margin:'50px auto'},2000);

            $('#domo #domo1 #tcs').attr('href','snake-pc.html');


        //移动端代码
        }
        else {
            $("<link>")
                .attr({ rel: "stylesheet",
                    type: "text/css",
                    href: "style/index.moblie.css"
                })
                .appendTo("head");
            $("<link>")
                .attr({ rel: "stylesheet",
                    type: "text/css",
                    href: "style/domo.moblie.css"
                })
                .appendTo("head");

            //切换壁纸
            $('#bizhi').click(function(){
                string='url(images/h'+Math.floor(Math.random()*3+1)+'.jpg)';
                $('body').css('background-image',string);
            });
            $('#bbb').click(function(){
                string='url(images/h'+Math.floor(Math.random()*3+1)+'.jpg)';
                $('body').css('background-image',string);
            });

            //设置默认壁纸
            $('body').css({'background-image':'url(images/h1.jpg)'});

            //首页移入效果
            $('#face0').animate({margin:'80px auto'},2000);



        }
    }
    browserRedirect();

//兼容pc和移动端

    //导航栏垂直居中
    var navh=$('#head #nav li').height();
    $('#head #nav li').height(navh-3);
    $('#head #nav li').css('line-height',navh+'px');

    //头部垂直居中兼容
    var small_h=$("#smallface").parent().height();
    small_h/=2;
    small_h-=20;
    $('#smallface').css('margin-top',small_h+'px');
    var p=$("#head p").height();
    p=small_h+20-p/2;
    $('#head p').css('margin-top',p+'px');


    //头像移入切换
    $('#face1').mouseover(function(){
        $('#face1').fadeOut("slow");
    });
    $('#face').mouseout(function(){
        $('#face1').fadeIn("slow");
    });

    //首页动画移动
    $('#login dl').fadeIn(800);
    $('#register dl').fadeIn(800);
    $('#board1').fadeIn(800);
    $('#domo1').fadeIn(800);

    //首页信息每句逐渐显示
    setTimeout(function(){
        $('#face0 h5#h1').fadeIn(500);
    },1500);
    setTimeout(function(){
        $('#face0 h5#h2').fadeIn(500);
    },2000);
    setTimeout(function(){
        $('#face0 h5#h3').fadeIn(500);
    },2500);
    setTimeout(function(){
        $('#face0 h5#h4').fadeIn(500);
    },3000);
    setTimeout(function(){
        $('#face0 h5#h5').fadeIn(500);
    },3500);
    setTimeout(function(){
        $('#face0 h3').animate({width:'100%'},700,function(){
            $('#face0 h3').html('为渴望而战');

        });
    },1000);

    //切换壁纸按钮移入移出显示隐藏
    $('#head').mouseover(function(){
        $('#head #bizhi').css('opacity',1);
    });
    $('#head #bizhi').mouseout(function(){
        $('#head #bizhi').css('opacity',0);
    });
    
    // //简历弹窗
    // $('#imform h5 a').click(function(){
    //    alert('就不给你看。。。');
    // });
    // $('#head p').click(function(){
    //     alert('就不给你看。。。');
    // });
    //





});
