class PrivacyPoliciesController < ApplicationController
  def show
    privacy_policy = contentful
    .entries(content_type: "privacyPolicy", include: 2)
    .first

    @privacyPolicy = tidy_privacy_policy(privacy_policy)
    
    respond_to do |format|
      format.html { render "application/index" }
      format.json { render json: { privacyPolicy: @privacyPolicy } }
    end    

  end

  def tidy_privacy_policy(privacy_policy)
    {
      id: privacy_policy.id,
      title: privacy_policy.fields[:title],
      body: privacy_policy.fields[:body] ? markdown.render(privacy_policy.body) : "",
      metaTitle: privacy_policy.fields[:meta_title] ? privacy_policy.meta_title : nil ,
      metaDescription: privacy_policy.fields[:meta_description] ? privacy_policy.meta_description : nil
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end