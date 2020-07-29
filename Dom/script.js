let newEle = document.createElement("h3");
newEle.textContent = "New Element appended first time";
document.querySelector('h1').appendChild(newEle);

/**
 *  DOM - D -> Document (HTML document file)
 *  O -> Object (title, body, URL <Tag>)
 *  M -> Modal (Structure, Collection or arrengement of HTML)
 */

/**
 *  Virtual DOM -> It is a clone of actual DOM. 
 *  [Stage changes(changes in some of the node) ->  Compute Difference -> Re-render]
 *  In this case our whole browser will not load only the updated nodes will be change
 *  so it will not load whole page only updated element will be change. (it give fast speed)
 *  ex - when we scroll FB page. 
 */