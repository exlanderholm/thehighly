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

    @pages = ['privacy-policy','terms-conditions','contact','philosophy']
    
    @conversations = contentful
    .entries(content_type: "post", order: '-fields.date')
    .map do |conversation|
      {:slug => conversation.slug}
    end

    unfilterdestinations = contentful
    .entries(content_type: "destination", include: 2, order: '-fields.date')
    .map do |destination|
      tidy_destination(destination)
    end
    
    today = Date.today
    dest  = unfilterdestinations.select { |item| item[:date] && item[:date] <= today}
    @destinations = dest
    .map do |destination|
       {:slug => destination[:slug]}
    end
  end

  def tidy_destination(destination)
    {
      id: destination.id,
      name: destination.fields[:name],
      title: destination.fields[:title],
      slug: destination.slug,
      date: destination.fields[:date]
    }
  end
end
