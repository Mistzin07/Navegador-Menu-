const list = document.querySelectorAll('li');
list.forEach(li=>{
    li.addEventListener('click',()=>{
        list.forEach(li=>{
            li.classList.remove('active');
        })
        li.classList.add('active');
    })
})