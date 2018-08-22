$(function() {
    let slideBar = $(".slideBar"),
        mask = $(".mask"),
        showSlideBar = $(".showSlideBar"),
        backToTop = $(".back-to-top");
    
    function showBar() {
        mask.fadeIn(); //显示遮罩区
        slideBar.css('right', 0);
    }

    function hideBar() {
        mask.fadeOut();
        slideBar.css('right', - slideBar.width())
    }

    function backTop() {
        $('html,body').animate({
            scrollTop: 0
        },800);
    }

    $(window).on('scroll', function () {
       if ($(window).scrollTop() > $(window).height())
           backToTop.fadeIn();
       else
           backToTop.fadeOut();
    });
    //模拟页面滚动事件
    $(window).trigger('scroll');

    showSlideBar.on('click', showBar);//点击更多显示slide
    mask.on('click', hideBar);//点击遮罩层隐藏slide
    backToTop.on('click', backTop);//返回顶部事件

});

/*
实现页面平滑到指定内容
 */
 $(function () {
        var speed = 2000;//滚动速度单位以毫秒计
        var h = 760;//移动距离为760px；
        var h2 = -760;
        var windowHeight = parseInt($("body").css("height"));//整个页面的高度
        $(".toBottom").click( function () {
            $('html,body').animate({
                scrollTop: h+'px'
            },
            speed);
        });

        $("#top").click( function () {
            $('html,body').animate({
                scrollTop:h2+'px'
            },
            speed);
        });
    });



//左侧边栏
$(function() {
    let slideBar = $(".login-slideBar"),
        mask = $(".mask"),
        showSlideBar = $(".showLogin");
        
    function showBar() {
        mask.fadeIn(); //显示遮罩区
        slideBar.css('left', 0);
    }

    function hideBar() {
        mask.fadeOut();
        slideBar.css('left', - slideBar.width())
    }

    //模拟页面滚动事件
    $(window).trigger('scroll');

    showSlideBar.on('click', showBar);//点击更多显示slide
    mask.on('click', hideBar);//点击遮罩层隐藏slide

});

//write.html
//添加文章类别
//操作类：content-group control add
//content-group control category add-cate input
//隐藏组件
function hide() {  
    var hide = document.getElementById("add-cate");
    hide.style.display = "none";
}   
//显示事务组件
function show() {  
    var show = document.getElementById("add-cate");
    show.style.display = "block";
}
//添加文集
function adds() {
    var add = document.getElementById("add-date");
    var li = document.createElement('li');
    var text = document.getElementById("yes").value;
    li.innerHTML = text;
    var msg = confirm("确定创建该文集吗?");
    if(msg == true){
        add.appendChild(li);
        var lis = add.getElementsByTagName("li");
        var last = lis.length-1;
        var last_1 = lis[last];
        var i = document.createElement('i');
        i.className = "fa fa-fw fa-cog";
        last_1.appendChild(i);
        hide();    
    }
}
//添加内容
function addArticle() {
    var ul = document.getElementById("addShow");
    var li = document.createElement('li');
    li.className = 'add';
    var date = new Date();
    var dateStr = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate());
    li.innerHTML = "<p name=addp></p><i name=addi></i>";
    ul.appendChild(li); 
    var many = document.getElementsByName("addp");
    var many_l = many.length;
    for(var i =0;i<many_l;i++) {
        many[i].innerHTML = dateStr;
    }
    var icons = document.getElementsByName("addi");
    var icons_l = icons.length;
    for(var j = 0;j < icons_l;j++) {
        icons[j].className = "fa fa-file";
    }
}
//若textarea为空提交后显示错误信息；
var timer = window.setInterval(put,2000);
function put() {
    var pl = document.getElementById('pl');
    if (comment.value == '') {
        pl.style.display = 'block';
    }
    else {
        pl.style.display = 'none';
    }
}
// 将input获取的链接给了id为show的元素，达到预览的目的。
function changepic(obj) {
    var newsrc = getObjectURL(obj.files[0]);
    var princess = document.getElementById('princess');
    if (newsrc != '') {
        document.getElementById('show').src = newsrc;
        princess.style.display = 'block';
    }
    
}
//建立一个可存取到该file的url
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file);
    }
    else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    }
    else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}