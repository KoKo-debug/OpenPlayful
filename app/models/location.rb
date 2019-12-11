# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  lat        :float            not null
#  long       :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord
end
