Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "application#index"

  scope '/api' do
    resources :posts, only: [:index, :show]
    resources :destinations, only: [:index, :show]
    resources :categories, only: [:show]
    resource :home_page, only: [:show]
    resource :recommended_landing, only: [:show]
    resource :about_page, only: [:show]
    resource :contact_page, only: [:show]
    resource :terms_and_conditions, only: [:show]
    resource :privacy_policy, only: [:show]
    resource :philosophy_page, only: [:show]
    resource :popup, only: [:show]
  end

  get 'conversations/:id', to: 'posts#show'
  get '/about', to: 'about_pages#show'
  get '/philosophy', to: 'philosophy_pages#show'
  get '/contact', to: 'contact_pages#show'
  get '/privacy-policy', to: 'privacy_policies#show'
  get '/terms-conditions', to: 'terms_and_conditions#show'
  get 'recommended', to: 'recommended_landings#show'
  get 'recommended/:id', to: 'destinations#show'

  get '/sitemap', to: 'sitemaps#index'

  get "*path", to: "application#index"
end
