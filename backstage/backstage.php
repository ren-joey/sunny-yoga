<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>簡善琳瑜珈會館 Sunny Yoga</title>
    <link rel="icon" href="img/favicon.ico">

    <!--jQuery-->
    <script src="../common/jquery-3.1.1.min.js"></script>

    <!--jQueryCookie-->
    <script src="../common/jquery.cookie.js"></script>

    <!--Bootstrap-->
    <link href="../common/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../common/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" rel="stylesheet">

    <!--main-->
    <style>
        /*--global--*/
        body , html{
            font-family: "Lato","Helvetica Neue",sans-serif,Microsoft JhengHei !important;
            background-color: #fcfcfc;
            overflow-x: hidden;
        }

        .hr-12{
            width: 100%;
            height: 12px;
            clear: both;
        }

        .hr-30{
            width: 100%;
            height: 30px;
            clear: both;
        }
        .mb-30{
            margin-bottom: 30px;
        }

        /*--main container-*/
        .container{
            background-color: #ffffff;
        }
        .main-wrapper{
            padding-top: 20px;
        }
        .title-tw{
            color: #6a7ca4;
            font-size: 16px;
            line-height: 17px;
            display: inline-block;
            font-weight: 900;
        }
        .title-en{
            font-size: 12px;
            -webkit-transform:scale(0.83);
            color: #6a7ca4;
            display: inline-block;
            font-weight: 900;
        }
        .marquee-border{
            width: 100%;
            padding: 4px 15px;
            border-radius: 30px;
            border: 1px solid #98acd1;
            display: inline-block;
            overflow: hidden;
        }
        .marquee-text{
            width: 90%;
            display: inline-block;
            white-space: nowrap;
            box-sizing: border-box;
            color: #98acd1;
            animation: marquee 20s linear infinite;
        }
        .marquee-text:hover {
            animation-play-state: paused
        }
        @keyframes marquee {
            0%   { text-indent: 100% }
            100% { text-indent: -100% }
        }

        /*--news section--*/
        .news-sec-out{
            padding: 10px 0;
        }
        .news-sec{
            height: 200px;
            overflow: hidden;
        }
        .news-sec-text{
            position: relative;
            height: 100%;
            background-color: #98acd1;
            color: #ffffff;
            padding: 10px 15px;
        }
        .news-sec-img{
            height: 100%;
            background-color: #ffffff;
            color: #ffffff;
            background-size: cover !important;
        }
        .news-sec-img.i001{
            background: url("img/news-img-1.jpg") no-repeat;
        }
        .news-sec-img.i002{
            background: url("img/news-img-2.jpg") no-repeat;
        }
        .news-sec-img.i003{
            background: url("img/news-img-3.jpg") no-repeat;
        }
        .news-sec-img.i004{
            background: url("img/news-img-4.jpg") no-repeat;
        }
        .news-sec-img.i005{
            background: url("img/news-img-5.jpg") no-repeat;
        }
        .news-sec-img.i006{
            background: url("img/news-img-6.jpg") no-repeat;
        }
        .news-sec-flower{
            background: url("img/flower.png") no-repeat;
            width: 68px;
            height: 80px;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: opacity 1s;
            opacity: 0;
        }
        .news-sec-flower.opacity-on{
            opacity: 0.5;
        }
        .news-sec-title{
            font-size: 18px;
            padding: 8px 0;
            font-weight: 900px;
        }
        .news-sec-subtitle{
            font-size: 12px;
        }
        .news-sec-more-btn{
            border: 1px solid #ffffff;
            color: #ffffff;
            font-size: 10px;
            padding: 3px 6px;
            position: absolute;
            right: 20px;
            bottom: 20px;
            transform:scale(1);
            transition: all 0.3s;
            cursor: pointer;
        }
        .news-sec-more-btn.bigger{
            transform:scale(1.5);
        }

        /*--about sunny yoga--*/

        .asy-text-style{
            font-size: 12px;
            color: #6a7ca4;
            line-height: 24px;
        }

        .asy-horiz-img{
            background-image: url("img/asy-horiz.png");
            background-position: right center;
            background-repeat: no-repeat;
            height: 36px;
        }

        /*--footer--*/
        .sy-footer-bg{
            background-color: #6a7ca4;
            padding-bottom: 10px;
        }
        .sy-footer{
            border-bottom: 1px solid #ffffff;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
            background-color: #98acd1;
            display: table;
            width: 100%;
            padding: 10px 0;
        }
        .sy-footer-text{
            text-align: center;
            color: #ffffff;
            font-size: 12px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
            transform: scale(0.87);
        }

        /*--AD animate--*/
        #animation_container{
            position: relative;
            left: 50%;
            margin-left: -1024px;
        }

        /*--fancybox--*/
        #hidden-content-a , #hidden-content-b{
            display: none;
        }

        .hidden-content-a-header{
            position: relative;
            width: 100%;
            background-color: #2b669a;
            color: white;
            padding: 10px 20px;
        }
        .like-icon{
            background-image: url("img/like_icon.png");
            width: 71px;
            height: 59px;
            position: absolute;
            right: -10px;
            top: 40px;
            transform: rotate(-15deg);
        }
        .fb-link{
            background-image: url("img/fb_link_btn.png");
            width: 241px;
            height: 44px;
            cursor: pointer;
        }
    </style>

