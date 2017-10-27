class CategoriesController < ApplicationController

    def show
      posts = contentful
      .entries(content_type: "post", include: 2, order: '-fields.date')
      .select do |post|
        post.fields[:category] && post.category.slug == params[:id]
      end
      .map do |post|
        tidy_post_by_category(post)
      end

      render json: {posts: posts}
      # if post.fields.keys
      #   render json: {post: tidy_post(post)}
      # else
      #   render json: {post: null}
      # end
    end

    def tidy_post_by_category(post)
      return {
        id: post.id,
        title: post.title,
        date: post.date,
        excerpt: post.fields[:excerpt] ? markdown.render(post.excerpt) : "",
        body: post.fields[:body] ? markdown.render(post.body) : "",
        featuredImage: post.fields[:featured_image] ? parse_image(post.featured_image) : {},
        slug: post.slug,
        category: post.fields[:category] ? post.category.slug : nil
      }
    end

    def markdown
      Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    end

    def parse_image(image)
      { id: image.id, url: image.file.url, details: image.file.details }
    end
  end