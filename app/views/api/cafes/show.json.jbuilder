json.extract! @cafe, :id, :name, :animal, :description, :lat, :long, :cost, :average_rating, :number_reviews, :location_id,:address, :city, :country, :phone_number

json.urls @cafe.photos.pluck(:url)
json.location @cafe.location
# json.reviews @cafe.reviews

json.reviews do
  @cafe.reviews.each do |review|
        json.set! review.id do
          user = review.user
          location = user.location
            json.extract! review, :rating, :body, :overall, :food, :service, :value, :ambience
            json.extract! user, :first_name, :last_name
            json.extract! location, :name
        end
    end
end
