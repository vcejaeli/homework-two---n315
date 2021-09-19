//not entirely sure what this all means yet but it's ok - practice.. practice
function showVariable(newName) {
    console.log("newName app.js " + newName);
}

function setBindings() {
    $("nav a").click(function(e) {
        let btnID = e.currentTarget.id;
        MODEL.getMyVariable(btnID, showVariable);
        // MODEL line connects to return from model.js
    });
}

$(document).ready(function () {
    console.log("ready");
    setBindings();
}); 
