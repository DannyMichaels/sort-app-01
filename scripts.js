const state = {
    products: []
}

function onComponentDidMount() {
    const articles = document.querySelectorAll('article')
    for (let i = 0; i < articles.length; i++) {
        const product = articles[i].querySelector('.product-name')
        // const newProducts = [...state.products, articles[i]]
        // state.products = newProducts
        console.log(articles[i])
    }
    state.products = articles
    console.log(state.products)
}

onComponentDidMount()

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

const sortDiv = document.querySelector('.sort')
sortDiv.addEventListener('change', function () {
    const selectedValue = sortDiv[sortDiv.options.selectedIndex].value
    if (selectedValue == 'title-ascending') {

    } else if (selectedValue == 'title-descending') {
        // sort reverse
    } else if (selectedValue == 'price-descending') {

    } else {
        // price reverse
    }
    const articles = document.querySelectorAll('article')
    articles[0] = articles[3]
    document.querySelector('.cards').append(articles[0])
})