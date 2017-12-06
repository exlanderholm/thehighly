Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "application#index"

  scope '/api' do
    resources :posts, only: [:index, :show]
    resources :destinations, only: [:index, :show]
    resources :categories, only: [:show]

    resource :recommended_landing, only: [:show]
    resource :about_page, only: [:show]
    resource :contact_page, only: [:show]
    resource :terms_and_conditions, only: [:show]
    resource :privacy_policy, only: [:show]
    resource :popup, only: [:show]

  end

  get "*path", to: "application#index"

end
