class SitemapsController < ApplicationController
  def index
    @posts = contentful
    .entries(content_type: "post", order: '-fields.date')
    .map do |post|
      {:slug => post.slug}
    end
    respond_to do |format|
      format.xml
    end
  end
end
