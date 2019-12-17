# == Schema Information
#
# Table name: cafes
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  animal         :string           not null
#  description    :text             not null
#  cost           :integer          not null
#  average_rating :float
#  number_reviews :integer          default(0)
#  address        :string           not null
#  city           :string           not null
#  country        :string           not null
#  lat            :float            not null
#  long           :float            not null
#  location_id    :integer          not null
#  phone_number   :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Cafe < ApplicationRecord
  validates :name, :animal, :cost, :address, :city, :country, :location_id, :phone_number, presence: true
  

  belongs_to :location,
    class_name: 'Location',
    foreign_key: :location_id,
    primary_key: :id

  has_many :photos,
    class_name: 'Photo',
    foreign_key: :cafe_id,
    primary_key: :id

  has_many :reviews

end
