let img = document.querySelector(`.box-img`)
let greens = document.querySelector(`.green`)
let silvers = document.querySelector(`.silver`)
let golds = document.querySelector(`.golg`)
let graphites = document.querySelector(`.Graphite`)
let blues = document.querySelector(`.blue`)
greens.onclick = () => {


    if (img.classList.contains(`box-img-one`)) {
        img.classList.remove(`box-img-one`)
        greens.classList.add(`border-green`)
        silvers.classList.remove(`border-silver`)
        golds.classList.remove(`border-gold`)
        graphites.classList.remove(`border-Graphite`)
        blues.classList.remove(`border-blue`)
    } else {

        img.classList.add(`box-img-one`)
        img.classList.remove(`box-img-two`)
        img.classList.remove(`box-img-three`)
        img.classList.remove(`box-img-four`)
        img.classList.remove(`box-img-foyf`)
    }
}
img.classList.remove(`box-img-one`)
img.classList.remove(`box-img-two`)
img.classList.remove(`box-img-three`)
img.classList.remove(`box-img-four`)
img.classList.remove(`box-img-foyf`)


silvers.onclick = () => {
    if (img.classList.contains(`box-img-two`)) {
        img.classList.remove(`box-img-two`)
        silvers.classList.add(`border-silver`)
        greens.classList.remove(`border-green`)
        golds.classList.remove(`border-gold`)
        graphites.classList.remove(`border-Graphite`)
        blues.classList.remove(`border-blue`)

    } else {
        img.classList.add(`box-img-two`)
        img.classList.remove(`box-img-one`)
        img.classList.remove(`box-img-three`)
        img.classList.remove(`box-img-four`)
        img.classList.remove(`box-img-foyf`)
    }
}
golds.onclick = () => {
    if (img.classList.contains(`box-img-three`)) {
        img.classList.remove(`box-img-three`)
        golds.classList.add(`border-gold`)
        greens.classList.remove(`border-green`)
        silvers.classList.remove(`border-silver`)
        graphites.classList.remove(`border-Graphite`)
        blues.classList.remove(`border-blue`)
    } else {
        img.classList.add(`box-img-three`)
        img.classList.remove(`box-img-one`)
        img.classList.remove(`box-img-two`)
        img.classList.remove(`box-img-four`)
        img.classList.remove(`box-img-foyf`)
    }
}
graphites.onclick = () => {
    if (img.classList.contains(`box-img-four`)) {
        img.classList.remove(`box-img-four`)
        graphites.classList.add(`border-Graphite`)
        greens.classList.remove(`border-green`)
        silvers.classList.remove(`border-silver`)
        golds.classList.remove(`border-gold`)
        blues.classList.remove(`border-blue`)
    } else {
        img.classList.add(`box-img-four`)
        img.classList.remove(`box-img-one`)
        img.classList.remove(`box-img-two`)
        img.classList.remove(`box-img-three`)
        img.classList.remove(`box-img-foyf`)
    }
}
blues.onclick = () => {
    if (img.classList.contains(`box-img-foyf`)) {
        img.classList.remove(`box-img-foyf`)
        blues.classList.add(`border-blue`)
        greens.classList.remove(`border-green`)
        silvers.classList.remove(`border-silver`)
        golds.classList.remove(`border-gold`)
        graphites.classList.remove(`border-Graphite`)

    } else {
        img.classList.add(`box-img-foyf`)
        img.classList.remove(`box-img-one`)
        img.classList.remove(`box-img-two`)
        img.classList.remove(`box-img-three`)
        img.classList.remove(`box-img-four`)
    }
}

let modalActiv = document.querySelector(`.open-model-door`)
let modal = document.querySelector(`.modal`)
let modalTwo = document.querySelector(`.madalTwo`)
let bodyFixed = document.querySelector(`main`)
function openModal() {
    modal.style.display = `block`
    modalTwo.style.display = `block`


    setTimeout(() => {
        bodyFixed.style.background = `fixed `
        modal.style.opacity = `1`
        modalTwo.style.opacity = `1`
        modal.style.transform = `transform: translate(-50%, -50%)scale(1);`
    }, 200);
}
modalActiv.onclick = () => {
    openModal()
}

let close = document.querySelector(`.out`)

function closeModal() {
    modal.style.display = `none`
    modalTwo.style.display = `none`


    setTimeout(() => {
        bodyFixed.style.background = `none `
        modal.style.opacity = `0`
        modalTwo.style.opacity = `0`
        modal.style.transform = `transform: translate(-50%, -50%)scale(.2;`
    }, 200)
}

close.onclick = () => {
    closeModal()
}

let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none"

        } else {
            panel.style.display = "block";
        }
    });


}
let color = document.querySelector(`.akardion-color `)
function Go() {
    var h = (modal.style.height) ? parseInt(modal.style.height) : 1600
    modal.style.height = ((h == 1600) ? 2000 : 1600) + 'px'


    var h = (color.style.height) ? parseInt(color.style.height) : 800
    color.style.height = ((h == 800) ? 1500 : 800) + 'px'

}