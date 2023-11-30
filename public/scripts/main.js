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
        all.style.display = "flex";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "none";
    }else {
        all.style.display = "none";
        earring.style.display = "flex";
        ring.style.display ="none";
        necklace.style.display = "none";
        stone.style.display = "none";
    };
};

function showEarring(){
    earring.style.display = "none";

    if(earring.style.display === "none"){
        all.style.display = "none";
        earring.style.display = "flex";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "none";
    }else {
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display ="flex";
        necklace.style.display = "none";
        stone.style.display = "none";
    };
};

function showRing(){
    ring.style.display === "none";

    if(ring.style.display === "none"){
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display = "flex";
        necklace.style.display = "none";
        stone.style.display = "none";
    }else {
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display ="none";
        necklace.style.display = "flex";
        stone.style.display = "none";
    };
};

function showNecklace(){
    necklace.style.display === "none";

    if(necklace.style.display === "none"){
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "flex";
        stone.style.display = "none";
    }else {
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "flex";
    }
};

function showStone(){
    stone.style.display === "none";

    if(stone.style.display === "none"){
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "flex";
    }else {
        all.style.display = "flex";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "none";
    }
};

// Pagination Function

document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content'); 
    const itemsPerPage = 20;
    let currentPage = 0;
    const items = Array.from(content.getElementsByTagName('tr')).slice(1);
  
  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
      item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
  }
  
  function createPageButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.createElement('div');
    const paginationDiv = document.body.appendChild(paginationContainer);
    paginationContainer.classList.add('pagination');
  
    // Add page buttons
    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        showPage(currentPage);
        updateActiveButtonStates();
      });
  
        content.appendChild(paginationContainer);
        paginationDiv.appendChild(pageButton);
      }
  }
  
  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  
    createPageButtons(); // Call this function to create the page buttons initially
    showPage(currentPage);
  });