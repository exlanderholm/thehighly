class PostsController < ApplicationController

  def index
    posts = contentful
    .entries(content_type: "2wKn6yEnZewu2SCCkus4as", order: '-fields.date')
    .map do |post|
      tidy_post(post)
    end

    render json: {posts: posts}
  end


  def show
    post = contentful
    .entries(content_type: "2wKn6yEnZewu2SCCkus4as", "fields.slug": params[:id], include: 2)
    .first

    if post.fields.keys
      render json: {post: tidy_post(post)}
    else
      render json: {post: null}
    end
  end

  def tidy_post(post)
    {
      id: post.id,
      title: post.fields[:title],
      date: post.fields[:date],
      excerpt: post.fields[:excerpt] ? markdown.render(post.excerpt) : "",
      body: post.fields[:body] ? markdown.render(post.body) : "",
      featuredImage: post.fields[:featured_image] ? parse_image(post.featured_image) : {},
      slug: post.slug,
      category: post.fields[:category] ? post.category : {}
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end

  def parse_image(image)
    { id: image.id, url: image.file.url, details: image.file.details }
  end

end
