function changeState(element, secondElement, activeClass) {
    
    let firstIcons = [];
    let secondIcons = [];
   
    const firstIcon = document.querySelectorAll(element),
          secondIcon = document.querySelectorAll(secondElement);

    firstIcon.forEach((element, id) => {
        element.addEventListener('mouseenter', function() {
            firstIcon[id].classList.add(activeClass);
            secondIcon[id].classList.remove(activeClass);
        });        
    });
    secondIcon.forEach((element, id) => {
        element.addEventListener('mouseleave', function() {
            secondIcon[id].classList.add(activeClass);
            firstIcon[id].classList.remove(activeClass);
        });
    }); 

    secondIcon.forEach((element, id) => {
        element.addEventListener('mousedown', function() {
            secondIcon[id].style.transition = '0.1s';
            secondIcon[id].style.transform = 'scale(0.9)';
        });
        element.addEventListener('mouseup', () => {
            secondIcon[id].style.transition = '0.1s';
            secondIcon[id].style.transform = '';
            
        });
    });




    

    
    // const first = [...document.querySelectorAll(element)],
    //       second = [...document.querySelectorAll(secondElement)];
  
    // const updateClass = action => e => {
    //     const index = first.indexOf(e.target);
    //     if (index !== -1) {
    //         second[index].classList[action](activeClass);
    //     }
    // };
  
    // document.querySelector(element).addEventListener('mouseenter', updateClass('add'));
    // document.querySelector(element).addEventListener('mouseleave', updateClass('remove'));


    
    
}

export default changeState;