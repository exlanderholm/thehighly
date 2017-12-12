require "redcarpet"

class PhilosophyPagesController < ApplicationController
  def show
    philosophy_page = contentful
    .entries(content_type: "philosophyPage", include: 2)
    .first

    if philosophy_page.fields.keys
      render json: {philosophy: tidy_section(philosophy_page)}
    else
      render json: {philosophy: null}
    end
  end

  def tidy_section(section)
    {
      id: section.id,
      title: section.title,
      body: section.fields[:body] ? markdown.render(section.body) : nil,
      sections: Array(section.fields[:sections]).map { |s| tidy_section(s) },
      bottomOutro: section.fields[:bottom_outro] ? markdown.render(section.bottom_outro) : nil
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end
