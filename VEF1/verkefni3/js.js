function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

function swapClasses() {
    var body = document.getElementById('body');
    var swap = document.getElementsByClassName('swap');

    var split = window.location.href.split("/");
    var page = split[split.length - 1];
    var site = "Síða 2";
    if (page == "index.html" || page == "index.html#") {
        site = "Síða 1";
    }

    if (hasClass(body, 'isometric')) {
        swap[0].innerHTML = site + " - Isometric style";
        if (swap[1] !== undefined) {
            swap[1].innerHTML = site + " - Isometric style";
        }
        addClass(body, 'hobbit');
        removeClass(body, 'isometric');
    } else {
        swap[0].innerHTML = site + " - The Hobbit style";
        if (swap[1] !== undefined) {
            swap[1].innerHTML = site + " - The Hobbit style";
        }
        addClass(body, 'isometric');
        removeClass(body, 'hobbit');
    }
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}