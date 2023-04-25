var bouton1 = document.getElementById('b1')
var bouton2 = document.getElementById('b2')
var bouton3 = document.getElementById('b3')
var bouton4 = document.getElementById('b4')
var bouton5 = document.getElementById('b5')
var img1 = document.getElementById('i1')
var img2 = document.getElementById('i2')
var img3 = document.getElementById('i3')
var img4 = document.getElementById('i4')
var img5 = document.getElementById('i5')

bouton1.addEventListener('mouseenter', function () {
    img1.style.opacity = '1';
    img2.style.opacity = '0';
    img3.style.opacity = '0';
    img4.style.opacity = '0';
    img5.style.opacity = '0';

})

bouton2.addEventListener('mouseenter', function () {
    img1.style.opacity = '0';
    img2.style.opacity = '1';
    img3.style.opacity = '0';
    img4.style.opacity = '0';
    img5.style.opacity = '0';

})


bouton3.addEventListener('mouseenter', function () {
    img1.style.opacity = '0';
    img2.style.opacity = '0';
    img3.style.opacity = '1';
    img4.style.opacity = '0';
    img5.style.opacity = '0';

})


bouton4.addEventListener('mouseenter', function () {
    img1.style.opacity = '0';
    img2.style.opacity = '0';
    img3.style.opacity = '0';
    img4.style.opacity = '1';
    img5.style.opacity = '0';

})

bouton5.addEventListener('mouseenter', function () {
    img1.style.opacity = '0';
    img2.style.opacity = '0';
    img3.style.opacity = '0';
    img4.style.opacity = '0';
    img5.style.opacity = '1';

})

var con1 = document.getElementById('contact1')
var ic1 = document.getElementById('ic1')


// con1.addEventListener('click', function(){
//     ic1.style.display = 'flex' ;

// })

// $("con1").click(function(){
//     $("ic1").fadeIn(`slow`);

// });

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con1.addEventListener('click', function () {
    if (ic1.className.indexOf('hide') !== -1) {
        fadeIn(ic1);

    } else {
        fadeOut(ic1);
    }

})


var bouton6 = document.getElementById('b6')
var bouton7 = document.getElementById('b7')
var bouton8 = document.getElementById('b8')
var bouton9 = document.getElementById('b9')
var bouton10 = document.getElementById('b10')
var img6 = document.getElementById('i6')
var img7 = document.getElementById('i7')
var img8 = document.getElementById('i8')
var img9 = document.getElementById('i9')
var img10 = document.getElementById('i10')

bouton6.addEventListener('mouseenter', function () {
    img6.style.opacity = '1';
    img7.style.opacity = '0';
    img8.style.opacity = '0';
    img9.style.opacity = '0';
    img10.style.opacity = '0';

})

bouton7.addEventListener('mouseenter', function () {
    img6.style.opacity = '0';
    img7.style.opacity = '1';
    img8.style.opacity = '0';
    img9.style.opacity = '0';
    img10.style.opacity = '0';

})


bouton8.addEventListener('mouseenter', function () {
    img6.style.opacity = '0';
    img7.style.opacity = '0';
    img8.style.opacity = '1';
    img9.style.opacity = '0';
    img10.style.opacity = '0';

})


bouton9.addEventListener('mouseenter', function () {
    img6.style.opacity = '0';
    img7.style.opacity = '0';
    img8.style.opacity = '0';
    img9.style.opacity = '1';
    img10.style.opacity = '0';

})

bouton10.addEventListener('mouseenter', function () {
    img6.style.opacity = '0';
    img7.style.opacity = '0';
    img8.style.opacity = '0';
    img9.style.opacity = '0';
    img10.style.opacity = '1';

})

var con2 = document.getElementById('contact2')
var ic2 = document.getElementById('ic2')

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con2.addEventListener('click', function () {
    if (ic2.className.indexOf('hide') !== -1) {
        fadeIn(ic2);

    } else {
        fadeOut(ic2);
    }

})

var bouton11 = document.getElementById('b11')
var bouton12 = document.getElementById('b12')
var bouton13 = document.getElementById('b13')
var bouton14 = document.getElementById('b14')
var bouton15 = document.getElementById('b15')
var img11 = document.getElementById('i11')
var img12 = document.getElementById('i12')
var img13 = document.getElementById('i13')
var img14 = document.getElementById('i14')
var img15 = document.getElementById('i15')

bouton11.addEventListener('mouseenter', function () {
    img11.style.opacity = '1';
    img12.style.opacity = '0';
    img13.style.opacity = '0';
    img14.style.opacity = '0';
    img15.style.opacity = '0';

})

bouton12.addEventListener('mouseenter', function () {
    img11.style.opacity = '0';
    img12.style.opacity = '1';
    img13.style.opacity = '0';
    img14.style.opacity = '0';
    img15.style.opacity = '0';

})


