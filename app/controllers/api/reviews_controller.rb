class Api::ReviewsController < ApplicationController
  
  skip_before_action :verify_authenticity_token
  def create
    @review = Review.new(review_params)
    if @review.save!
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end  
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.destroy!
      render "api/reviews/show"
    else
      render json: ["This review was not found"]
    end
  end

  def update
    @review = Review.includes(:user).find_by(id: params[:id])
    if @review.update(review_params)
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :overall, :food, :service, :ambience, :value, :body, :user_id, :cafe_id)
  end

  
end
