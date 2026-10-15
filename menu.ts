export type MenuItem = {name:string; price?:number; sizes?:{label:string;price:number}[]; note?:string};
export const menu: Record<string, MenuItem[]> = {
  'Sandwich & Shawarma': [
    {name:'Sub Sandwich',price:160,note:'Regular'}, {name:'Cheesy Sub Sandwich',price:180},
    {name:'Bbq Cheesy Sub Sandwich',price:200},{name:'Chicken Shawarma',price:160},{name:'Cheesy Wrap',price:200}
  ],
  'Soup & Cream': [
    {name:'Thai Thick Soup',price:20,note:'1×3'}, {name:'Chicken Corn Soup',price:280,note:'1×3'},
    {name:'Cream Of Mushroom',price:450,note:'1×3'}
  ],
  Burger: [
    {name:'Crispy Chicken Burger',price:160},{name:'Chicken Cheese Burger',price:180},{name:'Naga Cheese Burger',price:200},
    {name:'Crispy Cheese Burger',price:220},{name:'Bbq Chicken Cheese Burger',price:200},{name:'Chicken Classic Burger',price:220},
    {name:'Beef Cheese Blast',price:300},{name:'Chef Special Burger',price:320}
  ],
  'Chow Mein': [
    {name:'Chicken Chow Mein',price:320},{name:'Foodlab Special Chowmein',price:350},{name:'Beef Chowmein',price:400}
  ],
  Pizza: [
    {name:'Mexican Jhal Pizza',sizes:[{label:'10"',price:400},{label:'12"',price:600}]},
    {name:'Bbq Temptation Pizza',sizes:[{label:'10"',price:500},{label:'12"',price:620}]},
    {name:'Tandoori Chicken Pizza',sizes:[{label:'10"',price:550},{label:'12"',price:700}]},
    {name:'Chicken Supreme Pizza',sizes:[{label:'10"',price:520},{label:'12"',price:680}]},
    {name:'Beef Supreme Pizza',sizes:[{label:'10"',price:580},{label:'12"',price:750}]},
    {name:'Four Seasons Pizza',sizes:[{label:'10"',price:550},{label:'12"',price:700}]},
    {name:'Beef/Mutton Kala Vuna Pizza',sizes:[{label:'10"',price:660},{label:'12"',price:850}]},
    {name:'Pizza Badshah',sizes:[{label:'10"',price:750},{label:'12"',price:1000}]},
    {name:'Half Supreme Half Bbq Pizza',sizes:[{label:'10"',price:540},{label:'12"',price:720}]}
  ],
  Pasta: [
    {name:'White Sauce Pasta',price:210},{name:'Red Sauce Pasta',price:220},{name:'Naga Pasta',price:240},
    {name:'Creamy Oven Baked Pasta',price:280},{name:'Naga Baked Pasta',price:300},{name:'Pasta Basta',price:320}
  ],
  'Coffee & Shake': [
    {name:'Cold Coffee',price:100},{name:'Chocolate Cold Coffee',price:120},{name:'Regular Coffee',price:70},
    {name:'Lacchi',price:80},{name:'Special Lacchi',price:120},{name:'Chocolate Milkshake',price:150},
    {name:'Vanilla Milkshake',price:150},{name:'Strawberry Milkshake',price:150},{name:'Oreo Milkshake',price:170},
    {name:'Kitkat Milkshake',price:180},{name:'Soft Drinks',note:'MRP'},{name:'Water',note:'MRP'}
  ],
  'Set Menu 1': [{name:'Egg Fried Rice + Chicken Tandoori + Masala Chicken + Chinese Vegetables'}],
  'Rice Item': [
    {name:'Egg Fried Rice',price:300,note:'1×3'},{name:'Mexican Fried Rice',price:350},{name:'Mixed Fried Rice',price:390},
    {name:'Basmati Rice',price:340,note:'1×3'},{name:'Plain Polaw',price:240,note:'1×3'},{name:'Achari Biriyani Rice',price:280,note:'1×3'}
  ],
  Vegetables: [{name:'Chinese Vegetables',price:280},{name:'Special Chinese Vegetables',price:330}],
  'Curry Item': [
    {name:'Masala Chicken',price:330,note:'1×3'},{name:'Achari Chicken Masala',price:380,note:'1×3'},
    {name:'Chicken Sizzling',price:350,note:'1×3'},{name:'Beef Masala',price:430,note:'1×3'},
    {name:'Chicken Roast 1pc',price:150,note:'Sonali'},{name:'Beef Rejala',price:280,note:'1×3'},
    {name:'Mutton Rejala',price:300,note:'1×3'},{name:'Achari Chicken Roast',price:160,note:'1×3'},
    {name:'Cashew Nut Salad',price:350,note:'1×3'}
  ],
  'Indian Platters': [
    {name:'Basmati Polao, Gujrati Vegetable, Dal Butter Fry',price:200},
    {name:'Basmati Polao, Tandoori Chicken, Dal Butter Fry',price:260},
    {name:'Basmati Polao, Chicken Mughlai, Dal Butter Fry',price:250},
    {name:'Basmati Polao, Chicken Masala, Dal Butter Fry',price:240}
  ]
};