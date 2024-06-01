//ChatGPT

//Increment scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button.inc-hs').forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonId = event.target.id;
            const scrollDiv = document.querySelector(`div.hor-scroll#${buttonId}`);
            
            if (scrollDiv) {
                const currentLeft = parseFloat(scrollDiv.style.left);
                const newLeft = currentLeft - 90;
                scrollDiv.style.left = `${newLeft}%`;
            }
        });
    });
});

//Decrement scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button.dec-hs').forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonId = event.target.id;
            const scrollDiv = document.querySelector(`div.hor-scroll#${buttonId}`);
            
            if (scrollDiv) {
                const currentLeft = parseFloat(scrollDiv.style.left);
                if (!currentLeft <= 0){
                    const newLeft = currentLeft + 90;
                    scrollDiv.style.left = `${newLeft}%`;
                }else{ scrollDiv.style.left = `0%`; }
            }
        });
    });
});