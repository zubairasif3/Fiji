
// Use jQuery's document ready function to ensure the DOM is fully loaded
 $(document).ready(function () {
    $('.date').datepicker({
        format: 'D, d M yy'
    });
      // Update the placeholder to the current date
      const currentDate = new Date();
      const options = { weekday: 'short', day: 'numeric', month: 'short', year: '2-digit' };
      const currentDateString = currentDate.toLocaleDateString('en-US', options);
      var components = currentDateString.split(' ');
      components[2] = components[2].replace(',', '');
      var string2 = components[0] + ' ' + components[2] + ' ' + components[1] + ' ' + components[3];

      $('.date').attr('placeholder', string2);
});