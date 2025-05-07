var next = document.getElementById("b_2");
var prev = document.getElementById("b_1");
var elements = [document.getElementById("sr"), document.getElementById("sr1"), document.getElementById("sr2")];
var currentIndex = 0; // Start at the first element

// Initial setup: show the first element, hide others
elements.forEach((el, index) => {
    if (index !== currentIndex) el.style.display = 'none';
    el.style.transition = 'transform 0.3s ease-in-out'; // Faster transition
});

next.onclick = function() {
    if (currentIndex < elements.length - 1) {
        elements[currentIndex].style.transform = 'translateX(-50%)'; // Smaller translation distance
        setTimeout(() => {
            elements[currentIndex].style.display = 'none';
            currentIndex++;
            elements[currentIndex].style.display = 'block';
            elements[currentIndex].style.transform = 'translateX(50%)'; // Smaller translation distance
            setTimeout(() => {
                elements[currentIndex].style.transform = 'translateX(0)';
            }, 10);
        }, 300); // Match the transition duration
    }
};

prev.onclick = function() {
    if (currentIndex > 0) {
        elements[currentIndex].style.transform = 'translateX(50%)'; // Smaller translation distance
        setTimeout(() => {
            elements[currentIndex].style.display = 'none';
            currentIndex--;
            elements[currentIndex].style.display = 'block';
            elements[currentIndex].style.transform = 'translateX(-50%)'; // Smaller translation distance
            setTimeout(() => {
                elements[currentIndex].style.transform = 'translateX(0)';
            }, 10);
        }, 300); // Match the transition duration
    }
};

//#region 
var next1 = document.getElementById("b_22");
var preves1 = document.getElementById("b_11");
var mxt11 = document.getElementById("str0");
var mxt22 = document.getElementById("str1");

// Initial setup
mxt22.style.display = 'none';
mxt11.style.transition = 'transform 0.2s ease-in-out';
mxt22.style.transition = 'transform 0.2s ease-in-out';

next1.onclick = function() {
    mxt11.style.transform = 'translateX(-100%)'; // Slide out card1
    setTimeout(function() {
        mxt11.style.display = 'none';
        mxt22.style.display = 'block';
        mxt22.style.transform = 'translateX(100%)'; // Start card2 outside of the view
        setTimeout(function() {
            mxt22.style.transform = 'translateX(0)'; // Slide card2 into view
        }, 20); // Small delay to ensure the transition is triggered
    }, 200); // Wait for card1 to finish sliding out
}

preves1.onclick = function() {
    mxt22.style.transform = 'translateX(100%)'; // Slide out card2
    setTimeout(function() {
        mxt22.style.display = 'none';
        mxt11.style.display = 'block';
        mxt11.style.transform = 'translateX(-100%)'; // Start card1 outside of the view
        setTimeout(function() {
            mxt11.style.transform = 'translateX(0)'; // Slide card1 into view
        }, 20); // Small delay to ensure the transition is triggered
    }, 200); // Wait for card2 to finish sliding out
}
