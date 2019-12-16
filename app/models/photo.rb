# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  name       :string
#  url        :string
#  cafe_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  validates :url, :cafe_id, presence: true


  belongs_to :cafe
end
