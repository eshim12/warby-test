class User < ApplicationRecord
  has_many :glasses, through: :users
end
