"use strict";

var ThirdProject = function ThirdProject(props) {
  return React.createElement(
    "div",
    { id: "ThirdProject" },
    React.createElement(
      "div",
      { id: "ThirdProjectContainer" },
      React.createElement("div", { id: "ThirdProjectImage" }),
      React.createElement(
        "div",
        { id: "titleDescContainer" },
        React.createElement(
          "div",
          { id: "ThirdProjectTitle" },
          "Backend for AirBnCs Description Module"
        ),
        React.createElement(
          "div",
          { id: "ThirdProjectDesc" },
          "I inherited a previous teams Legacy code and rewrote the backend. This included selecting an appropriate database stress-testing it, deploying it on AWS to enable horizontal scaling and reduced RPM and latency."
        )
      )
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
      " AirBnC's Description-Module on Github"
    )
  );
};
window.ThirdProject = ThirdProject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzL2NvbXBvbmVudHMvdGhpcmRQcm9qZWN0LmpzeCJdLCJuYW1lcyI6WyJUaGlyZFByb2plY3QiLCJwcm9wcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLElBQUcsY0FBUjtBQUNDO0FBQUE7QUFBQSxRQUFLLElBQUcsdUJBQVI7QUFDQyxtQ0FBSyxJQUFHLG1CQUFSLEdBREQ7QUFJQztBQUFBO0FBQUEsVUFBSyxJQUFHLG9CQUFSO0FBQ0M7QUFBQTtBQUFBLFlBQUssSUFBRyxtQkFBUjtBQUFBO0FBQUEsU0FERDtBQUlDO0FBQUE7QUFBQSxZQUFLLElBQUcsa0JBQVI7QUFBQTtBQUFBO0FBSkQ7QUFKRCxLQUREO0FBZ0JDO0FBQUE7QUFBQSxRQUFLLFdBQVUsT0FBZjtBQUNDLG9DQUFNLFdBQVUsa0JBQWhCLEdBREQ7QUFFQyxvQ0FBTSxXQUFVLHNCQUFoQixHQUZEO0FBR0Msb0NBQU0sV0FBVSxvQkFBaEIsR0FIRDtBQUlDLG9DQUFNLFdBQVUsbUJBQWhCLEdBSkQ7QUFLQyxvQ0FBTSxXQUFVLGtCQUFoQixHQUxEO0FBTUMsb0NBQU0sV0FBVSxpQkFBaEI7QUFORCxLQWhCRDtBQXdCQztBQUFBO0FBQUEsUUFBRyxXQUFVLE1BQWIsRUFBb0IsTUFBSywyQ0FBekI7QUFBQTtBQUFBO0FBeEJELEdBRGtCO0FBQUEsQ0FBckI7QUE2QkFDLE9BQU9GLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6InRoaXJkUHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRoaXJkUHJvamVjdCA9IChwcm9wcykgPT4gKFxuICBcdDxkaXYgaWQ9XCJUaGlyZFByb2plY3RcIj5cbiAgXHRcdDxkaXYgaWQ9XCJUaGlyZFByb2plY3RDb250YWluZXJcIj5cbiAgXHRcdFx0PGRpdiBpZD1cIlRoaXJkUHJvamVjdEltYWdlXCI+XG4gIFx0XHRcdFx0XG4gIFx0XHRcdDwvZGl2PlxuXHQgIFx0XHQ8ZGl2IGlkPVwidGl0bGVEZXNjQ29udGFpbmVyXCI+XG5cdCAgXHRcdFx0PGRpdiBpZD1cIlRoaXJkUHJvamVjdFRpdGxlXCI+XG5cdCAgXHRcdFx0XHRCYWNrZW5kIGZvciBBaXJCbkNzIERlc2NyaXB0aW9uIE1vZHVsZVxuXHQgIFx0XHRcdDwvZGl2PlxuXHQgIFx0XHRcdDxkaXYgaWQ9XCJUaGlyZFByb2plY3REZXNjXCI+XG5cdCAgXHRcdFx0XHRJIGluaGVyaXRlZCBhIHByZXZpb3VzIHRlYW1zIExlZ2FjeSBjb2RlIGFuZCByZXdyb3RlIHRoZSBiYWNrZW5kLlxuXHQgIFx0XHRcdFx0VGhpcyBpbmNsdWRlZCBzZWxlY3RpbmcgYW4gYXBwcm9wcmlhdGUgZGF0YWJhc2Ugc3RyZXNzLXRlc3RpbmcgaXQsXG5cdCAgXHRcdFx0XHRkZXBsb3lpbmcgaXQgb24gQVdTIHRvIGVuYWJsZSBob3Jpem9udGFsIHNjYWxpbmcgYW5kIHJlZHVjZWQgUlBNIGFuZCBsYXRlbmN5LlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHQ8L2Rpdj5cbiAgXHRcdDwvZGl2PlxuICBcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dvc1wiPlxuICBcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYm5haWxzIHJlYWN0XCIgPjwvc3Bhbj5cbiAgXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGh1bWJuYWlscyBleHByZXNzanNcIj48L3NwYW4+XG4gIFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRodW1ibmFpbHMgbW9uZ29kYlwiPjwvc3Bhbj5cbiAgXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGh1bWJuYWlscyBub2RlanNcIj48L3NwYW4+XG4gIFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRodW1ibmFpbHMgaHRtbDVcIj48L3NwYW4+XG4gIFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRodW1ibmFpbHMgY3NzM1wiPjwvc3Bhbj5cbiAgXHRcdDwvZGl2PlxuICBcdFx0PGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWlyQm5DL2NhbGVuZGFyLW1vZHVsZVwiPiBBaXJCbkMncyBEZXNjcmlwdGlvbi1Nb2R1bGUgb24gR2l0aHViPC9hPlxuXG4gIFx0PC9kaXY+XG4pXG53aW5kb3cuVGhpcmRQcm9qZWN0ID0gVGhpcmRQcm9qZWN0OyJdfQ==