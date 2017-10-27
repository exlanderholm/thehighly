class DestinationsController < ApplicationController

  def index
    destinations = contentful
    .entries(content_type: "destination", include: 2, order: '-fields.date')
    .map do |destination|
      tidy_destination(destination)
    end

    render json: {destinations: destinations}
  end

  def show
    destination = contentful
    .entries(content_type: "destination", "fields.slug": params[:id], include: 2)
    .first

    if destination.fields.keys
      render json: {destination: tidy_destination(destination)}
    else
      render json: {destination: null}
    end
  end

  def tidy_destination(destination)
    {
      id: destination.id,
      title: destination.fields[:title],
      slug: destination.slug,
      date: destination.fields[:date],
      excerpt: destination.fields[:excerpt] ? markdown.render(destination.excerpt) : "",
      whereToGo: destination.fields[:where_to_go].map { |place| {
        id: place.id,
        title: place.title,
        description: place.description,
        location: place.location,
        website: place.website
      }},
      whatToGet: destination.fields[:what_to_get].map { |product| {
        id: product.id,
        title: product.title,
        description: product.description,
        type: product.type
      }}
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end

  def parse_image(image)
    { id: image.id, url: image.file.url, details: image.file.details }
  end

end