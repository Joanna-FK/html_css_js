document.onscroll = function() {
    if (document.documentElement.scrollTop > 60){
        document.querySelector('#navigation').style.height = "100px";
    } else {
document.querySelector('#navigation').style.height = "120px";
    }
}