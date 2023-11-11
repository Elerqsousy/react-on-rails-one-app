Rails.application.routes.draw do
  get 'root/index'
  get 'root/greetings'
  root 'root#index'
end
