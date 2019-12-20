class Api::CafesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    # for now, all cafes (filter later)
    @cafes = Cafe.all

  end


  def show
    @cafe = Cafe.includes(:photos, :location, :users, :reviews).find_by(id: params[:id])

    if @cafe
      render "api/cafes/show"
    else
      render json: ["This cafe is not available"], status: 404
    end
  end


  private

  def cafe_params
    
  end
end
