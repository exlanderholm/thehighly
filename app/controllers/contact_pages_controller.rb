class ContactPagesController < ApplicationController
  def show
    contact_page = contentful
    .entries(content_type: "contactPage", include: 2)
    .first

    @contactPage = tidy_contact_page(contact_page)
    
    respond_to do |format|
      format.html { render "application/index" }
      format.json { render json: { contactPage: @contactPage } }
    end    
  end

  def tidy_contact_page(contact_page)
    {
      id: contact_page.id,
      title: contact_page.fields[:title],
      body: contact_page.fields[:body] ? markdown.render(contact_page.body) : "",
      metaTitle: contact_page.fields[:meta_title] ? contact_page.meta_title : nil ,
      metaDescription: contact_page.fields[:meta_description] ? contact_page.meta_description : nil
    }
  end
  
  

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end