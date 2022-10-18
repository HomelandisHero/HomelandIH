function changeState(element, secondElement, activeClass) {
    
    let firstIcons = [];
    let secondIcons = [];
   
    const firstIcon = document.querySelectorAll(element),
          secondIcon = document.querySelectorAll(secondElement);
        
        
          
    [].forEach.call(firstIcon, function (first, second) {
        first.addEventListener('mouseenter', function() {
            firstIcon[second].classList.add(activeClass);
            secondIcon[second].classList.remove(activeClass);
        });
        [].forEach.call(secondIcon, function(firstt, secondd) {
            firstt.addEventListener('mouseleave', function() {
                secondIcon[secondd].classList.add(activeClass);
                firstIcon[secondd].classList.remove(activeClass);
                // secondIcon[second].classList.add(activeClass);
                // secondIcon[second].classList.remove(activeClass);
            });
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



    // firstIcon.forEach(item => {
    //     item.addEventListener('mouseenter', () => { 
    //         item.classList.add(activeClass);
    //         secondIcon.forEach(i => {
    //             i.classList.remove(activeClass);

    //             i.addEventListener('mouseleave', () => {
    //                 i.classList.add(activeClass);
    //                 item.classList.remove(activeClass);
    //             });
    //         });

    //     });
        
    // });


    
    
}

export default changeState;