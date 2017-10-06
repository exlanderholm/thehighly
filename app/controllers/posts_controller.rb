class PostsController < ApplicationController

  def index
    posts = contentful.entries(content_type: "2wKn6yEnZewu2SCCkus4as").map do |post|
      tidy_post(post)
    end

    render json: {posts: posts}
  end


  def show
    post = contentful
              .entries(content_type: "2wKn6yEnZewu2SCCkus4as", "fields.slug": params[:id], include: 2).first

    if post.fields.keys
      render json: {post: tidy_post(post)}
    else
      render json: {post: null}
    end
  end

  def tidy_post(post)
    {
      body: post.body ? markdown.render(post.body) : "",
      excerpt: post.fields["excerpt"] ? markdown.render(post.excerpt) : "",
      id: post.id,
      featuredImage: post.featured_image ? parse_image(post.featured_image) : {},
      slug: post.slug,
      title: post.title,
    }
  end

  def markdown
    Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  end

  def parse_image(image)
    { id: image.id, url: image.file.url, details: image.file.details }
  end

end
