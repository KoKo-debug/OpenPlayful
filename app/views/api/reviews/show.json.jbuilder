json.review do
  json.extract! @review, :id, :rating, :overall, :food, :service, :ambience, :value, :body, :user_id, :cafe_id
end

json.cafe do
  json.partial! "api/cafes/cafe", cafe: Cafe.find_by(id: @review.cafe_id)
  
end