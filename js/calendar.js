var events = [
  { Title: "@Club Red Doors Open at 6pm", Date: new Date("12/4/2015") },
  { Title: "Test Event Details", Date: new Date("12/9/2015") },
  { Title: "Test Event Detailss", Date: new Date("12/16/2015") }
];

$("#test").datepicker({
  beforeShowDay: function(date) {
      var result = [true, '', null];
      var matching = $.grep(events, function(event) {
          return event.Date.valueOf() === date.valueOf();
      });

      if (matching.length) {
          result = [true, 'highlight', null];
      }
      return result;
  },
  onSelect: function(dateText) {
      var date,
          selectedDate = new Date(dateText),
          i = 0,
          event = null;

      while (i < events.length && !event) {
          date = events[i].Date;

          if (selectedDate.valueOf() === date.valueOf()) {
              event = events[i];
          }
          i++;
      }
      if (event) {
          alert(event.Title);
      }
  }
});
