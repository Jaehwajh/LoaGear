// Menu open
let modal = document.getElementById("modal");
let accMenu = document.getElementById("acc");
let stoneMenu = document.getElementById("rock");

function openAccessory(val) {
    if (val) {
        fadeIn(accMenu);
    } else {
        fadeOut(accMenu);
    }
}

function openStone(val){
    if (val) {
        fadeIn(stoneMenu);
    } else {
        fadeOut(stoneMenu);
    }
}

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

// Page Views
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
        earring.style.display = "none";
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
        ring.style.display ="none";
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
        necklace.style.display = "none";
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
        stone.style.display = "none";
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
        all.style.display = "none";
        earring.style.display = "none";
        ring.style.display = "none";
        necklace.style.display = "none";
        stone.style.display = "none";
    }
};  

// Pagination Function
document.addEventListener('DOMContentLoaded', function () {
    const contentIds = ['all', 'ring', 'earring', 'necklace', 'stone'];
    const itemsPerPage = 10;
    let currentPages = {};
    const allItems = {};
  
    contentIds.forEach(id => {
      const content = document.getElementById(id);
      if (content) {
        const items = Array.from(content.getElementsByTagName('tr')).slice(1);
        allItems[id] = items;
        currentPages[id] = 0;
      } else {
        console.error(`Element with ID '${id}' not found.`);
      }
    });
  
    function showPage(page, contentId) {
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const items = allItems[contentId];
  
      items.forEach((item, index) => {
        item.classList.toggle('hidden', index < startIndex || index >= endIndex);
      });
      updateActiveButtonStates(contentId);
    }
  
    function createPageButtons(contentId) {
      const items = allItems[contentId];
      const totalPages = Math.ceil(items.length / itemsPerPage);
      const content = document.getElementById(contentId);
  
      if (content) {
        const paginationContainer = document.createElement('div');
        const paginationDiv = content.appendChild(paginationContainer);
        paginationContainer.classList.add('pagination');
  
        // Add page buttons
        for (let i = 0; i < totalPages; i++) {
          const pageButton = document.createElement('button');
          pageButton.textContent = i + 1;
          pageButton.addEventListener('click', () => {
            currentPages[contentId] = i;
            showPage(currentPages[contentId], contentId);
            updateActiveButtonStates(contentId);
          });
  
          paginationDiv.appendChild(pageButton);
        }
      } else {
        console.error(`Element with ID '${contentId}' not found.`);
      }
    }
  
    function updateActiveButtonStates(contentId) {
      const pageButtons = document.querySelectorAll(`#${contentId} .pagination button`);
      pageButtons.forEach((button, index) => {
        if (index === currentPages[contentId]) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }

    contentIds.forEach(id => {
      createPageButtons(id);
      showPage(currentPages[id], id);
    });
  });

