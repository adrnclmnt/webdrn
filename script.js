// Make elements draggable
const draggables = document.querySelectorAll('.draggable');
let zIndexCounter = 100;

draggables.forEach(windowEl => {
    const header = windowEl.querySelector('.title-bar');
    
    // Bring to front on click
    windowEl.addEventListener('mousedown', () => {
        zIndexCounter++;
        windowEl.style.zIndex = zIndexCounter;
    });

    header.addEventListener('mousedown', (e) => {
        let prevX = e.clientX;
        let prevY = e.clientY;
        
        const mouseMoveHandler = (e) => {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;
            
            const rect = windowEl.getBoundingClientRect();
            
            windowEl.style.top = (rect.top - newY) + "px";
            windowEl.style.left = (rect.left - newX) + "px";
            
            prevX = e.clientX;
            prevY = e.clientY;
        }

        const mouseUpHandler = () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
});

// Open/Close Functions
function openWindow(id) {
    const win = document.getElementById(id);
    win.style.display = 'flex';
    // Bring to front immediately
    zIndexCounter++;
    win.style.zIndex = zIndexCounter;
}

function closeWindow(id) {
    document.getElementById(id).style.display = 'none';
}