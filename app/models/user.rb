# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  first_name       :string           not null
#  last_name        :string           not null
#  email            :string           not null
#  primary_location :integer          not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  location_id      :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class User < ApplicationRecord
  validates: :first_name, :last_name, :email, :primary_location, :password_digest, :session_token, :location_id, presence: true
  validates: :email, :session_token, :uniqueness: true
  validates: :password, length:{ minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end

