const heading = React.createElement("h1", {id:"heading"}, "This is the heading!");
const root = ReactDOM.createRoot(document.getElementById("root"));

//nested tags
const divElt = React.createElement("div", 
                                    {id: "parent"}, 
                                    React.createElement("div", 
                                        {id: "child"}, 
                                        React.createElement("h1", {id:"heading"}, "This is the nested heading!")));
const abcroot = ReactDOM.createRoot(document.getElementById("abc"));

//sibling tags
const divElement = React.createElement("div", 
{id: "parent"}, 
React.createElement("div", 
    {id: "child"}, 
    [React.createElement("h1", {id:"heading"}, "This is the nested heading 1!"),
    React.createElement("h1", {id:"heading"}, "This is the nested heading 2!")]));
const siblingRoot = ReactDOM.createRoot(document.getElementById("sibling"));

root.render(heading);
abcroot.render(divElt);
siblingRoot.render(divElement);