bouton13.addEventListener('mouseenter', function () {
    img11.style.opacity = '0';
    img12.style.opacity = '0';
    img13.style.opacity = '1';
    img14.style.opacity = '0';
    img15.style.opacity = '0';

})


bouton14.addEventListener('mouseenter', function () {
    img11.style.opacity = '0';
    img12.style.opacity = '0';
    img13.style.opacity = '0';
    img14.style.opacity = '1';
    img15.style.opacity = '0';

})

bouton15.addEventListener('mouseenter', function () {
    img11.style.opacity = '0';
    img12.style.opacity = '0';
    img13.style.opacity = '0';
    img14.style.opacity = '0';
    img15.style.opacity = '1';

})

var con3 = document.getElementById('contact3')
var ic3 = document.getElementById('ic3')

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con3.addEventListener('click', function () {
    if (ic3.className.indexOf('hide') !== -1) {
        fadeIn(ic3);

    } else {
        fadeOut(ic3);
    }

})


var bouton16 = document.getElementById('b16')
var bouton17 = document.getElementById('b17')
var bouton18 = document.getElementById('b18')
var bouton19 = document.getElementById('b19')
var bouton20 = document.getElementById('b20')
var img16 = document.getElementById('i16')
var img17 = document.getElementById('i17')
var img18 = document.getElementById('i18')
var img19 = document.getElementById('i19')
var img20 = document.getElementById('i20')

bouton16.addEventListener('mouseenter', function () {
    img16.style.opacity = '1';
    img17.style.opacity = '0';
    img18.style.opacity = '0';
    img19.style.opacity = '0';
    img20.style.opacity = '0';

})

bouton17.addEventListener('mouseenter', function () {
    img16.style.opacity = '0';
    img17.style.opacity = '1';
    img18.style.opacity = '0';
    img19.style.opacity = '0';
    img20.style.opacity = '0';

})


bouton18.addEventListener('mouseenter', function () {
    img16.style.opacity = '0';
    img17.style.opacity = '0';
    img18.style.opacity = '1';
    img19.style.opacity = '0';
    img20.style.opacity = '0';

})


bouton19.addEventListener('mouseenter', function () {
    img16.style.opacity = '0';
    img17.style.opacity = '0';
    img18.style.opacity = '0';
    img19.style.opacity = '1';
    img20.style.opacity = '0';

})

bouton20.addEventListener('mouseenter', function () {
    img16.style.opacity = '0';
    img17.style.opacity = '0';
    img18.style.opacity = '0';
    img19.style.opacity = '0';
    img20.style.opacity = '1';

})

var con4 = document.getElementById('contact4')
var ic4 = document.getElementById('ic4')

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con4.addEventListener('click', function () {
    if (ic4.className.indexOf('hide') !== -1) {
        fadeIn(ic4);

    } else {
        fadeOut(ic4);
    }

})

var bouton21 = document.getElementById('b21')
var bouton22 = document.getElementById('b22')
var bouton23 = document.getElementById('b23')
var bouton24 = document.getElementById('b24')
var bouton25 = document.getElementById('b25')
var img21 = document.getElementById('i21')
var img22 = document.getElementById('i22')
var img23 = document.getElementById('i23')
var img24 = document.getElementById('i24')
var img25 = document.getElementById('i25')

bouton21.addEventListener('mouseenter', function () {
    img21.style.opacity = '1';
    img22.style.opacity = '0';
    img23.style.opacity = '0';
    img24.style.opacity = '0';
    img25.style.opacity = '0';

})

bouton22.addEventListener('mouseenter', function () {
    img21.style.opacity = '0';
    img22.style.opacity = '1';
    img23.style.opacity = '0';
    img24.style.opacity = '0';
    img25.style.opacity = '0';

})


bouton23.addEventListener('mouseenter', function () {
    img21.style.opacity = '0';
    img22.style.opacity = '0';
    img23.style.opacity = '1';
    img24.style.opacity = '0';
    img25.style.opacity = '0';

})


bouton24.addEventListener('mouseenter', function () {
    img21.style.opacity = '0';
    img22.style.opacity = '0';
    img23.style.opacity = '0';
    img24.style.opacity = '1';
    img25.style.opacity = '0';

})

bouton25.addEventListener('mouseenter', function () {
    img21.style.opacity = '0';
    img22.style.opacity = '0';
    img23.style.opacity = '0';
    img24.style.opacity = '0';
    img25.style.opacity = '1';

})

var con5 = document.getElementById('contact5')
var ic5 = document.getElementById('ic5')

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con5.addEventListener('click', function () {
    if (ic5.className.indexOf('hide') !== -1) {
        fadeIn(ic5);

    } else {
        fadeOut(ic5);
    }

})

