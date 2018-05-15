class Glass < ApplicationRecord
  has_many :users, through: :user_glasses
end
