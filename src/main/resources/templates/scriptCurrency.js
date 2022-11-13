const mapDollar = new Map();
usdToInr();
usdToEur();
usdToYen();
usdToPound();
mapDollar.set('Dollar', 1);

function usdToInr() {
    const url = 'https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=INR&q=1.0';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7648e70565mshed1f4619aa8ed9cp15516bjsnd7cb902ea576',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      }
    };
    
    fetch(url, options)
        .then(res => res.json())
        .then(json => mapDollar.set('INR', json))
        .catch(err => console.error('error:' + err));
}

function usdToEur() {
  const url = 'https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=EUR&q=1.0';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7648e70565mshed1f4619aa8ed9cp15516bjsnd7cb902ea576',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
      .then(res => res.json())
      .then(json => mapDollar.set('Euro', json))
      .catch(err => console.error('error:' + err));
}

function usdToYen() {
  const url = 'https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=JPY&q=1.0';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7648e70565mshed1f4619aa8ed9cp15516bjsnd7cb902ea576',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
      .then(res => res.json())
      .then(json => mapDollar.set('Yen', json))
      .catch(err => console.error('error:' + err));
}

function usdToPound() {
  const url = 'https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=EUR&q=1.0';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7648e70565mshed1f4619aa8ed9cp15516bjsnd7cb902ea576',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
      .then(res => res.json())
      .then(json => mapDollar.set('Pound', json))
      .catch(err => console.error('error:' + err));
}

    function convertValue() {
        var currIn = document.getElementById("dropdownMenuButton1").value;
        var currOut = document.getElementById("dropdownMenuButton2").value;
        var inputAmount = document.getElementById("inputAmount").value;
        var convertedAmount = 0;
        if(currOut!=="Dollar") {
           var convertedDollar = inputAmount/mapDollar.get(currIn);
           convertedAmount = convertedDollar*mapDollar.get(currOut);
        }
        else {
           convertedAmount = inputAmount/mapDollar.get(currIn);
        }
        convertedAmount = convertedAmount.toFixed(2);
        console.log(convertValue);
        document.getElementById('outputAmount').innerHTML = "Converted Amount : " + "<span class='highlight'>" + convertedAmount +  "</span>" + " " + currOut;
    }    
