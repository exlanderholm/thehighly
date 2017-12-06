require "redcarpet"

class PhilosophyPagesController < ApplicationController
  def show
    philosophy_page = contentful
    .entries(content_type: "philosophyPage", include: 2)
    .first

    if philosophy_page.fields.keys
      render json: {aboutPage: tidy_section(philosophy_page)}
    else
      render json: {aboutPage: null}
    end
  end

  def tidy_section(section)
    {
      id: section.id,
      title: section.title,
      body: section.body ? markdown.render(section.body) : "",
      sections: Array(section.sections).map { |s| tidy_section(s) },
      bottomOutro: section.bottomOutro
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end
