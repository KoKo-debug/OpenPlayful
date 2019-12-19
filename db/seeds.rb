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
  long: -74.0060,
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
  long: -81.5158,
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
  lat: 33.7703,
  long: -118.1939,
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
  long: -73.7560,
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
  rating: 5,
  body: "This place was nearby and I decided to check it out. The desserts must be sprinkled with crack because I just craved for more and more. The service was good for the most part but the waiter was a bit tired. It could have been perfect, but the floors were a little sticky..",
  overall: 4,
  food: 5,
  service: 3,
  value: 2,
  ambience: 4,
  user_id: 1,
  cafe_id: 1
)

review2 = Review.create!(
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

review3 = Review.create!(
  rating: 3,
  body: "This is one of my favorite places. I found the ambiance to be very charming. Try out the huge selection of incredible appetizers. After my meal, I was knocked into a food coma. I'm definitely coming back for more!",
  overall: 5,
  food: 3,
  service: 4,
  value: 4,
  ambience: 4,
  user_id: 2,
  cafe_id: 1
)

review4 = Review.create!(
  rating: 3,
  body: "I'm torn about this place. The steak was a little dry. The waitress was nothing remarkable. I had a satisfactory experience and will have to try it again.",
  overall: 2,
  food: 3,
  service: 3,
  value: 4,
  ambience: 1,
  user_id: 2,
  cafe_id: 2
)

review4 = Review.create!(
  rating: 3,
  body: "I'm torn about this place. The steak was a little dry. The waitress was nothing remarkable. I had a satisfactory experience and will have to try it again.",
  overall: 2,
  food: 3,
  service: 3,
  value: 4,
  ambience: 1,
  user_id: 2,
  cafe_id: 3
)

review4 = Review.create!(
  rating:4,
  body: "Yummers! Everything was just so yummy. Try out the huge selection of incredible appetizers. The decor was unique and incredible. The food was flavorful, savory, and succulent. This is definitely a spot I'll be frequenting.",
  overall: 2,
  food: 4,
  service: 5,
  value: 5,
  ambience: 5,
  user_id: 2,
  cafe_id: 4
)

review4 = Review.create!(
  rating: 2,
  body: "I really wanted to like this place. The chicken was undercooked. This place is very dumpy and in a serious need of a fresh paint job. I felt the prices were too high given the quality of the food. 2 stars.",
  overall: 2,
  food: 3,
  service: 2,
  value: 1,
  ambience: 1,
  user_id: 1,
  cafe_id: 2
)