let modal = document.getElementById("modal");
function modalHandler(val) {
    if (val) {
        fadeIn(modal);
    } else {
        fadeOut(modal);
    }
}
function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "flex";
    (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += 0.2) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}


const earring = document.getElementById('earring');
const all = document.getElementById('all');
const ring = document.getElementById('ring');
const necklace = document.getElementById('necklace');
const stone = document.getElementById('stone');

function showAll() {
    all.style.display = "none";

    if(all.style.display === "none"){
        all.style.display = "block";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "none";
    }else {
        all.style.display = "none";
        earring.style.display = "block";
        ring.style.display ="none";
        necklace.style.display = "none";
        stone.style.display = "none";
    };
};

function showEarring(){
    earring.style.display = "none";

    if(earring.style.display === "none"){
        all.style.display = "none";
        earring.style.display = "block";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "none";
    }else {
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display ="block";
        necklace.style.display = "none";
        stone.style.display = "none";
    };
};

function showRing(){
    ring.style.display === "none";

    if(ring.style.display === "none"){
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display = "block";
        necklace.style.display = "none";
        stone.style.display = "none";
    }else {
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display ="none";
        necklace.style.display = "block";
        stone.style.display = "none";
    };
};

function showNecklace(){
    necklace.style.display === "none";

    if(necklace.style.display === "none"){
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "block";
        stone.style.display = "none";
    }else {
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "block";
    }
};

function showStone(){
    stone.style.display === "none";

    if(stone.style.display === "none"){
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "block";
    }else {
        all.style.display = "block";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "none";
    }
};