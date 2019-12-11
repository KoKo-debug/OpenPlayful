# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Location.destroy_all




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