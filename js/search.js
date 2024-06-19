function searching(input) {
    input.classList.add("active");
    const filter = input.value.toUpperCase();
    const search_results = document.getElementById("search-results");
    const gamelinks = search_results.getElementsByTagName("a");
    for (const gl of gamelinks) {
        var txtValue = gl.textContent || gl.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) gl.style.display = "";
        else gl.style.display = "none";
    }
}

function fun(obj){
   obj.classList.add("active");
}