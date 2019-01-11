import $ from 'jquery';
import 'jquery-ui/ui/effect';

export const scrollTopCubic = selector => {
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

export const scrollTopInstant = selector => {
  selector.click(function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      0
    );
  });
};
