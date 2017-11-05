class TermsAndConditionsController < ApplicationController
  def show
    terms_and_conditions = contentful
    .entries(content_type: "termsAndConditions", include: 2)
    .first

    if terms_and_conditions.fields.keys
      render json: {termsAndConditions: tidy_terms_and_conditions(terms_and_conditions)}
    else
      render json: {termsAndConditions: null}
    end
  end

  def tidy_terms_and_conditions(terms_and_conditions)
    {
      id: terms_and_conditions.id,
      title: terms_and_conditions.fields[:title],
      body: terms_and_conditions.fields[:body] ? markdown.render(terms_and_conditions.body) : "",
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end