@cafes.each do |cafe|
  json.set! cafe.id do
    json.extract! cafe, :id, :name, :animal, :description, :cost, :average_rating, :number_reviews, :location_id,:address, :city, :country, :phone_number

    json.url @photos
  end
end