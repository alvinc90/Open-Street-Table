Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :show]
    resources :cities, only: [:index, :show]
    resources :reviews
    resources :favorites, only: [:index, :create, :destroy]
    resources :reservations, except: [:new, :edit]
    resources :menus, only: [:index]
  end

  root to: "static_pages#root"
end 
