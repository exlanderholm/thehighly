class ContactPagesController < ApplicationController
  def show
    contact_page = contentful
    .entries(content_type: "contactPage", include: 2)
    .first

    if contact_page.fields.keys
      render json: {contactPage: tidy_contact_page(contact_page)}
    else
      render json: {contactPage: null}
    end
  end

  def tidy_contact_page(contact_page)
    {
      id: contact_page.id,
      title: contact_page.fields[:title],
      body: contact_page.fields[:body] ? markdown.render(contact_page.body) : "",
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end