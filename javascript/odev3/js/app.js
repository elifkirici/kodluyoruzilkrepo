const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];



let copyArray = menu;

var btnDOM = document.querySelector("#buttonfilter");

let btn = document.createElement("button");
btn.setAttribute("class", "btn-item");
btn.setAttribute("name", "btn1");
btn.innerHTML = "ALL";
btnDOM.appendChild(btn);

btn.addEventListener("click", () => {
  copyArray = menu;
  const Bigdiv = document.createElement("div");
  copyArray.map((menuitem) => {
    const div = document.createElement("div");
    Bigdiv.classList.add("row")
    div.classList.add("menu-items");
    div.classList.add("col-sm-6");
    div.innerHTML = `
    <img class="photo" src="${menuitem.img}" alt="${menuitem.title}">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${menuitem.title}</h4>
        <h4 class="price">${menuitem.price}</h4>
      </div>
      <div class="menu-text">${menuitem.desc}</div>
    </div>
`;
      Bigdiv.appendChild(div)
      
    const section = document.getElementById("section");
    section.innerHTML=Bigdiv.innerHTML
  });
 
});

let btn2 = document.createElement("button");
btn2.setAttribute("class", "btn-item");
btn2.setAttribute("name", "btn2");
btn2.innerHTML = "Korea";
btnDOM.append(btn2);
btn2.addEventListener("click", () => {
  copyArray = menu.filter((menuitem) => menuitem.category === "Korea");

  const Bigdiv = document.createElement("div");
  copyArray.map((menuitem) => {
    const div = document.createElement("div");
    div.classList.add("menu-items");
    div.classList.add("col-sm-6");
    div.innerHTML = `
      <img class="photo" src="${menuitem.img}" alt="${menuitem.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${menuitem.title}</h4>
          <h4 class="price">${menuitem.price}</h4>
        </div>
        <div class="menu-text">${menuitem.desc}</div>
      </div>
  
  `;
  Bigdiv.appendChild(div)
      
  const section = document.getElementById("section");
  section.innerHTML=Bigdiv.innerHTML
  });
});


let btn3 = document.createElement("button");
btn3.setAttribute("class", "btn-item");
btn3.setAttribute("name", "btn3");
btn3.innerHTML = "Japan";
btnDOM.append(btn3);
btn3.addEventListener("click", () => {
  copyArray = menu.filter((menuitem) => menuitem.category === "Japan");
  const Bigdiv = document.createElement("div");
  copyArray.map((menuitem) => {
    const div = document.createElement("div");
    div.classList.add("menu-items");
    div.classList.add("col-sm-6");
    div.innerHTML = `
    <img class="photo" src="${menuitem.img}" alt="${menuitem.title}">
    <div class="menu-info">
    <div class="menu-title">
    <h4>${menuitem.title}</h4>
    <h4 class="price">${menuitem.price}</h4>
    </div>
    <div class="menu-text">${menuitem.desc}</div>
    </div>
    `;
    Bigdiv.appendChild(div)
      
    const section = document.getElementById("section");
    section.innerHTML=Bigdiv.innerHTML
  });
});

let btn4 = document.createElement("button");
btn4.setAttribute("class", "btn-item");
btn4.setAttribute("name", "btn4");
btn4.innerHTML = "China";
btnDOM.append(btn4);
btn4.addEventListener("click", () => {
  copyArray = menu.filter((menuitem) => menuitem.category === "China");
  const Bigdiv = document.createElement("div");
  copyArray.map((menuitem) => {
    const div = document.createElement("div");
    div.classList.add("menu-items");
    div.classList.add("col-sm-6");
    div.innerHTML = ` 
    <img class="photo" src="${menuitem.img}" alt="${menuitem.title}">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${menuitem.title}</h4>
        <h4 class="price">${menuitem.price}</h4>
      </div>
      <div class="menu-text">${menuitem.desc}</div>
    </div>
 `;
 Bigdiv.appendChild(div)
      
 const section = document.getElementById("section");
 section.innerHTML=Bigdiv.innerHTML
  });
});

window.addEventListener("load", () => {
  btn.click();
});
