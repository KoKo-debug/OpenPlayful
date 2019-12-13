# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Location.destroy_all
Cafe.destroy_all


c1 = Cafe.create!(
  name: "Joey's Kangaroo Cafe",
  anime: "Kangaroo",
  description: "drink tea while petting kangaroos",
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
  anime: "Cat",
  description: "drink eat with sleeping cats",
  cost: 3,
  number_reviews: 5,
  address: "12 Main St.",
  city: "Florida",
  country: "United States",
  lat: 40.7128,
  long: 74.0060,
  location_id: 1,
  phone_number: "232-131-1255"
)

c3 = Cafe.create!(
  name: "Joey's Kangaroo Cafe",
  anime: "Kangaroo",
  description: "drink tea while petting kangaroos",
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

c4 = Cafe.create!(
  name: "Joey's Kangaroo Cafe",
  anime: "Kangaroo",
  description: "drink tea while petting kangaroos",
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

user1 = User.create!(
  first_name: "tommy",
  last_name: "cat",
  email: "tommy@gmail.com",
  password: "hunter22",
  location_id: 1
)

demo = User.create!(
  first_name: "John",
  last_name: "Doe",
  email: "demo@gmail.com",
  password: "demopass",
  location_id: 3
)

