const lunch = [
  {
    id: 1,
    name: "Chana Masala",
    description: "A delicious and aromatic chickpea curry, simmered in a rich tomato sauce and infused with a blend of traditional Indian spices like cumin, coriander, turmeric, and garam masala.",
    price: "£8.90"
  },
  {
    id: 2,
    name: "Dal Makhani",
    description: "Rich and creamy North-Indian dish featuring slow-cooked black lentils and kidney beans, simmered in a buttery sauce and aromatic spices.",
    price: "£8.90"
  },
  {
    id: 3,
    name: "Sev Tomato",
    description: "A popular light dish from Western India, a mild spicy and tangy tomato gravy generously topped with crispy Sev (crispy chickpea flour noodles).",
    price: "£7.90"
  },
  {
    id: 4,
    name: "Paneer Kadai",
    description: "A popular North-Indian dish, paneer cooked with peppers, onions and tomatoes in a kadai (wok).",
    price: "£9.80"
  },
  {
    id: 5,
    name: "Paneer Tikka Masala",
    description: "Marinated and grilled paneer in an onion-tomato based gravy.",
    price: "£10.40"
  },
  {
    id: 6,
    name: "Paneer Bhurji",
    description: "Flavourful and spicy scrambled paneer dish cooked with onions, tomatoes and aromatic spices.",
    price: "£10.40"
  },
  {
    id: 7,
    name: "Palak Paneer",
    description: "Paneer cubes cooked with a generous amount of finely chopped spinach, providing a healthy and green touch.",
    price: "£9.90"
  },
  {
    id: 8,
    name: "Paneer Butter Masala",
    description: "Paneer in a rich, creamy and mildly spiced onion-tomato-based gravy.",
    price: "£10.90"
  },
  {
    id: 9,
    name: "Achari Paneer Masala",
    description: "Paneer in a tangy and spicy gravy infused with a distinctive blend of pickling spices.",
    price: "£9.70"
  },
  {
    id: 10,
    name: "Kofta Noor Jahani",
    description: "Kofta made with potatoes, paneer and vegetables, simmered in a creamy onion-tomato based mild-spicy gravy.",
    price: "£10.90"
  },
  {
    id: 11,
    name: "Veg Diwani Handi",
    description: "Assorted vegetables cooked in a rich and creamy gravy flavored with aromatic spices. 'Diwani Handi' translates to 'royal pot'.",
    price: "£10.40"
  },
  {
    id: 12,
    name: "Pau Bhaji",
    description: "Mix-vegetable curry served with lightly toasted Pau (soft bread rolls) and onion-tomato salad.",
    price: "£7.90"
  },
  {
    id: 13,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy, deep fried large size puri (Bhature).",
    price: "£7.80"
  },
  {
    id: 14,
    name: "Aloo Masala with Thepla",
    description: "Lightly spiced potato curry served with Thepla (fenugreek flatbread).",
    price: "£8.25"
  },
  {
    id: 15,
    name: "Paneer Kathi Roll",
    description: "Indian wrap with marinated and pan-fried paneer, vegetables, tomato chutney and mint chutney.",
    price: "£4.75"
  },
  {
    id: 16,
    name: "Aloo-Gobi",
    description: "Potatoes and cauliflower tossed with mild spices, pan-fried for a crunchy finish.",
    price: "£7.90"
  },
  {
    id: 17,
    name: "Mushroom Matar Masala",
    description: "A curry made from mushrooms, green peas and aromatic spices.",
    price: "£7.25"
  },
  {
    id: 18,
    name: "Butter Chicken",
    description: "Chicken cooked in a spiced onion-tomato and butter-based gravy, often with a creamy texture.",
    price: "£11.60"
  },
  {
    id: 19,
    name: "Kadai Chicken",
    description: "Chicken pieces cooked with peppers, onions and tomatoes in a kadai (wok).",
    price: "£10.90"
  },
  {
    id: 20,
    name: "Chicken Tikka Masala",
    description: "Grilled chicken (chicken tikka) in a creamy-spiced tomato-based gravy.",
    price: "£11.80"
  },
  {
    id: 21,
    name: "Achari Chicken Masala",
    description: "Chicken in a tangy and spicy gravy infused with a distinctive blend of pickling spices.",
    price: "£10.70"
  },
  {
    id: 22,
    name: "Dhaba Chicken (On-the-Bone)",
    description: "Rustic North-Indian style chicken curry with bone-in pieces, cooked in onion-tomato gravy.",
    price: "£10.40"
  },
  {
    id: 23,
    name: "Dhaba Chicken (Off-the-Bone)",
    description: "Rustic North-Indian style chicken curry with boneless pieces, cooked in onion-tomato gravy.",
    price: "£10.90"
  },
  {
    id: 24,
    name: "Chicken Hariyali",
    description: "Chicken coated in a green sauce made with coriander, mint, spinach and green chillies.",
    price: "£10.90"
  },
  {
    id: 25,
    name: "Chicken Do Pyaaza",
    description: "Chicken cooked with onions and tomatoes, a mildly spiced historic Indian dish.",
    price: "£10.80"
  },
  {
    id: 26,
    name: "Chicken Danshak",
    description: "A thick, flavorful lentil-based chicken curry balancing bold spices with sweetness and tanginess.",
    price: "£10.80"
  },
  {
    id: 27,
    name: "Chicken Lababdar",
    description: "A rich and creamy North-Indian chicken curry. 'Lababdar' means utmost temptation.",
    price: "£11.40"
  },
  {
    id: 28,
    name: "Shinwari Chicken Karahi",
    description: "Northern Pakistan style karahi with chicken, tomatoes and a blend of spices.",
    price: "£10.90"
  },
  {
    id: 29,
    name: "Chicken Kofta Curry",
    description: "Minced chicken balls cooked in onion-tomato gravy with aromatic spices.",
    price: "£11.90"
  },
  {
    id: 30,
    name: "Nihari Chicken",
    description: "Slow-cooked, hearty and spicy Mughlai-style chicken stew.",
    price: "£11.50"
  },
  {
    id: 31,
    name: "Dhaba-style Anda (Egg) Curry",
    description: "Boiled eggs simmered in onion-tomato gravy with aromatic spices.",
    price: "£8.90"
  },
  {
    id: 32,
    name: "Chicken Wrap",
    description: "Indian wrap with marinated chicken strips, salad vegetables, tomato and mint chutneys.",
    price: "£4.95"
  },
  {
    id: 33,
    name: "Anda (Egg) Bhurji with Bread",
    description: "Scrambled eggs with onion-tomato masala, served with toast breads (x3).",
    price: "£7.90"
  },
  {
    id: 34,
    name: "Lamb Tikka Masala",
    description: "Grilled lamb cubes in a rich, creamy onion-tomato gravy topped with coriander.",
    price: "£13.90"
  },
  {
    id: 35,
    name: "Lamb Kofta Curry",
    description: "Minced lamb balls simmered in onion-tomato gravy with spices.",
    price: "£14.25"
  },
  {
    id: 36,
    name: "Lamb Danshak",
    description: "A rich, lentil-based curry with tender lamb, balancing spice with sweetness and tanginess.",
    price: "£13.80"
  },
  {
    id: 37,
    name: "Lamb Do Pyaaza",
    description: "Lamb cooked with onions, tomatoes and aromatic spices for a mild-spicy taste.",
    price: "£13.80"
  },
  {
    id: 38,
    name: "Sunwari Lamb Karahi",
    description: "Traditional lamb karahi cooked with its own fat, tomatoes, garlic and green chillies.",
    price: "£13.90"
  },
  {
    id: 39,
    name: "Lamb Chop Curry",
    description: "Pan-cooked lamb chops enriched with herbs like rosemary and garlic.",
    price: "£14.50"
  },
  {
    id: 40,
    name: "Nihari Lamb",
    description: "Slow-cooked, hearty Mughlai-style lamb stew with rich spices.",
    price: "£13.50"
  },
  {
    id: 41,
    name: "Shahi Jheenga Masala (Prawns)",
    description: "Prawns simmered in tomato gravy, flavored with tamarind sauce for a spicy-sour taste.",
    price: "£14.25"
  }
];
export default lunch;