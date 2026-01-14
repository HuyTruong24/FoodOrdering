export let restaurants = [
  {
    id: 1,
    name: "Tim Hortons",
    storeImg: "../images/tim-horton-store.jpg",
    image: "../images/tim-hortons-logo.jpg",
    ratings: 4,
    categories: ["Coffee", "Bagel", "Donut", "Iced Capp"],
    menu: [
      {
        foodID: 100,
        foodName: "Iced Capp",
        price: 369,
        foodImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0PL2arjEKbSzhNHlYiHRS3IReSjvLBdfGg&s",
        keywords: ["Iced Capp"],
      },
      {
        foodID: 110,
        foodName: "Mocha Iced Capp",
        price: 449,
        foodImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApGnuxIx6bEDvT9trNkbbAza00iP5PkDovw&s",
        keywords: ["Mocha Iced Capp", "mocha"],
      },
      {
        foodID: 120,
        foodName: "Original Blend Coffee",
        price: 183,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/20611dc0947e6e78506388eca0881b7261d47696-410x412.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Original Blend Coffee", "coffee", "blend", "brewed"],
      },
      {
        foodID: 130,
        foodName: "Dark Roast Coffee",
        price: 183,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/24be85fd98bbb799023cb1f15524efed168fe048-880x884.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Dark Roast Coffee", "coffee", "brewed"],
      },
      {
        foodID: 140,
        foodName: "Decaf Coffee",
        price: 183,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/20611dc0947e6e78506388eca0881b7261d47696-410x412.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Decaf Coffee", "decaf", "brewed"],
      },
      {
        foodID: 150,
        foodName: "Original Blend Coffee Take 12",
        price: 1999,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/675bf3fb95c4697bac5fcbd748d947cda7b6c186-878x582.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Original Blend Coffee Take 12", "coffee", "12", "brewed"],
      },
      {
        foodID: 160,
        foodName: "Original Iced Coffee",
        price: 249,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/0a4a8a2e235571c7adc5f6d524b492cf4e52a4c4-414x424.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Original Iced Coffee", "coffee"],
      },
      {
        foodID: 170,
        foodName: "Plain Bagel",
        price: 219,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/84a2fee8a4f2429562b9531c34c8c967e5acbfff-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Plain Bagel", "bagel"],
      },
      {
        foodID: 180,
        foodName: "Everything Bagel",
        price: 219,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/55a5ee3b155a209f441f833690a722bb9194c081-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Everything Bagel", "bagel"],
      },
      {
        foodID: 190,
        foodName: "Cinnamon Raisin Bagel",
        price: 219,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/8c0d7ae9c8470e654e602c45e90082105e93ffa8-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Cinnamon Raisin Bagel", "bagel"],
      },
      {
        foodID: 200,
        foodName: "Twelve Grain Bagel",
        price: 219,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/8e45b106b3232b54f752bc17c3864aea31dda739-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Twelve Grain Bagel", "bagel"],
      },
      {
        foodID: 210,
        foodName: "Bulk Cream Cheese",
        price: 349,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/dee270a5c9420b8aa761bc194224355de3de95eb-1128x867.jpg?w=320&q=40&fit=max&auto=format",
        keywords: ["Bulk Cream Cheese", "bagel"],
      },
      {
        foodID: 220,
        foodName: "Boston Cream",
        price: 159,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/3bbdbf18091208f433cba8a065382295893b90d5-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Boston Cream", "donut"],
      },
      {
        foodID: 230,
        foodName: "Chocolate Dip",
        price: 159,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/93f9b25ede186aede3eecabbed80b161cd8a976a-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Chocolate Dip", "donut"],
      },
      {
        foodID: 240,
        foodName: "Old Fashioned Plain",
        price: 159,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/79bb3322de1dd259f233405c8adf6cacad6fcc77-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Old Fashioned Plain", "donut"],
      },
      {
        foodID: 250,
        foodName: "Honey Dip",
        price: 159,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/35333e7ec593f093acf7fa45df610dde391800df-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Honey Dip", "donut"],
      },
      {
        foodID: 260,
        foodName: "Vanilla Dip",
        price: 159,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/3ffe093de492b3f686e23732e6274e13efee2eb1-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Vanilla Dip", "donut"],
      },
      {
        foodID: 270,
        foodName: "Chocolate Glazed",
        price: 159,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/2113c4e8fc174c3cde5fd0da8853a803027cc0b2-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Chocolate Glazed", "donut"],
      },
      {
        foodID: 280,
        foodName: "Double Glazed",
        price: 159,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/3422cae5fe7678db77dc5639ebc7804f3eae3a76-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Double Glazed", "donut"],
      },
      {
        foodID: 290,
        foodName: "Sour Cream Glazed",
        price: 159,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/c729c1a7536a185fd6d16fd104524e3c4c51c55a-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Sour Cream Glazed", "donut"],
      },
      {
        foodID: 300,
        foodName: "Honey Cruller",
        price: 159,
        foodImage:
          "https://cdn.sanity.io/images/czqk28jt/prod_th_us/bb29b23691abf9b986372eac1750b05dd970a532-1024x1024.png?w=320&q=40&fit=max&auto=format",
        keywords: ["Honey Cruller", "donut"],
      },
    ],
  },
  {
    id: 2,
    name: "New York Fries",
    storeImg: "../images/new-york-store.jpg",
    image: "../images/new-york-fries-logo.webp",
    ratings: 4.5,
    categories: ["Fries", "Poutine", "Hot Dog", "Drinks"],
    menu: [
      {
        foodID: 310,
        foodName: "Fresh-Cut Fries",
        price: 559,
        foodImage:
          "https://static.wixstatic.com/media/bdf8b6_1fcfd5dc2e854d56ba7c702008456aec~mv2.png/v1/fill/w_619,h_451,al_c,lg_1,q_85,enc_auto/products_fries_03.png",
        keywords: ["fries"],
      },
      {
        foodID: 320,
        foodName: "Pulled Pork",
        price: 849,
        foodImage:
          "https://static.wixstatic.com/media/bdf8b6_17c57962f92b40aab26068782cf4f8dc~mv2.png/v1/fill/w_700,h_535,al_c,q_90,enc_auto/bdf8b6_17c57962f92b40aab26068782cf4f8dc~mv2.png",
        keywords: ["poutine", "pulled pork"],
      },
      {
        foodID: 330,
        foodName: "Classic Poutine",
        price: 849,
        foodImage:
          "https://static.wixstatic.com/media/bdf8b6_f400787eacee4e12ac6896129218336f~mv2.png/v1/fill/w_632,h_406,al_c,lg_1,q_85,enc_auto/classic_poutine.png",
        keywords: ["classic", "poutine"],
      },
      {
        foodID: 340,
        foodName: "Flamin' Bacon Fries",
        price: 849,
        foodImage:
          "https://static.wixstatic.com/media/bdf8b6_0e02507e701a44d892adb0d0b4da03e5~mv2.png/v1/fill/w_700,h_515,al_c,q_90,enc_auto/bdf8b6_0e02507e701a44d892adb0d0b4da03e5~mv2.png",
        keywords: ["bacon", "fries"],
      },
      {
        foodID: 350,
        foodName: "Nacho Fries",
        price: 849,
        foodImage:
          "https://static.wixstatic.com/media/bdf8b6_b0cf143f495d498f97199f07af3ffcac~mv2.png/v1/fill/w_612,h_390,al_c,lg_1,q_85,enc_auto/NachoFries-min.png",
        keywords: ["nacho", "fries"],
      },
      {
        foodID: 360,
        foodName: "Veggie Fries",
        price: 849,
        foodImage:
          "https://static.wixstatic.com/media/bdf8b6_a1733e44e1f34252b7385b32c13d86f4~mv2.png/v1/fill/w_618,h_418,al_c,lg_1,q_85,enc_auto/veggie_works_poutine.png",
        keywords: ["veggie", "fries"],
      },
      {
        foodID: 370,
        foodName: "Butter Chicken Poutine",
        price: 849,
        foodImage:
          "https://static.wixstatic.com/media/bdf8b6_d2ca75d411124744b186427e7458f36f~mv2.png/v1/fill/w_620,h_415,al_c,lg_1,q_85,enc_auto/butterchicken_poutine.png",
        keywords: ["butter", "chicken", "poutine"],
      },
      {
        foodID: 380,
        foodName: "Chili Poutine",
        price: 849,
        foodImage:
          "https://static.wixstatic.com/media/bdf8b6_a3753faee036470d82c8dbfee417f6aa~mv2.png/v1/fill/w_644,h_454,al_c,lg_1,q_85,enc_auto/chili_poutine.png",
        keywords: ["chili", "poutine"],
      },
      {
        foodID: 390,
        foodName: "Chili Cheese Fries",
        price: 849,
        foodImage:
          "https://static.wixstatic.com/media/bdf8b6_41d22adc84294682aa712c1063eddcfb~mv2.png/v1/fill/w_626,h_445,al_c,lg_1,q_85,enc_auto/chili_cheese_fries.png",
        keywords: ["chili", "cheese", "fries"],
      },
      {
        foodID: 400,
        foodName: "Premium Hot Dog",
        price: 599,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-09e113ffa5ddfe39d06c.jpg&w=3840&q=75",
        keywords: ["Hot", "Dog", "premium"],
      },
      {
        foodID: 410,
        foodName: "Pepsi",
        price: 299,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-70eab84aede480b11ed2.png&w=750&q=75",
        keywords: ["pepsi", "beverages", "drinks"],
      },
      {
        foodID: 420,
        foodName: "Aquafina Water",
        price: 299,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-6c10a7c2a45ca2d3bf7d.png&w=3840&q=75",
        keywords: ["water", "beverages", "drinks", "aquafina"],
      },
    ],
  },
  {
    id: 3,
    name: "A Little Pizza Heaven",
    storeImg: "../images/little-pizza-store.jpg",
    image:
      "https://menu-images-static.skipthedishes.com/images/resized/small-b1d7a4fb7c9078cac8c0.jpg",
    ratings: 3.5,
    categories: ["Pizza", "Chicken", "Salad"],
    menu: [
      {
        foodID: 430,
        foodName: "Cauliflower Specialty",
        price: 2950,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-49045a4c0485a0a28a6a.jpeg&w=750&q=75",
        keywords: ["pizza", "Cauliflower", "Specialty"],
      },
      {
        foodID: 440,
        foodName: "Gluten Friendly Specialty",
        price: 2950,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-07dd878917ec690ee603.jpeg&w=750&q=75",
        keywords: ["pizza", "gluten", "Specialty"],
      },
      {
        foodID: 450,
        foodName: "Breaded Chicken Bites",
        price: 1300,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-d46468dae06829b95072.jpeg&w=750&q=75",
        keywords: ["breaded", "chicken", "Specialty"],
      },
      {
        foodID: 460,
        foodName: "Caesar salad",
        price: 700,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-2ee2d9163a5b415f1504.jpeg&w=750&q=75",
        keywords: ["salad", "Caesar"],
      },
      {
        foodID: 470,
        foodName: "Cheese salad",
        price: 800,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-bb1cdff59f6be46dc6fc.jpeg&w=750&q=75",
        keywords: ["salad", "cheese"],
      },
      {
        foodID: 480,
        foodName: "Greek salad",
        price: 800,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-bb1cdff59f6be46dc6fc.jpeg&w=750&q=75",
        keywords: ["salad", "greek"],
      },
      {
        foodID: 490,
        foodName: "Vegan Chicken Tenders",
        price: 1300,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-d46468dae06829b95072.jpeg&w=750&q=75",
        keywords: ["chicken", "vegan", "tenders"],
      },
    ],
  },
  {
    id: 4,
    name: "Boston Pizza",
    storeImg: "../images/boston-pizza-store.jpg",
    image: "../images/boston-pizza-logo.png",
    ratings: 4.8,
    categories: ["Pasta", "Pizza", "Salad"],
    menu: [
      {
        foodID: 500,
        foodName: "Mac & Cheese",
        price: 2229,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-fb99283b6c87d86ef24e.png&w=3840&q=75",
        keywords: ["Mac", "Cheese", "pasta"],
      },
      {
        foodID: 510,
        foodName: "Creamy Mushroom Spinach Bake",
        price: 2229,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-773784c340f530723f9f.png&w=750&q=75",
        keywords: ["creamy", "mushroom", "pasta", "spinach", "bake"],
      },
      {
        foodID: 520,
        foodName: "Smoky Spaghetti Meatballs",
        price: 3000,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-32e215040bfb71d2b303.png&w=750&q=75",
        keywords: ["pasta", "Spaghetti", "Meatballs", "Smoky"],
      },
      {
        foodID: 530,
        foodName: "Boston's Lasagna",
        price: 2290,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-bfbfd1576f8105e145e3.png&w=750&q=75",
        keywords: ["Lasagna", "pasta"],
      },
      {
        foodID: 540,
        foodName: "Pepperoni & Bacon Pizza - 8 x 8",
        price: 1949,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-42ec9fd32f0635f223d8.png&w=3840&q=75",
        keywords: ["pizza", "Pepperoni", "Bacon"],
      },
      {
        foodID: 550,
        foodName: "Buffalo Chicken Pizza - 8 x 8",
        price: 1949,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-d78204b5d7c37dbfcb9e.png&w=750&q=75",
        keywords: ["Buffalo", "Chicken", "Pizza"],
      },
      {
        foodID: 560,
        foodName: "Small (10) Spicy Perogy",
        price: 2299,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-6034d8fe6d2aa031ae95.png&w=750&q=75",
        keywords: ["spicy", "Perogy", "pizza", "Small"],
      },
      {
        foodID: 570,
        foodName: "Medium (13) Spicy Perogy",
        price: 3839,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-6034d8fe6d2aa031ae95.png&w=750&q=75",
        keywords: ["spicy", "Perogy", "pizza", "Medium"],
      },
      {
        foodID: 580,
        foodName: "Large (15) Spicy Perogy",
        price: 3179,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-6034d8fe6d2aa031ae95.png&w=750&q=75",
        keywords: ["spicy", "Perogy", "pizza", "Large"],
      },
      {
        foodID: 600,
        foodName: "Halftime Squarefooter",
        price: 3239,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-15fe0314b140c599892b.png&w=750&q=75",
        keywords: ["Squarefooter", "Halftime", "pizza"],
      },
      {
        foodID: 610,
        foodName: "Hawaiian",
        price: 3499,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-3f362c9be2655631b2a1.png&w=750&q=75",
        keywords: ["Hawaiian", "pizza"],
      },
      {
        foodID: 620,
        foodName: "Fiesta Salad",
        price: 2229,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-26cad15f468c4a587f2d.png&w=3840&q=75",
        keywords: ["Fiesta", "salad"],
      },
      {
        foodID: 630,
        foodName: "Barbacoa Burrito Bowl",
        price: 2339,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-42d7b3c3e3a2412bdd8c.png&w=750&q=75",
        keywords: ["Burrito", "salad", "bowl", "Barbacoa"],
      },
      {
        foodID: 640,
        foodName: "Salmon Power Bowl",
        price: 2739,
        foodImage:
          "https://www.skipthedishes.com/_next/image?url=https%3A%2F%2Fmenu-images-static.skipthedishes.com%2Fimages%2Fresized%2Fitem-7e72ac0db95283e63d73.png&w=750&q=75",
        keywords: ["Salmon", "salad", "bowl"],
      },
    ],
  },
];
export const tokenName = "accessToken";
const accessToken = getCookie(tokenName);
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const part of cookies) {
    const [key, value] = part.split("=");
    if (key === name) return value;
  }
  return null;
}
export function saveCookie(name, token) {
  document.cookie = `${name}=${token}; path=/; max-age=3600`;
}
export async function loadAllRestaurants() {
  const res = await fetch("http://localhost:3000/api/restaurants", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw {
      message: "Failed to get data for all restaurants",
      status: res.status,
    };
  }
  const { data } = await res.json();
  console.log(data);
  return data;
}
export async function getRestaurant(restuarantID) {
  const res = await fetch(
    `http://localhost:3000/api/restaurants/${restuarantID}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!res.ok) {
    throw {
      message: res.msg,
      status: res.status,
    };
  }
  const { data } = await res.json();
  return data;
}
export async function getFood(foodID) {
  const res = await fetch(`/api/food/${foodID}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    throw {
      message: res.msg,
      status: res.status,
    };
  }
  const { data } = await res.json();
  console.log(data);
  return data;
}
export async function filterFood(restaurantID, userInput) {
  const res = await fetch(
    `/api/food/filter?restaurantID=${restaurantID}&value=${userInput}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!res.ok) {
    throw {
      message: res.msg,
      status: res.status,
    };
  }
  const { data } = await res.json();
  return data;
}
export async function createUsers(email, password, retypePass) {
  const user = {
    email: email,
    password: password,
    retypePassword: retypePass,
  };
  const res = await fetch(`http://localhost:3000/api/users/signup`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: user }),
  });

  if (!res.ok) {
    throw {
      message: res.msg,
      status: res.status,
      success: false,
    };
  }
  const data = await res.json();

  return data;
}
export async function verifyCredentials(email, password) {
  const user = {
    email: email,
    password: password,
  };
  const res = await fetch(`http://localhost:3000/api/users/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: user }),
  });

  if (!res.ok) {
    throw {
      message: res.msg,
      status: res.status,
    };
  }

  const data = await res.json();

  return data;
}
