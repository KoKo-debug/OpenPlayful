json.review do
  json.extract! @review, :id, :rating, :overall, :food, :service, :ambience, :value, :body, :user_id, :cafe_id
end

json.cafe do
  json.partial! "api/cafes/cafe", cafe: Cafe.find_by(id: @review.cafe_id)
  # json.rating Cafe.find_by(id: @review.cafe_id).rating
  # json.overall Cafe.find_by(id: @review.cafe_id).overall
  # json.food Cafe.find_by(id: @review.cafe_id).food
  # json.service Cafe.find_by(id: @review.cafe_id).service
  # json.value Cafe.find_by(id: @review.cafe_id).value
  # json.ambience Cafe.find_by(id: @review.cafe_id).ambience
end