class AboutPagesController < ApplicationController
  def show
    about_page = contentful
    .entries(content_type: "aboutPage", include: 2)
    .first
    
    @aboutPage = tidy_about_page(about_page)
    
    respond_to do |format|
      format.html { render "application/index" }
      format.json { render json: { aboutPage: @aboutPage } }
    end
  end
  
  def tidy_about_page(about_page)
    {
      id: about_page.id,
      title: about_page.fields[:title],
      intro: about_page.fields[:intro] ? markdown.render(about_page.intro) : "",
      featuredImage: about_page.fields[:featured_image] ? parse_image(about_page.featured_image) : {},
      content: about_page.fields[:content] ? markdown.render(about_page.content) : "",
      metaTitle: about_page.fields[:meta_title] ? about_page.meta_title : nil ,
      metaDescription: about_page.fields[:meta_description] ? about_page.meta_description : nil
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