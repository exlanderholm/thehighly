require "contentful"

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @mike = "ray"
  end

  def posts
    # posts = contentful.entries(content_type: "2wKn6yEnZewu2SCCkus4as", include: 0, limit: 8).map do |post|
    #   {
    #     id: post.sys[:id],
    #     fields: post.fields,
    #   }
    # end
    # posts = contentful.entries(content_type: "2wKn6yEnZewu2SCCkus4as", include: 2, limit: 8)

    # render json: {posts: posts}
      entries = contentful.entries

      render json: {entries: entries}
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
