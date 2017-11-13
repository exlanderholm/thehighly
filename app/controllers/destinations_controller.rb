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
      name: destination.fields[:name],
      title: destination.fields[:title],
      slug: destination.slug,
      date: destination.fields[:date],
      excerpt: destination.fields[:excerpt] ? markdown.render(destination.excerpt) : "",
      whereToGo: Array(destination.fields[:where_to_go]).map { |wtg| tidy_where_to_go(wtg) },
      whatToGet: Array(destination.fields[:what_to_get]).map { |wtg| tidy_what_to_get(wtg) },
      
      productsFlower: Array(destination.fields[:products_flower]).map { |wtg| tidy_what_to_get(wtg) },
      productsEdibles: Array(destination.fields[:products_edibles]).map { |wtg| tidy_what_to_get(wtg) },
      productsCartridgeOil: Array(destination.fields[:products_cartridgeOil]).map { |wtg| tidy_what_to_get(wtg) },
      productsTopicals: Array(destination.fields[:products_topicals]).map { |wtg| tidy_what_to_get(wtg) },
      productsSensuals: Array(destination.fields[:products_sensuals]).map { |wtg| tidy_what_to_get(wtg) },
      productsTinctures: Array(destination.fields[:products_tinctures]).map { |wtg| tidy_what_to_get(wtg) },
      productsPets: Array(destination.fields[:products_pets]).map { |wtg| tidy_what_to_get(wtg) }
    }
  end

  def tidy_related_post(post)
    {
      mike: "ray"
    }
  end

  def tidy_where_to_go(where_to_go)
    {
      id: where_to_go.id,
      title: where_to_go.fields[:title],
      description: markdown.render(where_to_go.fields[:description]),
      location: where_to_go.fields[:location],
      website: where_to_go.fields[:website],
      relatedPosts: tidy_related_post(where_to_go.fields[:related_posts])
    }
  end

  def tidy_what_to_get(what_to_get)
    {
      id: what_to_get.id,
      title: what_to_get.fields[:title],
      description: markdown.render(what_to_get.fields[:description]),
      image: what_to_get.fields[:image] ? parse_image(what_to_get.fields[:image]) : {},
      type: what_to_get.fields[:type]
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end

  def parse_image(image)
    { id: image.id, url: image.file.url, details: image.file.details }
  end

end