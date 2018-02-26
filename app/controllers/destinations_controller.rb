class DestinationsController < ApplicationController

  def index
    destinations = contentful
    .entries(content_type: "destination", include: 2, order: '-fields.date')
    .map do |destination|
      tidy_destination(destination)
    end

    today = Date.today
    destinations_coming_soon = destinations.select { |item| item[:date] && item[:date] > today}
    destinations_present_past = destinations.select { |item| item[:date] && item[:date] <= today}

    render json: {
      destinations: destinations,
      destinationsComingSoon: destinations_coming_soon,
      destinationsPresentPast: destinations_present_past
    }
  end

  def show
    destination = contentful
    .entries(content_type: "destination", "fields.slug": params[:id], include: 2)
    .first

    @destination = tidy_destination(destination)

    respond_to do |format|
      format.html { render "application/index" }
      format.json { render json: { destination: @destination } }
    end
  end

  def tidy_destination(destination)
    {
      id: destination.id,
      name: destination.fields[:name],
      title: destination.fields[:title],
      slug: destination.slug,
      date: destination.fields[:date],
      accentColor: destination.fields[:accent_color] ? destination.accent_color : "white",
      excerpt: destination.fields[:excerpt] ? markdown.render(destination.excerpt) : "",
      coordinates: destination.fields[:coordinates],
      mapMessaging: destination.fields[:map_messaging] ? markdown.render(destination.map_messaging) : "",
      whereToGo: Array(destination.fields[:where_to_go]).map { |wtg| tidy_where_to_go(wtg) },
      whatToGet: Array(destination.fields[:what_to_get]).map { |wtg| tidy_what_to_get(wtg) },
      metaTitle: destination.fields[:meta_title] ? destination.meta_title : nil ,
      metaDescription: destination.fields[:meta_description] ? destination.meta_description : nil,
    }
  end

  def tidy_related_post(post)
    {
      mike: "ray"
    }
  end

  def tidy_where_to_go(where_to_go)
    {
      contentTypeId: where_to_go.content_type.id,
      description: where_to_go.fields[:description] ? markdown.render(where_to_go.fields[:description]) : nil,
      id: where_to_go.id,
      location: where_to_go.fields[:location],
      relatedPosts: tidy_related_post(where_to_go.fields[:related_posts]),
      title: where_to_go.fields[:title],
      website: where_to_go.fields[:website]
    }
  end

  def tidy_what_to_get(what_to_get)
    {
      id: what_to_get.id,
      title: what_to_get.fields[:title],
      image: what_to_get.fields[:image] ? parse_image(what_to_get.fields[:image]) : {},
      description: what_to_get.fields[:description] ? markdown.render(what_to_get.fields[:description]) : nil,
      affiliateLink: what_to_get.fields[:affiliate_link],
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