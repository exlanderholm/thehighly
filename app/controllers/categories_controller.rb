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
        tagline: post.fields[:tagline] ? markdown.render(post.tagline) : "",
        body: post.fields[:body] ? markdown.render(post.body) : "",
        featuredImage: post.fields[:featured_image] ? parse_image(post.featured_image) : {},
        slug: post.slug,
        category: post.fields[:category] ? tidy_category(post.category) : {},
        issue: post.fields[:issue] ? tidy_issue(post.issue) : {}
      }
    end

    def tidy_category(category)
      {
        id: category.id,
        title: category.title,
        slug: category.slug
      }
    end

    def tidy_issue(issue)
      {
        id: issue.id,
        title: issue.title,
        publicationDate: issue.publication_date
      }
    end

    def markdown
      Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    end

    def parse_image(image)
      { id: image.id, url: image.file.url, details: image.file.details }
    end
  end