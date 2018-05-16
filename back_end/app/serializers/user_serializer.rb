class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :glasses, through: :user_glasses
end
