class PopupsController < ApplicationController
  def show
    popup = contentful
    .entries(content_type: "popup", include: 2)
    .first

    if popup.fields.keys
      render json: {popup: tidy_popup(popup)}
    else
      render json: {popup: null}
    end
  end

  def tidy_popup(popup)
    {
      id: popup.id,
      title: popup.fields[:title],
      copy: popup.fields[:copy] ? markdown.render(popup.copy) : "",
      backgroundImage: popup.fields[:background_image] ? parse_image(popup.background_image) : {}
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end

  def parse_image(image)
    {
      id: image.id,
      url: image.file.url,
      details: image.file.details
    }
  end

end