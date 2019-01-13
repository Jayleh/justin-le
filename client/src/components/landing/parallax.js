export default (element, intensity) => {
  window.addEventListener('scroll', () => {
    // console.log(this);
    let wScroll = window.scrollY;

    element.style('transform', 'translate(0px, -' + wScroll / intensity + '%)');
  });
};
