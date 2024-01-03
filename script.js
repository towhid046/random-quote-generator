
const output = () =>{
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let quoteDisplaySelector = document.querySelector('#quoteDisplay');
    let refreshBtnSelector = document.querySelector('#refreshBtn');

    refreshBtnSelector.addEventListener('click',  function(){
        const randomIndex = Math.round(Math.random() * data.length - 1 );
        const randomQuote = data[randomIndex];
                                 
        const splittedAuthorName = randomQuote.author.split(', ');        
        const templete = `"${randomQuote.text}" </br> <strong>-${splittedAuthorName[0]}</strong>`
     quoteDisplaySelector.innerHTML = templete;
     })
  });
}

output();
h1.addEventListener("mouseover", function( event ) {   
  event.target.style.backgroundColor = "red";
});