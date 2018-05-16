class User < ApplicationRecord
  has_many :user_glasses
  has_many :glasses, through: :user_glasses
end
