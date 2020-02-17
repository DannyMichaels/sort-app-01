function search() {
    let input, filter, main, article, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    main = document.querySelector("main");
    article = main.getElementsByTagName("article");
    for (i = 0; i < article.length; i++) {
        a = article[i].getElementsByTagName("h3")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            article[i].style.display = "";
        } else {
            article[i].style.display = "none";
        }
    }
}