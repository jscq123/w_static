/* 
* @Author: anchen
* @Date:   2015-10-13 12:00:10
* @Last Modified by:   anchen
* @Last Modified time: 2015-10-13 12:04:01
*/

$(document).ready(function(){
     // 布局自适应
            var htm = $("html");
            var htmWid = htm.width();
            var scale = 320/40;
            function initil() {
                if(htmWid <= 320) {
                    htm.css({
                        "font-size": "40px"
                    });
                }else {
                    htm.css({
                        "font-size": htmWid / scale + "px" 
                    })
                }
            }initil()
            $(window).resize(initil);


            var width = $(window).width();//取得浏览器的宽
            var icon = $(".con")
            var w = width / 640;
            var uit = 196 * w;
            
            icon.width(568 * w);
            icon.css("top",uit);
            
            $("dl").css("top", 545 * w);
            $(".btn").css("top", 775 * w);
            $(".con").css("top", 875 * w);

            //我也要抢
                var  flag = true;
                var changIMg = $("#grab")
                function changeImg() {
                    if (flag) {
                        changIMg.attr({
                            src:"images/me.png"
                        })
                        flag = false;
                    }else {
                        changIMg.attr({
                            src:"images/me_2.png"
                        })
                        flag = true;
                    }
                }
                setInterval(changeImg,400)


                 /*
             *  文字赋值
             * @return {[type]} [description]
            */
            var scoreArray = [1, 3, 5, 10, 20, 30, 50, 100];
            // 随机输出用户名 ,每次不重复
            var arr = ["狂暴的奈落","ツ对你威廉","焦荿歡ˉ。","顧小旦","粉梦奇","freezeぁ团子","迷茫的流星ジ","Tyle亏欠","ゝ Extreme爱玛","老实的骄纵","癫癫的尼尔","慢吞吞的孤狼","榮其拉","率直的小吕布","x尕钕孓伸介","文艺的小火柴", "静静的金枪手","幸福 ∝┊纽扣-","绒绒的泡沫", "阴月※冷冷冷","Bud基丝艼", "叶绿的虫子", "探险家大马甲","绒绒的ぶ欠费","落寞肥喵","呉钰彤", "Basliり肺腑","邪恶的冰","狂暴的便便","丿蹲街巨人","悸景住","自负的ㄣ幻","汏過兲°越彬","niak;紾碏.`","ヾnight花和尚","づ为皧袜子","勇气的兮颜°","可口 〃班克罗","烟雨ペ乌龟","素〞月月","night一沐","Phil风铃","落寞的巴乔","机敏的保罗","Vip、妖苚戸ｘ","x-1ao.斯宾塞","涅槃的〃陌日葬魂","ヽˋ yā.パ紾悕","惒辰煜","柴田华贸","甯才良","譚氏维迦","素色的高度","慌张の仙水","善良的地方","雪ジ好點ヽ","切来切去的小仓鼠","椛椛ミ科尔","开门的少尉","滑溜溜的行者","阳光的风暴","暗清的°危笑","六月的意志","街角dē一只猫","亡灵法师小仓鼠","伤透的冷瞳°","尐*ジ贼无邪╮","Maggi马里拉","lemo草莓","_▂.佐掱の血刃","JONE埘堠ン"];
            function user(){
                if(arr.length<1){
                    arr = ["狂暴的奈落","ツ对你威廉","焦荿歡ˉ。","顧小旦","粉梦奇","freezeぁ团子","迷茫的流星ジ","Tyle亏欠","ゝ Extreme爱玛","老实的骄纵","癫癫的尼尔","慢吞吞的孤狼","榮其拉","率直的小吕布","x尕钕孓伸介","文艺的小火柴", "静静的金枪手","幸福 ∝┊纽扣-","绒绒的泡沫", "阴月※冷冷冷","Bud基丝艼", "叶绿的虫子", "探险家大马甲","绒绒的ぶ欠费","落寞肥喵","呉钰彤", "Basliり肺腑","邪恶的冰","狂暴的便便","丿蹲街巨人","悸景住","自负的ㄣ幻","汏過兲°越彬","niak;紾碏.`","ヾnight花和尚","づ为皧袜子","勇气的兮颜°","可口 〃班克罗","烟雨ペ乌龟","素〞月月","night一沐","Phil风铃","落寞的巴乔","机敏的保罗","Vip、妖苚戸ｘ","x-1ao.斯宾塞","涅槃的〃陌日葬魂","ヽˋ yā.パ紾悕","惒辰煜","柴田华贸","甯才良","譚氏维迦","素色的高度","慌张の仙水","善良的地方","雪ジ好點ヽ","切来切去的小仓鼠","椛椛ミ科尔","开门的少尉","滑溜溜的行者","阳光的风暴","暗清的°危笑","六月的意志","街角dē一只猫","亡灵法师小仓鼠","伤透的冷瞳°","尐*ジ贼无邪╮","Maggi马里拉","lemo草莓","_▂.佐掱の血刃","JONE埘堠ン"];
                }
                var len = arr.length;
                var num = parseInt(Math.random()*len);
                var usrValue = arr[num];
                // 每次都剔除选中的用户名
                arr.splice(num, 1);
                // console.log(arr)
                return usrValue;
            }
            // 随机输出红包面额 随机概率在80%以上
            function getmoney(){
                var money = 0;
                if(Math.random() <= 0.7){
                    money = scoreArray[parseInt(Math.random()*4)];
                }else if(Math.random()　<= 0.7){
                    money = scoreArray[3+parseInt(Math.random()*2)];
                }else if(Math.random() <= 0.8){
                    money = scoreArray[6];
                }else{
                    money = scoreArray[7];
                }
                return money;
            }
            // 生成滚动文字
            $(document).ready(function(){

                function fun() {
                    $("#marquee").html("");
                    for (var i = 0; i < 60; i++) {
                        $("#marquee").append(
                            "<p><span>"+user()+"</span>冒险成功,抢到红包<strong>"+getmoney()+"元</strong>！</p>"
                        )
                    };
                    
                }fun();
                setInterval(fun, 50000)
            });
});