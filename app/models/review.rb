# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rating     :integer          not null
#  body       :text             not null
#  overall    :integer          not null
#  food       :integer          not null
#  service    :integer          not null
#  value      :integer          not null
#  ambience   :integer          not null
#  user_id    :integer          not null
#  cafe_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord

  validates :rating, :body, :overall, :food, :service, :value, :ambience, :user_id, :cafe_id, presence: true

  belongs_to :user
  belongs_to :cafe


end