</head>
<body onload="init();">

<div class="fakeLoader"></div>
<div id="temp-bg" style="position: absolute;width: 100%;height: 100%;background-color: #fcfcfc;z-index: 998"></div>

<!--onclick href-->
<script>
    function hrefTo(link) {
        var link_url = link;
        window.open(link_url);
    }
</script>

<!--header-->
<div class="header-bg">
    <div class="header">
        <div class="brand-logo" style="padding-left: 50px; padding-top: 10px;" onclick="link_to(this)" datasrc="index.html">
            <img width="auto" height="50" src="img/logo.jpg">
        </div>
    </div>
</div>

<!--Main Contain-->
<div class="container">
    <div class="main-wrapper mb-30">
        <div class="row">
            <div class="col-md-12">
                <div style="display: inline-block; width: 100%;">
                    <div class="side-left">
                        <img style="margin-right: 5px;" src="img/title-icon.jpg">
                    </div>
                    <div class="side-left">
                        <div class="title-tw">最新消息<br>
                            <div class="title-en">NEWS</div>
                        </div>
                    </div>
                    <div class="side-left" style="margin-left: 20px; width: 80%; display: none;">
                        <div class="marquee-border">　
                            <div class="marquee-text">跑馬燈內容顯示</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hr-12"></div>
            <div class="col-md-6">
                <div class="news-sec-out">
                    <div class="news-sec">
                        <div class="side-left news-sec-text" style="width: 40%; margin: 0;">
                            <div class="news-sec-title">
                                FACEBOOK 打卡按讚好優惠
                            </div>
                            <div class="news-sec-subtitle">
                                即日起，新生打卡按讚分享，即可免費試上體驗課程一次唷！！<br>
                                趕快進來聊解詳情吧~
                            </div>
                            <a data-fancybox data-src="#hidden-content-a" href="javascript:;"><div class="news-sec-more-btn" >more+</div></a>
                            <div class="news-sec-flower"></div>
                        </div>
                        <div class="side-right news-sec-img i001" style="width: 60%;"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="news-sec-out">
                    <div class="news-sec">
                        <div class="side-left news-sec-text" style="width: 40%; margin: 0;">
                            <div class="news-sec-title">
                                暑期動一夏特別活動
                            </div>
                            <div class="news-sec-subtitle">
                                暑期特惠活動出來囉～想趁暑期雕塑體態的會員朋友們千萬不要錯過啦！
                            </div>
                            <a data-fancybox data-src="#hidden-content-b" href="javascript:;"><div class="news-sec-more-btn">more+</div></a>
                            <div class="news-sec-flower"></div>
                        </div>
                        <div class="side-right news-sec-img i002" style="width: 60%;"></div>
                    </div>
                </div>
            </div>
            <div class="hr-30"></div>
        </div>
    </div>

    <div class="about-sunnyyoga">
        <div class="row mb-30">
            <div class="col-xs-3">
                <div class="side-left">
                    <img style="margin-right: 5px;" src="img/title-icon-2.png">
                </div>
                <div class="side-left">
                    <div class="title-tw">簡善琳的故事<br>
                        <div class="title-en">Story</div>
                    </div>
                </div>
            </div>
            <div class="col-xs-9 asy-horiz-img" style="opacity: 0.5;"></div>
        </div>

        <div class="row mb-30">
            <div class="col-md-8">
                <div class="asy-text-style">
                    簡善琳瑜珈養生會館創辦人簡善琳老師，在三十幾年前瑜珈風氣尚未盛行的少女時代即對它產生濃厚興趣，少時體質贏弱敏感也因瑜珈而獲得顯著改善，所以立志貢獻所學藉由瑜珈來達成幫助國人身體健康的願望，於是在1986年建立個人工作室—筱苑瑜珈於高雄市文化中心附近，當時可用慘淡經營四字形容，但是善琳老師憑著執著、奉獻的精神，不斷到國外四處進修研究，並有感當時國外瑜珈教室舒適寬敞的環境，從此決心要為國人學習瑜珈的環境提升、開闢更精緻的環境而努力，1990年於光華路創立簡善琳女子瑜珈補習班，以當時之規模而言堪稱國內最精緻之複合式瑜珈教室，所以無論國內、外瑜珈同好交流均指名參觀。
                    <br><br>
                    近幾年來經由媒體報導，瑜珈教室與補習班更加風行，許多善琳老師培植的老師紛紛成立瑜珈教室貢獻所學，善琳老師更是覺得有責任扮演火車頭的角色，故毅然決然導入更多新觀念之現代國際瑜珈課程，依學員不同需求、不同程度分時分段上課，2002年正式引入CIS 企業系統並更名為簡善琳瑜珈養生會館，2004年創立簡善琳瑜珈養生會館明誠館，造福北高雄地區學習瑜珈人士，而明誠館創立至今二年有餘，雖然期間有許多同業在此設館開業，但依然是該地區首屈一指，最具規模與觀念的複合式瑜珈教室。
                    <br><br>
                    2005年為服務其他地區學員，於12月成立簡善琳瑜珈養生會館民族館，該館陳設及設備、品質號稱南台灣最優，讓對瑜珈教室與環境有一定要求之學員趨之若鶩，更承蒙高雄各界大、中型企業選定為員工福利課程及國際名牌Dior…招待頂級客戶之上課場所。2006年05月因學員反應熱烈成立簡善琳瑜珈養生會館大樂教室，從此也奠定簡善琳瑜珈養生會館服務南台灣愛好瑜珈人士的首選品牌。
                    <br><br>
                    簡善琳瑜珈養生會館除了硬體設備在會館環境上建立最精緻、最優質的多功能複式場所外，為避免其他瑜珈教室之師資情況（即投入教學工作則無力再學習進修之窘境），對於師資的培訓與要求更是不遺餘力，所有師資不分資深資淺每個月都要接受新的瑜珈課程訓練，期盼與國際接軌，隨時給予學員最新的瑜珈資訊與知識。
                </div>
                <div class="asy-text-style" style="display: none;">
                    瑜伽（Yoga）是一個通過提升意識，幫助人類充分發揮潛能的體系。瑜伽姿勢運用古老而易於掌握的技巧，改善人們生理、心理、情感和精神方面的能力，是一種達到身體、心靈與精神和諧統一的運動方式。古印度人更相信人可以與天合一，他們以不同的瑜伽修煉方法融入日常生活而奉行不渝：道德、忘我的動作、穩定的頭腦、宗教性的責任、無欲無求、冥想和宇宙的自然和創造。<br><br>
                    瑜伽已有數千年的歷史，公元前300年的著名瑜伽大聖哲波顛闍利（Patañjali）將所有口耳相傳的經典，集結而成了《瑜伽經》（瑜伽的重要理論經典著作），印度瑜伽因此而有所依據。瑜伽行法正式訂為八支體系。波顛闍利是一個對瑜伽有巨大貢獻的聖人。《瑜伽經》，彙整了瑜伽所有的理論和知識，形成完整的理論體系和實踐系統。在這部著作里，他闡述了瑜伽的定義、 瑜伽的內容 、瑜伽給身體內部帶來的變化等等。在波顛闍利之前，瑜伽已經有了很長的實踐期，但是沒有任何人給瑜伽一個系統的解釋，波顛闍利開創了一個完整的瑜伽體系。所以波顛闍利被尊為瑜伽之祖。嚴格來說，瑜伽是一種身心鍛鍊的統稱，好比中國講返本歸源、導引等等，瑜伽在印度也是一個身心修練的通泛名詞。有一段時期進行各種身心修練的人不管任何派別，都被尊稱為瑜伽士（Yogi，女性為Yoginī）。<br><br>
                    古印度的宗教哲學派別林立，不過有三本著作被大多數印度人尊為經典，一是「奧義書」，二為「薄伽梵歌」，三「瑜伽經」，古印度婆羅門教提倡「梵我合一」理論，由於印度教的普及，加上另一位有名的瑜伽祖師同時也是印度教祖師商羯羅的影響，這三本書也被往後大多數的瑜伽士奉為經典。瑜伽術本是一種身心修持術，表面上看似與宗教無關，也可以說古印度任何宗教都採用。它的最高目的是實現人的一切可能，從精神（小我）與自然（梵，大我，最高意識）的合一（即「梵我合一」），一直到成佛成仙，或者其他教派所說的最高目的，瑜伽術都是被認可的途徑之一。<br><br>
                    印度古語有云：世上有兩種超越太陽軌道（獲得永恆）的方式，一是在瑜伽中離棄世間；二是在戰場上委棄身體。這其實與中國傳統價值觀有所契合，例如道教的「功德成神」說，與儒家的「忠烈祠」信仰。<br><br>
                </div>
            </div>
            <div class="col-md-4">
                <img src="img/asy-photo.jpg" width="100%" height="auto">
            </div>
        </div>
    </div>
