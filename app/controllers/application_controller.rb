require "contentful"

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
  end

  def contentful
    config = Rails.application.config_for(:contentful)
    Contentful::Client.new(
      space: config["space"],
      access_token: config["access_token"],
      api_url: config["api_url"],
      dynamic_entries: :auto
    )
  end

end
