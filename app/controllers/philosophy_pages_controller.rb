require "redcarpet"

class PhilosophyPagesController < ApplicationController
  def show
    philosophy_page = contentful
    .entries(content_type: "philosophyPage", include: 2)
    .first
    
    @philosophy_page = tidy_section(philosophy_page)
    
    respond_to do |format|
      format.html { render "application/index" }
      format.json { render json: { philosophy: @philosophy_page } }
    end    
    
  end

  def tidy_section(section)
    {
      id: section.id,
      title: section.title,
      body: section.fields[:body] ? markdown.render(section.body) : nil,
      sections: Array(section.fields[:sections]).map { |s| tidy_section(s) },
      bottomOutro: section.fields[:bottom_outro] ? markdown.render(section.bottom_outro) : nil,
      metaTitle: section.fields[:meta_title] ? section.meta_title : nil ,
      metaDescription: section.fields[:meta_description] ? section.meta_description : nil
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end
end
