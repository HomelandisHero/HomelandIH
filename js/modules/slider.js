function slider() {

    //--------------- SLIDER ---------------

    const eachSlide = document.querySelectorAll('.slides_gallery'),
          slider = document.querySelector('.gallery_box'),
          prev = document.querySelector('.prev_arrow'),
          next = document.querySelector('.next_arrow'),
          slidesWrapper =document.querySelector('.slides_wrapper'),
          allSlides = document.querySelector('.all_slides'),
          width = window.getComputedStyle(slidesWrapper).width; 
    let slideIndex = 1;
    let offset = 0;

    allSlides.style.width = 100 * eachSlide.length + '%';
    allSlides.style.display = 'flex';
    allSlides.style.transition = '1s all';

    slidesWrapper.style.overflow = 'hidden';

    eachSlide.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    
    indicators.classList.add('dots_indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 20px;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < eachSlide.length; i++ ) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            width: 25px;
            height: 3px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: rgb(0, 0, 0);
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .2;
            transition: opacity .6s ease;
        `;    
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if(offset == deleteNotDigits(width) * (eachSlide.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        if (slideIndex == eachSlide.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        dots.forEach(dot => dot.style.opacity = '.2');
        dots[slideIndex - 1].style.opacity = 1;

        allSlides.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (eachSlide.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        if ( slideIndex == 1) {
            slideIndex = eachSlide.length;
        } else {
            slideIndex--;
        }

        dots.forEach(dot => dot.style.opacity = '.2');
        dots[slideIndex - 1].style.opacity = 1;
        
        allSlides.style.transform = `translateX(-${offset}px)`;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);
            allSlides.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.style.opacity = '.2');
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
}

export default slider;