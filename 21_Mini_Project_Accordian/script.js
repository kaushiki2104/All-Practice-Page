const accordians=document.querySelectorAll('.accordian');
accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.amswer');
    accordian.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})