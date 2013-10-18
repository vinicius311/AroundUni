AroundUni::Application.routes.draw do

  resources :events
  resources :geolocations
  resources :regular_events
  resources :special_events
  resources :sessions
  
  
  
  
  
 get "log_out" => "sessions#destroy", :as => "log_out"
get "log_in" => "sessions#new", :as => "log_in"

  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  root to: 'events#index'
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  get 'regular_users/sign_up' => 'regular_users#sign_up' 
  get 'partner_users/sign_up' => 'partner_users#sign_up' 
  
  
  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase
  post 'regular_users' => 'regular_users#create', as: :regular_users
  post 'partner_users' => 'partner_users#create', as: :partner_users
  
  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end
  
  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
