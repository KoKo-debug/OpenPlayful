class Api::CafesController < ApplicationController


  def index
    # for now, all cafes (filter later)
    @cafes = Cafe.all

  end


  def show
    @cafe = Cafe.find_by(id: params[:id])
    @photos = @cafe.photos.pluck(:url)
    
    if @cafe
      render :show
    else
      render json: ["This cafe is not available"], status: 404
    end
  end


  private

  def cafe_params

  end
end
