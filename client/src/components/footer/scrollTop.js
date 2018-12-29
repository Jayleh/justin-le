import $ from 'jquery';
import 'jquery-ui/ui/effect';

export default selector => {
  selector.click(function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      1500,
      'easeInOutCubic'
    );
  });
};
