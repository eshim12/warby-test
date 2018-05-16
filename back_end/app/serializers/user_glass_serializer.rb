class UserGlassSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :glasses
end