</div>

<!--Footer-->
<div class="sy-footer-bg">
    <div class="sy-footer">
        <div class="sy-footer-text">
            Copyright © 2017 Sunny Yoga Inc. All rights reserved<br>本網站由簡善琳瑜珈版權所有
        </div>
    </div>
</div>

<!--jQueryColor-->
<script src="common/jquery.color.js"></script>

<!--Bootstrap-->
<script src="common/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<script src="common/bootstrap-3.3.7-dist/js/npm.js"></script>

<!--fancybox-->
<script src="common/fancybox-3.0/jquery.fancybox.min.js"></script>

<script>
    function link_to(e){
        var link_src = $(e).attr('datasrc');
        $(location).attr('href',link_src);
    }

    $(function(){

        $(' .marquee-text').animate({right:'1000px'},10000);

        $(' .menu-btn').on({mouseenter:function(){
            var this_icon = $(this).find('.btn-icon');
            this_icon.addClass('rotate-on');
        },mouseleave:function(){
            var this_icon = $(this).find('.btn-icon');
            this_icon.removeClass('rotate-on');
        }});

        $('.news-sec').on({mouseenter:function(event){
            event.stopPropagation();
            var this_over = $(this),
                this_left = this_over.find('.side-left'),
                this_right = this_over.find('.side-right'),
                this_btn = this_left.find('.news-sec-more-btn'),
                this_flower = $(this).find('.news-sec-flower');

            this_flower.addClass('opacity-on');
            this_left.stop(true,false).animate({width:'50%',backgroundColor:'#6a7ca4'},500);
            this_right.stop(true,false).animate({width:'50%'},500);
            this_btn.addClass('bigger').stop(true,false).animate({right:'30px',backgroundColor:'#98acd1'},500);
        },mouseleave:function(event){
            event.stopPropagation();
            var this_over = $(this),
                this_left = this_over.find('.side-left'),
                this_right = this_over.find('.side-right'),
                this_btn = this_left.find('.news-sec-more-btn'),
                this_flower = $(this).find('.news-sec-flower');

            this_flower.removeClass('opacity-on');
            this_left.stop(true,false).animate({width:'40%',backgroundColor:'#98acd1'},500);
            this_right.stop(true,false).animate({'width':'60%'},500);
            this_btn.removeClass('bigger').stop(true,false).animate({right:'20px',backgroundColor:'rgba(0,0,0,0)'},500);
        }});
    })
</script>

</body>
</html>