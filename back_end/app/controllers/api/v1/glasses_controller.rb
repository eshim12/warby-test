class Api::V1::GlassesController < ApplicationController
  def index
    @glasses = Glass.all
    render json: @glasses
  end

  def update
      @glass.update(glass_params)
    if @glass.save
      render json: @glass, status: :accepted
    else
      render json: { errors: @glass.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def glass_params
    params.permit(:key, :category)
  end
end
