const App = React.createElement(
    "div",
    { className: "mainContainer" },
    React.createElement(
        "h1",
        { className: "heading" },
        "Topics covered"
    ),
    React.createElement(
        "p",
        { className: "paragraph1" },
        "The following is a list of all the topics we cover in the MDN learning area."
    ),
    React.createElement(
        "div",
        { className: "div1" },
        React.createElement(
            "a", 
            { href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" },
            "Getting started with the web"
        ),
        React.createElement(
            "p",
            { className: "paragraph2" },
            "Provides a practical introduction to web development for complete beginners."
        ),
    ),
    React.createElement(
        "div",
        { className: "div2" },
        React.createElement(
            "a",
            { href: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
            "HTML — Structuring the web"
        ),
        React.createElement(
            "p",
            { className: "paragraph3" },
            "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
        ),
    ),
    React.createElement(
        "div",
        { className: "div3" },
        React.createElement(
            "a",
            { href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            "CSS — Styling the web"
        ),
        React.createElement(
            "p",
            { className: "paragraph4" },
            "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."
        )
    ),
);




const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv);
root.render(App);