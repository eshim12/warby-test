class Api::V1::UsersController < ApplicationController
  skip_before_action only: [:index, :create, :show, :update]
  def index
    @users = User.all
    render json: @users, status: 200
  end

  def create
    user = User.create(user_params)
    render json: user, status: 201
  end

  def update
      @user.update(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def show
    render json: @user, status: 200
  end

  private

  def user_params
    params.permit(:name)
  end
end
