export default () => {
  const body = document.querySelector('body');

  body.style.animation = '{ scrollTop: 0 } 1500 easeInOutCubic';

  return;
};

// // Click event to scroll to top
// $(scrollTop).click(function(event) {
//   event.preventDefault();

//   $('html, body').animate(
//     {
//       scrollTop: 0
//     },
//     1500,
//     'easeInOutCubic'
//   );

//   return false;
// });
