class RootController < ApplicationController
  def index
    @data = Greeting.sample
  end
end
