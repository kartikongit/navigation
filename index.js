const accordianItemHeaders = document.querySelectorAll(".accordion-item-header");

accordianItemHeaders.forEach((headingEl)=>{
  headingEl.addEventListener('click',()=>{

    const previousActive= document.querySelector(".accordion-item-header.active");

    if(previousActive && previousActive !== headingEl){
      previousActive.classList.toggle("active")
      previousActive.nextElementSibling.style.maxHeight=0;
    }


    headingEl.classList.toggle('active');
    const contentContainer=headingEl.nextElementSibling;

    if(headingEl.classList.contains("active")){
      contentContainer.style.maxHeight= contentContainer.scrollHeight+"px"
    }else{
      contentContainer.style.maxHeight=0;
    }

  })
})

