Rails.application.routes.draw do

 get '/virtualpet' => 'virtualpet#index'

 root 'welcome#index'
end
