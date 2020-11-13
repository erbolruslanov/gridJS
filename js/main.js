let grid = document.querySelectorAll('.grid-item')
grid.forEach((el,idx)=>{
    el.addEventListener('click',()=>{
        let step = 3
        clearActive()
        if(idx >= grid.length - step) {
            idx = idx - grid.length
        }
        grid[idx + step].classList.add('active')
    })
})
function clearActive(){
    grid.forEach(block => block.classList.remove('active'))
}
