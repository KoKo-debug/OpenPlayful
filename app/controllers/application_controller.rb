class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def signin(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def require_signin
    redirect_to new_session_url unless logged_in?
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
