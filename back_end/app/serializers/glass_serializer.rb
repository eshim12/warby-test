class GlassSerializer < ActiveModel::Serializer
  attributes :id, :key, :category
  has_many :user_glasses
  has_many :users, through: :user_glasses
end
