function subirtela() {
    window.scrollTo ({
        top:0,
        behavior: 'smooth'
    });
}

function dicidirbotao() {
    if(window.scrollY === 0) {
        document.querySelector('.botaoscroolTO').style.display = 'none'
    } else {
        document.querySelector('.botaoscroolTO').style.display = 'block'
    }
}

window.addEventListener('scroll', dicidirbotao)






















