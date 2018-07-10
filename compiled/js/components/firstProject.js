"use strict";

var FirstProject = function FirstProject(props) {
  return React.createElement(
    "div",
    { id: "FirstProject" },
    React.createElement(
      "div",
      { id: "firstProjectContainer" },
      React.createElement("div", { id: "firstProjectImage" }),
      React.createElement(
        "div",
        { id: "titleDescContainer" },
        React.createElement(
          "div",
          { id: "firstProjectTitle" },
          "ChessNutt"
        ),
        React.createElement(
          "div",
          { id: "firstProjectDesc" },
          "ChessNutt is a 3D Multy-player chess game that allow players to login to there account choose or create a private room and play chess with a friend. There is also a chat feature setup that lets you talk to the person your playing or challenge someone in a differnent game."
        )
      )
    ),
    React.createElement(
      "div",
      { className: "logos" },
      React.createElement("span", { className: "thumbnails react" }),
      React.createElement("span", { className: "thumbnails threejs" }),
      React.createElement("span", { className: "thumbnails mongodb" }),
      React.createElement("span", { className: "thumbnails nodejs" }),
      React.createElement("span", { className: "thumbnails html5" }),
      React.createElement("span", { className: "thumbnails css3" })
    ),
    React.createElement(
      "a",
      { className: "link", href: "https://github.com/justinmeskan/chessnutt" },
      " ChessNutt's on Github"
    )
  );
};
window.FirstProject = FirstProject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzL2NvbXBvbmVudHMvZmlyc3RQcm9qZWN0LmpzeCJdLCJuYW1lcyI6WyJGaXJzdFByb2plY3QiLCJwcm9wcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLElBQUcsY0FBUjtBQUNDO0FBQUE7QUFBQSxRQUFLLElBQUcsdUJBQVI7QUFDQyxtQ0FBSyxJQUFHLG1CQUFSLEdBREQ7QUFJQztBQUFBO0FBQUEsVUFBSyxJQUFHLG9CQUFSO0FBQ0M7QUFBQTtBQUFBLFlBQUssSUFBRyxtQkFBUjtBQUFBO0FBQUEsU0FERDtBQUlDO0FBQUE7QUFBQSxZQUFLLElBQUcsa0JBQVI7QUFBQTtBQUFBO0FBSkQ7QUFKRCxLQUREO0FBa0JDO0FBQUE7QUFBQSxRQUFLLFdBQVUsT0FBZjtBQUNDLG9DQUFNLFdBQVUsa0JBQWhCLEdBREQ7QUFFQyxvQ0FBTSxXQUFVLG9CQUFoQixHQUZEO0FBR0Msb0NBQU0sV0FBVSxvQkFBaEIsR0FIRDtBQUlDLG9DQUFNLFdBQVUsbUJBQWhCLEdBSkQ7QUFLQyxvQ0FBTSxXQUFVLGtCQUFoQixHQUxEO0FBTUMsb0NBQU0sV0FBVSxpQkFBaEI7QUFORCxLQWxCRDtBQTBCQztBQUFBO0FBQUEsUUFBRyxXQUFVLE1BQWIsRUFBb0IsTUFBSywyQ0FBekI7QUFBQTtBQUFBO0FBMUJELEdBRGtCO0FBQUEsQ0FBckI7QUErQkFDLE9BQU9GLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6ImZpcnN0UHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZpcnN0UHJvamVjdCA9IChwcm9wcykgPT4gKFxuICBcdDxkaXYgaWQ9XCJGaXJzdFByb2plY3RcIj5cbiAgXHRcdDxkaXYgaWQ9XCJmaXJzdFByb2plY3RDb250YWluZXJcIj5cbiAgXHRcdFx0PGRpdiBpZD1cImZpcnN0UHJvamVjdEltYWdlXCI+XG4gIFx0XHRcdFx0XG4gIFx0XHRcdDwvZGl2PlxuXHQgIFx0XHQ8ZGl2IGlkPVwidGl0bGVEZXNjQ29udGFpbmVyXCI+XG5cdCAgXHRcdFx0PGRpdiBpZD1cImZpcnN0UHJvamVjdFRpdGxlXCI+XG5cdCAgXHRcdFx0XHRDaGVzc051dHRcblx0ICBcdFx0XHQ8L2Rpdj5cblx0ICBcdFx0XHQ8ZGl2IGlkPVwiZmlyc3RQcm9qZWN0RGVzY1wiPlxuXHQgIFx0XHRcdFx0Q2hlc3NOdXR0IGlzIGEgM0QgTXVsdHktcGxheWVyIGNoZXNzIGdhbWUgdGhhdCBcblx0ICBcdFx0XHRcdGFsbG93IHBsYXllcnMgdG8gbG9naW4gdG8gdGhlcmUgYWNjb3VudCBjaG9vc2Ugb3IgY3JlYXRlXG5cdCAgXHRcdFx0XHRhIHByaXZhdGUgcm9vbSBhbmQgcGxheSBjaGVzcyB3aXRoIGEgZnJpZW5kLiBUaGVyZSBpcyBhbHNvIGFcblx0ICBcdFx0XHRcdGNoYXQgZmVhdHVyZSBzZXR1cCB0aGF0IGxldHMgeW91IHRhbGsgdG8gdGhlIHBlcnNvbiB5b3VyXG5cdCAgXHRcdFx0XHRwbGF5aW5nIG9yIGNoYWxsZW5nZSBzb21lb25lIGluIGEgZGlmZmVybmVudCBnYW1lLlxuICBcdFx0XHRcdDwvZGl2PlxuICBcdFx0XHQ8L2Rpdj5cbiAgXHRcdDwvZGl2PlxuICBcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2dvc1wiPlxuICBcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYm5haWxzIHJlYWN0XCIgPjwvc3Bhbj5cbiAgXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGh1bWJuYWlscyB0aHJlZWpzXCI+PC9zcGFuPlxuICBcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYm5haWxzIG1vbmdvZGJcIj48L3NwYW4+XG4gIFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRodW1ibmFpbHMgbm9kZWpzXCI+PC9zcGFuPlxuICBcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYm5haWxzIGh0bWw1XCI+PC9zcGFuPlxuICBcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aHVtYm5haWxzIGNzczNcIj48L3NwYW4+XG4gIFx0XHQ8L2Rpdj5cbiAgXHRcdDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2p1c3Rpbm1lc2thbi9jaGVzc251dHRcIj4gQ2hlc3NOdXR0J3Mgb24gR2l0aHViPC9hPlxuXG4gIFx0PC9kaXY+XG4pXG53aW5kb3cuRmlyc3RQcm9qZWN0ID0gRmlyc3RQcm9qZWN0OyJdfQ==