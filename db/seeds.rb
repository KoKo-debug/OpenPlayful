# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.delete_all
User.delete_all
Cafe.delete_all
Location.delete_all

l1 = Location.create!(
  name: "New York",
  lat: 22.2444,
  long: 13.1313
  )
  
l2 = Location.create!(
  name: "Florida",
  lat: 55.2444,
  long: 23.1313
  )
  
l3 = Location.create!(
  name: "California",
  lat: 35.2444,
  long: 24.1313
  )

c1 = Cafe.create!(
  name: "Joey's Kangaroo Cafe",
  animal: "Kangaroo",
  description: "drink tea while petting kangaroos. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
  cost: 2,
  number_reviews: 3,
  address: "35th St.",
  city: "New York",
  country: "United States",
  lat: 40.7128,
  long: 74.0060,
  location_id: 1,
  phone_number: "232-131-1255"
)

c2 = Cafe.create!(
  name: "Sleepy Cat Cafe",
  animal: "Cat",
  description: "drink eat with sleeping cats",
  cost: 3,
  number_reviews: 5,
  address: "12 Main St.",
  city: "Orlando",
  country: "United States",
  lat: 27.6648,
  long: 81.5158,
  location_id: 2,
  phone_number: "538-131-1455"
)

c3 = Cafe.create!(
  name: "Sleeping Sheep",
  animal: "Sheep",
  description: "A ver long description much longer than others. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
  cost: 2,
  number_reviews: 11,
  address: "19 Monkey Dr.",
  city: "Long Beach",
  country: "United States",
  lat: 36.7783,
  long: 119.4179,
  location_id: 3,
  phone_number: "992-581-2155"
)

c4 = Cafe.create!(
  name: "Doggy Den",
  animal: "Dog",
  description: "Food, drinks, and dogs. Big and small, cute and ugly.",
  cost: 4,
  number_reviews: 2,
  address: "10 Silver Rd.",
  city: "New York",
  country: "United States",
  lat: 42.5128,
  long: 73.7560,
  location_id: 1,
  phone_number: "552-291-3585"
)


user1 = User.create!(
  first_name: "Tommy",
  last_name: "Cat",
  email: "tommy@gmail.com",
  password: "hunter22",
  location_id: 1
)

user2 = User.create!(
  first_name: "Andy",
  last_name: "Randy",
  email: "randy@gmail.com",
  password: "hunter11",
  location_id: 2
)

demo = User.create!(
  first_name: "John",
  last_name: "Doe",
  email: "demo@gmail.com",
  password: "demopass",
  location_id: 3
)


photo1 = Photo.create!(
  name: "Unicorn",
  url: "https://open-playful-public.s3.amazonaws.com/unicorn.png",
  cafe_id: 3
)

photo2 = Photo.create!(
  name: "TableDog",
  url: "https://open-playful-public.s3.amazonaws.com/puppy-table.png",
  cafe_id: 4
)

photo3 = Photo.create!(
  name: "Kangaroo",
  url: "https://open-playful-public.s3.amazonaws.com/kangaroo.png",
  cafe_id: 1
)

photo4 = Photo.create!(
  name: "WelcomCat",
  url: "https://open-playful-public.s3.amazonaws.com/welcome-cat.png",
  cafe_id: 2
)

photo5 = Photo.create!(
  name: "pasta",
  url: "https://open-playful-public.s3.amazonaws.com/closes-up-photo-of-macaroni-1437267.jpg",
  cafe_id: 3
)

photo6 = Photo.create!(
  name: "Tiger",
  url: "https://open-playful-public.s3.amazonaws.com/angry-animal-big-carnivore-302304.jpg",
  cafe_id: 2
)

photo7 = Photo.create!(
  name: "flourHands",
  url: "https://open-playful-public.s3.amazonaws.com/baked-baking-chef-dough-784633.jpg",
  cafe_id: 2
)

photo8 = Photo.create!(
  name: "cookingTrunk",
  url: "https://open-playful-public.s3.amazonaws.com/baking-cheese-cooking-crust-315755.jpg",
  cafe_id: 1
)

photo9 = Photo.create!(
  name: "burgers",
  url: "https://open-playful-public.s3.amazonaws.com/food-dinner-lunch-unhealthy-70497.jpg",
  cafe_id: 1
)

photo10 = Photo.create!(
  name: "veggies",
  url: "https://open-playful-public.s3.amazonaws.com/lunch-table-5929.jpg",
  cafe_id: 4
)

photo11 = Photo.create!(
  name: "ape",
  url: "https://open-playful-public.s3.amazonaws.com/view-ape-thinking-primate-33535.jpg",
  cafe_id: 3
)

photo12 = Photo.create!(
  name: "Elephant",
  url: "https://open-playful-public.s3.amazonaws.com/view-of-elephant-in-water-247431.jpg",
  cafe_id: 4
)

photo13 = Photo.create!(
  name: "cutlet",
  url: "https://open-playful-public.s3.amazonaws.com/fried-meat-on-top-of-white-plate-1059943.jpg",
  cafe_id: 1
)

photo14 = Photo.create!(
  name: "yogurt",
  url: "https://open-playful-public.s3.amazonaws.com/bowl-breakfast-calcium-cereal-414262.jpg",
  cafe_id: 1
)

photo15 = Photo.create!(
  name: "steakfood",
  url: "https://open-playful-public.s3.amazonaws.com/steak-food-769289.jpg",
  cafe_id: 1
)

photo16 = Photo.create!(
  name: "dogBread",
  url: "https://open-playful-public.s3.amazonaws.com/slice-of-loaf-bread-with-dog-face-920220.jpg",
  cafe_id: 1
)

photo17 = Photo.create!(
  name: "chickenLeaf",
  url: "https://open-playful-public.s3.amazonaws.com/fries-with-leaves-dish-718742.jpg",
  cafe_id: 1
)

photo18 = Photo.create!(
  name: "Burito",
  url: "https://open-playful-public.s3.amazonaws.com/burrito-chicken-delicious-dinner-461198.jpg",
  cafe_id: 1
)

review1 = Review.create!(
  rating: 4,
  body: "Great food, had a good time.",
  overall: 4,
  food: 5,
  service: 3,
  value: 3,
  ambience: 4,
  user_id: 1,
  cafe_id: 1
)

review1 = Review.create!(
  rating: 4,
  body: "Great food, had a good time.",
  overall: 4,
  food: 5,
  service: 3,
  value: 3,
  ambience: 4,
  user_id: 1,
  cafe_id: 1
)

review1 = Review.create!(
  rating: 2,
  body: "Had a rough time. Food was okay but the place was very smelly",
  overall: 2,
  food: 3,
  service: 1,
  value: 2,
  ambience: 1,
  user_id: 3,
  cafe_id: 1
)

review1 = Review.create!(
  rating: 5,
  body: "I will come back again, it was a great experience.",
  overall: 5,
  food: 3,
  service: 4,
  value: 4,
  ambience: 4,
  user_id: 2,
  cafe_id: 1
)