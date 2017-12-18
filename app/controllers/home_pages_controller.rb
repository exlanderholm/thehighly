class HomePagesController < ApplicationController
  def show
    home_page = contentful
    .entries(content_type: "homePage", include: 2)
    .first

    if home_page.fields.keys
      render json: {homePage: tidy_home_page(home_page)}
    else
      render json: {homePage: null}
    end
  end

  def tidy_home_page(home_page)
    {
      id: home_page.id,
      title: home_page.fields[:title],
      body: home_page.fields[:body] ? markdown.render(home_page.body) : "",
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end