document.addEventListener("DOMContentLoaded", function() {
  function getCarData() {
    return [
      ["Nissan", 2012, "black", "black"],
      ["Nissan", 2013, "blue", "blue"],
      ["Chrysler", 2014, "yellow", "black"],
      ["Volvo", 2015, "white", "gray"]
    ];
  }

  var
    container = document.getElementById('example1'),
    hot;

  hot = new Handsontable(container, {
    data: getCarData(),
    colHeaders: ['Car', 'Year', 'Chassis color', 'Bumper color'],
    minSpareRows: 1,
    contextMenu: true,
    columns: [
      {},
      {type: 'numeric'},
      {
        type: 'dropdown',
        source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
      },
      {
        type: 'date',

        datePickerConfig: {
          // First day of the week (0: Sunday, 1: Monday, etc)
          firstDay: 1
        }
        // dateFormat: 'MM/DD/YYYY',
        // correctFormat: true,
        // defaultDate: '01/01/1900'
      }
    ]
  });

  function bindDumpButton() {
      if (typeof Handsontable === "undefined") {
        return;
      }

      Handsontable.Dom.addEvent(document.body, 'click', function (e) {

        var element = e.target || e.srcElement;

        if (element.nodeName == "BUTTON" && element.name == 'dump') {
          var name = element.getAttribute('data-dump');
          var instance = element.getAttribute('data-instance');
          var hot = window[instance];
          console.log('data of ' + name, hot.getData());
        }
      });
    }
  bindDumpButton();

});
