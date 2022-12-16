const js_homes = document.querySelectorAll('.js-home')
const home_page = document.querySelector('.home-page')
const btn1 = document.querySelector('.btn1');
const js_products = document.querySelectorAll('.js-prod')
const product_page = document.querySelector('.product-page')
const btn2 = document.querySelector('.btn2');
const js_contacts = document.querySelectorAll('.js-contact')
const contact_page = document.querySelector('.contact-page')
const btn3 = document.querySelector('.btn3');

for (const js_home of js_homes) {
    js_home.addEventListener('click',showHome)
}

for (const js_product of js_products) {
    js_product.addEventListener('click',showProduct)
}

for (const js_contact of js_contacts) {
    js_contact.addEventListener('click',showContact)
}

function showHome () {
    home_page.classList.toggle('open')
    home_page.classList.remove('hidden')
    document.getElementById('btn-home').style.backgroundColor = "var(--secondary)"
    document.getElementById('btn-home').style.color = "#fff"
    document.getElementById('btn-product').style.backgroundColor = "#fff"
    document.getElementById('btn-product').style.color = "var(--primary)"
    document.getElementById('btn-contact').style.backgroundColor = "#fff"
    document.getElementById('btn-contact').style.color = "var(--primary)"
    btn1.classList.add('open')
    btn2.classList.remove('open')
    btn3.classList.remove('open')
    product_page.classList.remove('open')
    contact_page.classList.remove('open')
}

function showProduct () {
    product_page.classList.add('open')
    document.getElementById('btn-product').style.backgroundColor = "var(--secondary)"
    document.getElementById('btn-product').style.color = "#fff"
    document.getElementById('btn-home').style.backgroundColor = "#fff"
    document.getElementById('btn-home').style.color = "var(--primary)"
    document.getElementById('btn-contact').style.backgroundColor = "#fff"
    document.getElementById('btn-contact').style.color = "var(--primary)"
    btn2.classList.add('open')
    btn1.classList.remove('open')
    btn3.classList.remove('open')
    contact_page.classList.remove('open')
    home_page.classList.remove("open")
    home_page.classList.add('hidden')
}

function showContact () {
    contact_page.classList.add('open')
    document.getElementById('btn-contact').style.backgroundColor = "var(--secondary)"
    document.getElementById('btn-contact').style.color = "#fff"
    document.getElementById('btn-home').style.backgroundColor = "#fff"
    document.getElementById('btn-home').style.color = "var(--primary)"
    document.getElementById('btn-product').style.backgroundColor = "#fff"
    document.getElementById('btn-product').style.color = "var(--primary)"
    btn3.classList.add("open")
    btn2.classList.remove('open')
    btn1.classList.remove('open')
    product_page.classList.remove('open')
    home_page.classList.remove("open")
    home_page.classList.add('hidden')
}

window.onload = () => {
    showHome ();
}