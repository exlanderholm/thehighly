class HomePagesController < ApplicationController
  def show
    home_page = contentful
    .entries(content_type: "homePage", include: 2)
    .first

    @homePage = tidy_home_page(home_page)
    
    respond_to do |format|
      format.html { render "application/index" }
      format.json { render json: { homePage: @homePage } }
    end  
   
  end

  def tidy_home_page(home_page)
    {
      id: home_page.id,
      title: home_page.fields[:title],
      body: home_page.fields[:body] ? markdown.render(home_page.body) : "",
      metaTitle: home_page.fields[:meta_title] ? home_page.meta_title : nil ,
      metaDescription: home_page.fields[:meta_description] ? home_page.meta_description : nil
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end