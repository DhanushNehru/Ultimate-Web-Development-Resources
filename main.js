const getNews = async () => {
  var returnData;
  const name = (new Date()).toString().split('(')[1].split(" ")[0];

  const countryResponse = await fetch("https://restcountries.com/v3.1/name/" + name + "?fullText=true");
  const data = await countryResponse.json();

  // console.log(JSON.stringify(data));
  const country = data[0].cca2;

  const code = country.toLowerCase();

  if (code == 'ae' || code == 'ar' || code == 'at' || code == 'au' || code == 'be' || code == 'bg' || code == 'br' || code == 'ca' || code == 'ch' || code == 'cn' || code == 'co' || code == 'cu' || code == 'cz' || code == 'de' || code == 'eg' || code == 'fr' || code == 'gb' || code == 'gr' || code == 'hk' || code == 'hu' || code == 'id' || code == 'ie' || code == 'il' || code == 'in' || code == 'it' || code == 'jp' || code == 'kr' || code == 'lt' || code == 'lv' || code == 'ma' || code == 'mx' || code == 'my' || code == 'ng' || code == 'nl' || code == 'no' || code == 'nz' || code == 'ph' || code == 'pl' || code == 'pt' || code == 'ro' || code == 'rs' || code == 'ru' || code == 'sa' || code == 'se' || code == 'sg' || code == 'si' || code == 'sk' || code == 'th' || code == 'tr' || code == 'tw' || code == 'ua' || code == 'us' || code == 've' || code == 'za') {

    returnData = code

  }
  else {
    returnData = null;
  }
  getData(returnData, getParam('c'), getParam('s'))

}

const getData = async (code, category, search) => {
  const api= // YOUR_API_KEY

  try {

    var url;
    if (search != null) {
      url = 'https://newsapi.org/v2/everything?q=' + search + '&apiKey='+api;
    }
    else if (code != null) {
      if (category != null) {
        url = 'https://newsapi.org/v2/top-headlines?country=' + code + '&category=' + category + '&apiKey='+api;
      } else {
        url = 'https://newsapi.org/v2/top-headlines?country=' + code + '&apiKey='+api;
      }

    } else if (code == null && category != null) {
      url = 'https://newsapi.org/v2/top-headlines?category=' + category + '&apiKey='+api;
    } else {
      url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey='+api;
    }
    
    const response = await fetch(url);
    const myJson = await response.json();
    document.querySelector('#spinner').style.display = 'none';
    var i = 0;
    myJson.articles.map((res) => {

      var d = new Date(res.publishedAt);
      var date = d.getDate() + ' ' + d.toLocaleString('default', { month: 'short' }) + ', ' + d.getFullYear();
      var description = (res.description != null) ? res.description : '';
      var notfound = "notfound.jpg"
      var content = (res.content != null) ? '<p>' + res.content + '</p>' : '';
      var author = (res.author != null) ? '<p><p><b>Author`s:</b>&nbsp;' + res.author + '</p>' : '';
      var html = '<div class="col-md-4"> <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative"> <img src="' + res.urlToImage + '" onerror=this.src="' + notfound + '" alt="' + res.title + '" class="img-fluid"> <div class="p-3 d-flex flex-column position-static"> <strong class="d-inline-block mb-2 text-primary">' + res.source.name + '</strong> <h3 class="mb-0">' + res.title + '</h3> <div class="mb-1 text-muted">' + date + '</div> <p class="card-text mb-auto">' + description + '</p> <div class="d-flex align-items-center justify-content-between"><a href="' + res.url + '">Continue reading</a> <a class="link-secondary" data-bs-toggle="offcanvas" href="#offcanvasBottom' + i + '" role="button" aria-controls="offcanvasBottom' + i + '"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path> <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path> <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path> </svg></a> </div> <div class="offcanvas offcanvas-bottom h-50" tabindex="-1" id="offcanvasBottom' + i + '" aria-labelledby="offcanvasBottomLabel' + i + '"> <div class="offcanvas-header"> <h5 class="offcanvas-title" id="offcanvasBottomLabel' + i + '">Details</h5> <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> </div> <div class="offcanvas-body small"> <p>' + res.title + '</p>' + author + ' ' + content + '<b>Url:</b>&nbsp;<a href="' + res.url + '">' + res.url + '</a> </div></div> </div></div>';

      document.querySelector('#data').innerHTML += html;
      i++;
    })


  } catch (e) {
    console.log(e)
  }

}

const getParam = (p) => {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(p);
}


getNews()
document.querySelector("#toggleMode").onclick=()=>{
  document.querySelector("body").classList.toggle("dark");
};