var bouton26 = document.getElementById('b26')
var bouton27 = document.getElementById('b27')
var bouton28 = document.getElementById('b28')
var bouton29 = document.getElementById('b29')
var bouton30 = document.getElementById('b30')
var img26 = document.getElementById('i26')
var img27 = document.getElementById('i27')
var img28 = document.getElementById('i28')
var img29 = document.getElementById('i29')
var img30 = document.getElementById('i30')

bouton26.addEventListener('mouseenter', function () {
    img26.style.opacity = '1';
    img27.style.opacity = '0';
    img28.style.opacity = '0';
    img29.style.opacity = '0';
    img30.style.opacity = '0';

})

bouton27.addEventListener('mouseenter', function () {
    img26.style.opacity = '0';
    img27.style.opacity = '1';
    img28.style.opacity = '0';
    img29.style.opacity = '0';
    img30.style.opacity = '0';

})


bouton28.addEventListener('mouseenter', function () {
    img26.style.opacity = '0';
    img27.style.opacity = '0';
    img28.style.opacity = '1';
    img29.style.opacity = '0';
    img30.style.opacity = '0';

})


bouton29.addEventListener('mouseenter', function () {
    img26.style.opacity = '0';
    img27.style.opacity = '0';
    img28.style.opacity = '0';
    img29.style.opacity = '1';
    img30.style.opacity = '0';

})

bouton30.addEventListener('mouseenter', function () {
    img26.style.opacity = '0';
    img27.style.opacity = '0';
    img28.style.opacity = '0';
    img29.style.opacity = '0';
    img30.style.opacity = '1';

})

var con6 = document.getElementById('contact6')
var ic6 = document.getElementById('ic6')

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con6.addEventListener('click', function () {
    if (ic6.className.indexOf('hide') !== -1) {
        fadeIn(ic6);

    } else {
        fadeOut(ic6);
    }

})

var bouton31 = document.getElementById('b31')
var bouton32 = document.getElementById('b32')
var bouton33 = document.getElementById('b33')
var bouton34 = document.getElementById('b34')
var bouton35 = document.getElementById('b35')
var img31 = document.getElementById('i31')
var img32 = document.getElementById('i32')
var img33 = document.getElementById('i33')
var img34 = document.getElementById('i34')
var img35 = document.getElementById('i35')

bouton31.addEventListener('mouseenter', function () {
    img31.style.opacity = '1';
    img32.style.opacity = '0';
    img33.style.opacity = '0';
    img34.style.opacity = '0';
    img35.style.opacity = '0';

})

bouton32.addEventListener('mouseenter', function () {
    img31.style.opacity = '0';
    img32.style.opacity = '1';
    img33.style.opacity = '0';
    img34.style.opacity = '0';
    img35.style.opacity = '0';

})


bouton33.addEventListener('mouseenter', function () {
    img31.style.opacity = '0';
    img32.style.opacity = '0';
    img33.style.opacity = '1';
    img34.style.opacity = '0';
    img35.style.opacity = '0';

})


bouton34.addEventListener('mouseenter', function () {
    img31.style.opacity = '0';
    img32.style.opacity = '0';
    img33.style.opacity = '0';
    img34.style.opacity = '1';
    img35.style.opacity = '0';

})

bouton35.addEventListener('mouseenter', function () {
    img31.style.opacity = '0';
    img32.style.opacity = '0';
    img33.style.opacity = '0';
    img34.style.opacity = '0';
    img35.style.opacity = '1';

})

var con7 = document.getElementById('contact7')
var ic7 = document.getElementById('ic7')

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con7.addEventListener('click', function () {
    if (ic7.className.indexOf('hide') !== -1) {
        fadeIn(ic7);

    } else {
        fadeOut(ic7);
    }

})

var bouton36 = document.getElementById('b36')
var bouton37 = document.getElementById('b37')
var bouton38 = document.getElementById('b38')
var bouton39 = document.getElementById('b39')
var bouton40 = document.getElementById('b40')
var img36 = document.getElementById('i36')
var img37 = document.getElementById('i37')
var img38 = document.getElementById('i38')
var img39 = document.getElementById('i39')
var img40 = document.getElementById('i40')

bouton36.addEventListener('mouseenter', function () {
    img36.style.opacity = '1';
    img37.style.opacity = '0';
    img38.style.opacity = '0';
    img39.style.opacity = '0';
    img40.style.opacity = '0';

})

bouton37.addEventListener('mouseenter', function () {
    img36.style.opacity = '0';
    img37.style.opacity = '1';
    img38.style.opacity = '0';
    img39.style.opacity = '0';
    img40.style.opacity = '0';

})


