"use strict";
const table = document.querySelector("table");
[
    ...table.rows
].forEach((tr)=>{
    const copy = tr.children[1].cloneNode(true);
    tr.children[4].before(copy);
});

//# sourceMappingURL=index.f75de5e1.js.map
