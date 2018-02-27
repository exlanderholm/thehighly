class TermsAndConditionsController < ApplicationController
  def show
    terms_and_conditions = contentful
    .entries(content_type: "termsAndConditions", include: 2)
    .first

    @termsAndConditions = tidy_terms_and_conditions(terms_and_conditions)
     
    respond_to do |format|
      format.html { render "application/index" }
      format.json { render json: { termsAndConditions: @termsAndConditions } }
    end    

  end

  def tidy_terms_and_conditions(terms_and_conditions)
    {
      id: terms_and_conditions.id,
      title: terms_and_conditions.fields[:title],
      body: terms_and_conditions.fields[:body] ? markdown.render(terms_and_conditions.body) : "",
      updatedAt: terms_and_conditions.updated_at,
      metaTitle: terms_and_conditions.fields[:meta_title] ? terms_and_conditions.meta_title : nil ,
      metaDescription: terms_and_conditions.fields[:meta_description] ? terms_and_conditions.meta_description : nil
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end