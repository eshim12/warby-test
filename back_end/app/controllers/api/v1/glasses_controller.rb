class Api::V1::GlassesController < ApplicationController
  def index
    @glasses = Glass.all
    render json: @glasses
  end

  def create
    glass = Glass.create(glass)
    render json: glass, status: 201
  end

  private

  def glass_params
    params.permit(:key, :category)
  end
end
