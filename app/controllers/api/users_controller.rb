
class Api::UsersController < ApplicationController
  protect_from_forgery except: :create

  def create
    @user = User.new(user_params)
    if @user.save
      signin(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :location_id)
  end

end
