class RootController < ApplicationController
  def index
  end

  def greetings
    @data = Greeting.all.sample.to_json
    render json: @data
  end
end
