json.cafe do
  json.partial! "api/cafes/cafe", cafe: @cafe
end

@cafe.reviews.each do |review|
  json.reviews do
    json.set! review.id do
      user = review.user
      location = user.location

      json.partial! "api/reviews/review", review: review
      json.extract! user, :first_name, :last_name
      json.extract! location, :name
    end
  end
end



json.urls @cafe.photos.pluck(:url)
json.location @cafe.location
# json.reviews @cafe.reviews

# json.reviews do
#   @cafe.reviews.each do |review|
#         json.set! review.id do
#           user = review.user
#           location = user.location
#             json.extract! review, :rating, :body, :overall, :food, :service, :value, :ambience
#             json.extract! user, :first_name, :last_name
#             json.extract! location, :name
#         end
#     end
# end
