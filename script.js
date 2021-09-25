
var quoteObj = [];

var colors = [
    '#490A3D',
    '#BD1550',
    '#E97F02',
    '#bf9c00',
    '#8A9B0F',
    '#1cadca',
    '#FA6900',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#008a77',
    '#73A857'
];

$.ajax({
    url: "quotes.json",
    dataType: 'json',
    type: 'get',
    success: (data) => {
        quoteObj = data.quotes;
        random_quotes();
    }
})


function random_quotes() {

    var quotes_lenth = quoteObj.length;
    var randIndex = Math.floor(Math.random() * quotes_lenth);

    var randQuoteObj = quoteObj[randIndex];

    var quote = randQuoteObj['quote'];
    var author = randQuoteObj['author'];

    $('#quote').text(quote);
    $('#author').text(author);

    random_bgcolor();
}

function random_bgcolor() {
    var colors_lenth = colors.length;
    var randIndex = Math.floor(Math.random() * colors_lenth);

    var randColor = colors[randIndex];

    document.documentElement.style.setProperty('--color', randColor)

}

function twit() {

    var currentQuote = $('#quote').text();
    var currentAuthor = $('#author').text();

    window.location.href = ('https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '"\n ~BY  ' + currentAuthor))
}
