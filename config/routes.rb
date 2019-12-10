Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :locations, only: [:index]
  end

  root "static_pages#root"
end