bouton38.addEventListener('mouseenter', function () {
    img36.style.opacity = '0';
    img37.style.opacity = '0';
    img38.style.opacity = '1';
    img39.style.opacity = '0';
    img40.style.opacity = '0';

})


bouton39.addEventListener('mouseenter', function () {
    img36.style.opacity = '0';
    img37.style.opacity = '0';
    img38.style.opacity = '0';
    img39.style.opacity = '1';
    img40.style.opacity = '0';

})

bouton40.addEventListener('mouseenter', function () {
    img36.style.opacity = '0';
    img37.style.opacity = '0';
    img38.style.opacity = '0';
    img39.style.opacity = '0';
    img40.style.opacity = '1';

})

var con8 = document.getElementById('contact8')
var ic8 = document.getElementById('ic8')

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con8.addEventListener('click', function () {
    if (ic8.className.indexOf('hide') !== -1) {
        fadeIn(ic8);

    } else {
        fadeOut(ic8);
    }

})

var bouton41 = document.getElementById('b41')
var bouton42 = document.getElementById('b42')
var bouton43 = document.getElementById('b43')
var bouton44 = document.getElementById('b44')
var bouton45 = document.getElementById('b45')
var img41 = document.getElementById('i41')
var img42 = document.getElementById('i42')
var img43 = document.getElementById('i43')
var img44 = document.getElementById('i44')
var img45 = document.getElementById('i45')

bouton41.addEventListener('mouseenter', function () {
    img41.style.opacity = '1';
    img42.style.opacity = '0';
    img43.style.opacity = '0';
    img44.style.opacity = '0';
    img45.style.opacity = '0';

})

bouton42.addEventListener('mouseenter', function () {
    img41.style.opacity = '0';
    img42.style.opacity = '1';
    img43.style.opacity = '0';
    img44.style.opacity = '0';
    img45.style.opacity = '0';

})


bouton43.addEventListener('mouseenter', function () {
    img41.style.opacity = '0';
    img42.style.opacity = '0';
    img43.style.opacity = '1';
    img44.style.opacity = '0';
    img45.style.opacity = '0';

})


bouton44.addEventListener('mouseenter', function () {
    img41.style.opacity = '0';
    img42.style.opacity = '0';
    img43.style.opacity = '0';
    img44.style.opacity = '1';
    img45.style.opacity = '0';

})

bouton45.addEventListener('mouseenter', function () {
    img41.style.opacity = '0';
    img42.style.opacity = '0';
    img43.style.opacity = '0';
    img44.style.opacity = '0';
    img45.style.opacity = '1';

})

var con9 = document.getElementById('contact9')
var ic9 = document.getElementById('ic9')

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con9.addEventListener('click', function () {
    if (ic9.className.indexOf('hide') !== -1) {
        fadeIn(ic9);

    } else {
        fadeOut(ic9);
    }

})

var bouton46 = document.getElementById('b46')
var bouton47 = document.getElementById('b47')
var bouton48 = document.getElementById('b48')
var bouton49 = document.getElementById('b49')
var bouton50 = document.getElementById('b50')
var img46 = document.getElementById('i46')
var img47 = document.getElementById('i47')
var img48 = document.getElementById('i48')
var img49 = document.getElementById('i49')
var img50 = document.getElementById('i50')

bouton46.addEventListener('mouseenter', function () {
    img46.style.opacity = '1';
    img47.style.opacity = '0';
    img48.style.opacity = '0';
    img49.style.opacity = '0';
    img50.style.opacity = '0';

})

bouton47.addEventListener('mouseenter', function () {
    img46.style.opacity = '0';
    img47.style.opacity = '1';
    img48.style.opacity = '0';
    img49.style.opacity = '0';
    img50.style.opacity = '0';

})


bouton48.addEventListener('mouseenter', function () {
    img46.style.opacity = '0';
    img47.style.opacity = '0';
    img48.style.opacity = '1';
    img49.style.opacity = '0';
    img50.style.opacity = '0';

})


bouton49.addEventListener('mouseenter', function () {
    img46.style.opacity = '0';
    img47.style.opacity = '0';
    img48.style.opacity = '0';
    img49.style.opacity = '1';
    img50.style.opacity = '0';

})

bouton50.addEventListener('mouseenter', function () {
    img46.style.opacity = '0';
    img47.style.opacity = '0';
    img48.style.opacity = '0';
    img49.style.opacity = '0';
    img50.style.opacity = '1';

})

var con10 = document.getElementById('contact10')
var ic10 = document.getElementById('ic10')

function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
con9.addEventListener('click', function () {
    if (ic10.className.indexOf('hide') !== -1) {
        fadeIn(ic10);

    } else {
        fadeOut(ic10);
    }

})

jQuery(function () {
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#scrollUp').css('right', '10px');
            } else {
                $('#scrollUp').removeAttr('style');
            }

        });
    });
});