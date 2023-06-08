function displayAns(div) {
    var ans = div.nextElementSibling;
    let img = div.childNodes[3];
    if(ans.hidden) {
        ans.hidden=false;
        img.style.transform='rotate(180deg)';
    }
    else {
        ans.hidden=true;
        img.style.transform='rotate(0deg)';
    }
}