import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let ele=JSON.parse(localStorage.getItem('news'))

let get = async () => {
    let url = `http://api.mediastack.com/v1/news?access_key=70e250225f82fd05fd9a1daf86aa4a2a&languages=en&countries=in&limit=100`;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.data)
    append(data.data)
}
get()


function append(data) {
    let container1 = document.getElementById('top_stories')
    data.forEach((el) => {
        let div = document.createElement('div')
        let div1 = document.createElement('div')
        let img = document.createElement('img')
        img.src = el.image
        let category = document.createElement('h6')
        category.innerText = el.category;
        let title = document.createElement('h5')
        title.innerText = el.title;
        let hr = document.createElement('hr')
        div.append(category, title)
        div1.append(img, div)
        div1.setAttribute('id', 'first')
        div1.addEventListener('click', function () {
            save(el)
        })
        container1.append(div1, hr)

    });
}



let container = document.getElementById('center')
container.innerHTML=""
    let div1 = document.createElement('div')
    let img = document.createElement('img')
    img.src = ele.image;
    let title = document.getElementById('title')
    title.innerText = ele.title;
    let press = document.getElementById('desc')
    press.innerText = `Press ${ele.source}`;
    let date = document.getElementById('date')
    date.innerText = ` | Updated: ${ele.published_at}`;
    let place = document.getElementById('place')
    place.innerText = `,${ele.country}`;
    let des = document.createElement('p')
    des.innerText = ele.description; 
    div1.append(img, des)

let newsline = document.getElementById('newsline')
newsline.innerText = ele.title

    container.append(div1);


let newslin = document.getElementById('newspage')
newslin.innerHTML = "All India"
newslin.onclick=functio()

function save(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "../india/trend_news.html";
}
function functio() {
    window.location.href="/india.html"
}