const openViewBtn = document.querySelectorAll('[data-view-target]')
const closeViewBtn = document.querySelectorAll('[data-close-btn]')
const overlay = document.getElementById('overlay')

openViewBtn.forEach(button =>{
    button.addEventListener('click', () =>{
        const view = document.querySelector(button.dataset.viewTarget)
        openView(view)
    })
})

closeViewBtn.forEach(button =>{
    button.addEventListener('click', () =>{
        const view = button.closest('.view')
        closeView(view)
    })
})

overlay.addEventListener('click', () =>{
    const views = document.querySelectorAll('.view.active')
    views.forEach(modal =>{
        closeView(view)
    })
})

function openView(view){
    if (view == null)return
    view.classList.add('active')
    overlay.classList.add('active')
}

function closeView(view){
    if (view == null)return
    view.classList.remove('active')
    overlay.classList.remove('active')
}