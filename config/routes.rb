Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "application#index"

  scope '/api' do
    get '/posts' => 'application#posts'
  end

  get "*path", to: "application#index"

end
