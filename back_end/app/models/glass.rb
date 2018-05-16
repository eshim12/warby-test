class Glass < ApplicationRecord
  has_many :user_glasses
  has_many :users, through: :user_glasses
end
