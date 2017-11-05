class PrivacyPoliciesController < ApplicationController
  def show
    privacy_policy = contentful
    .entries(content_type: "privacyPolicy", include: 2)
    .first

    if privacy_policy.fields.keys
      render json: {privacyPolicy: tidy_privacy_policy(privacy_policy)}
    else
      render json: {privacyPolicy: null}
    end
  end

  def tidy_privacy_policy(privacy_policy)
    {
      id: privacy_policy.id,
      title: privacy_policy.fields[:title],
      body: privacy_policy.fields[:body] ? markdown.render(privacy_policy.body) : "",
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end