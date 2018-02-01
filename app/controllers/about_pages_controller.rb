class AboutPagesController < ApplicationController
  def show
    about_page = contentful
    .entries(content_type: "aboutPage", include: 2)
    .first

    if about_page.fields.keys
      render json: {aboutPage: tidy_about_page(about_page)}
    else
      render json: {aboutPage: null}
    end
  end

  def tidy_about_page(about_page)
    {
      id: about_page.id,
      title: about_page.fields[:title],
      intro: about_page.fields[:intro] ? markdown.render(about_page.intro) : "",
      featuredImage: about_page.fields[:featured_image] ? parse_image(about_page.featured_image) : {},
      content: about_page.fields[:content] ? markdown.render(about_page.content) : "",
    }
  end
    def default_meta_tags
  {
    title:       'The Highly',
    description: 'A guide to the good good',
    
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