require "byebug"
class Api::SessionsController < ApplicationController
  protect_from_forgery except: :create
  def show
    
  end

  def create
    debugger
      @user = User.find_by_credentials(
        params[:user][:email], 
        params[:user][:password]
      )
      
      if @user
        signin(@user)
        debugger;
        render "api/users/show"
      else
        render json: ["Your email and password don't match. Please try again"], status: 401
      end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody is logged in"], status: 404
    end
  end

end
