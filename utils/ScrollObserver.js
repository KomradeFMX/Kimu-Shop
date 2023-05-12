import { useEffect } from 'react';

const ScrollObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scrollShowed');
        } else {
          entry.target.classList.remove('scrollShowed');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.scrollHidden');
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  return null;
};

export default ScrollObserver;