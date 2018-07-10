"use strict";

var SecondProject = function SecondProject(props) {
  return React.createElement(
    "div",
    { id: "SecondProject" },
    React.createElement(
      "div",
      { id: "SecondProjectContainer" },
      React.createElement(
        "div",
        { id: "titleDescContainer" },
        React.createElement(
          "div",
          { id: "SecondProjectTitle" },
          "AirBnC Calendar"
        ),
        React.createElement(
          "div",
          { id: "SecondProjectDesc" },
          "This is the booking Calendar from the AirBnC Website. It is just one of the mico services that make up there App. I filled it with random data to allow you to look six months in either direction for one hundred years."
        )
      ),
      React.createElement("div", { id: "SecondProjectImage" })
    ),
    React.createElement(
      "div",
      { className: "logos" },
      React.createElement("span", { className: "thumbnails react" }),
      React.createElement("span", { className: "thumbnails expressjs" }),
      React.createElement("span", { className: "thumbnails mongodb" }),
      React.createElement("span", { className: "thumbnails nodejs" }),
      React.createElement("span", { className: "thumbnails html5" }),
      React.createElement("span", { className: "thumbnails css3" })
    ),
    React.createElement(
      "a",
      { className: "link", href: "https://github.com/airBnC/calendar-module" },
      " AirBnC's Calendar on Github"
    )
  );
};
window.SecondProject = SecondProject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzL2NvbXBvbmVudHMvc2Vjb25kUHJvamVjdC5qc3giXSwibmFtZXMiOlsiU2Vjb25kUHJvamVjdCIsInByb3BzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ25CO0FBQUE7QUFBQSxNQUFLLElBQUcsZUFBUjtBQUNDO0FBQUE7QUFBQSxRQUFLLElBQUcsd0JBQVI7QUFDQztBQUFBO0FBQUEsVUFBSyxJQUFHLG9CQUFSO0FBQ0M7QUFBQTtBQUFBLFlBQUssSUFBRyxvQkFBUjtBQUFBO0FBQUEsU0FERDtBQUlDO0FBQUE7QUFBQSxZQUFLLElBQUcsbUJBQVI7QUFBQTtBQUFBO0FBSkQsT0FERDtBQVlDLG1DQUFLLElBQUcsb0JBQVI7QUFaRCxLQUREO0FBaUJDO0FBQUE7QUFBQSxRQUFLLFdBQVUsT0FBZjtBQUNDLG9DQUFNLFdBQVUsa0JBQWhCLEdBREQ7QUFFQyxvQ0FBTSxXQUFVLHNCQUFoQixHQUZEO0FBR0Msb0NBQU0sV0FBVSxvQkFBaEIsR0FIRDtBQUlDLG9DQUFNLFdBQVUsbUJBQWhCLEdBSkQ7QUFLQyxvQ0FBTSxXQUFVLGtCQUFoQixHQUxEO0FBTUMsb0NBQU0sV0FBVSxpQkFBaEI7QUFORCxLQWpCRDtBQXlCQztBQUFBO0FBQUEsUUFBRyxXQUFVLE1BQWIsRUFBb0IsTUFBSywyQ0FBekI7QUFBQTtBQUFBO0FBekJELEdBRG1CO0FBQUEsQ0FBdEI7QUE4QkFDLE9BQU9GLGFBQVAsR0FBdUJBLGFBQXZCIiwiZmlsZSI6InNlY29uZFByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZWNvbmRQcm9qZWN0ID0gKHByb3BzKSA9PiAoXG4gIFx0PGRpdiBpZD1cIlNlY29uZFByb2plY3RcIj5cbiAgXHRcdDxkaXYgaWQ9XCJTZWNvbmRQcm9qZWN0Q29udGFpbmVyXCI+XG5cdCAgXHRcdDxkaXYgaWQ9XCJ0aXRsZURlc2NDb250YWluZXJcIj5cblx0ICBcdFx0XHQ8ZGl2IGlkPVwiU2Vjb25kUHJvamVjdFRpdGxlXCI+XG5cdCAgXHRcdFx0XHRBaXJCbkMgQ2FsZW5kYXJcblx0ICBcdFx0XHQ8L2Rpdj5cblx0ICBcdFx0XHQ8ZGl2IGlkPVwiU2Vjb25kUHJvamVjdERlc2NcIj5cblx0ICBcdFx0XHRcdFRoaXMgaXMgdGhlIGJvb2tpbmcgQ2FsZW5kYXIgZnJvbSB0aGUgQWlyQm5DIFdlYnNpdGUuXG5cdCAgXHRcdFx0XHRJdCBpcyBqdXN0IG9uZSBvZiB0aGUgbWljbyBzZXJ2aWNlcyB0aGF0IG1ha2UgdXAgdGhlcmUgXG5cdCAgXHRcdFx0XHRBcHAuIEkgZmlsbGVkIGl0IHdpdGggcmFuZG9tIGRhdGEgdG8gYWxsb3cgeW91IHRvIGxvb2sgXG5cdCAgXHRcdFx0XHRzaXggbW9udGhzIGluIGVpdGhlciBkaXJlY3Rpb24gZm9yIG9uZSBodW5kcmVkIHllYXJzLlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHQ8L2Rpdj5cbiAgXHRcdFx0PGRpdiBpZD1cIlNlY29uZFByb2plY3RJbWFnZVwiPlxuICBcdFx0XHRcdFxuICBcdFx0XHQ8L2Rpdj5cbiAgXHRcdDwvZGl2PlxuICBcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dvc1wiPlxuICBcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYm5haWxzIHJlYWN0XCIgPjwvc3Bhbj5cbiAgXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGh1bWJuYWlscyBleHByZXNzanNcIj48L3NwYW4+XG4gIFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRodW1ibmFpbHMgbW9uZ29kYlwiPjwvc3Bhbj5cbiAgXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGh1bWJuYWlscyBub2RlanNcIj48L3NwYW4+XG4gIFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRodW1ibmFpbHMgaHRtbDVcIj48L3NwYW4+XG4gIFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRodW1ibmFpbHMgY3NzM1wiPjwvc3Bhbj5cbiAgXHRcdDwvZGl2PlxuICBcdFx0PGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWlyQm5DL2NhbGVuZGFyLW1vZHVsZVwiPiBBaXJCbkMncyBDYWxlbmRhciBvbiBHaXRodWI8L2E+XG5cbiAgXHQ8L2Rpdj5cbilcbndpbmRvdy5TZWNvbmRQcm9qZWN0ID0gU2Vjb25kUHJvamVjdDsiXX0=