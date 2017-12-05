class RecommendedLandingsController < ApplicationController
  def show
    recommended_landing = contentful
    .entries(content_type: "recommendedLanding", include: 2)
    .first

    if recommended_landing.fields.keys
      render json: {recommendedLanding: tidy_recommended_landing(recommended_landing) }
    else
      render json: {recommendedLanding: null}
    end
  end

  def tidy_recommended_landing(recommended_landing)
    return {
      id: recommended_landing.id,
      intro: recommended_landing.fields[:intro] ? recommended_landing.intro : "",
      mapIllustration: recommended_landing.fields[:map_illustration] ? parse_image(recommended_landing.fields[:map_illustration]) : {},
      bottomIntro: recommended_landing.fields[:bottom_intro] ? recommended_landing.bottom_intro : "",
      bottomOutro: recommended_landing.fields[:bottom_outro] ? recommended_landing.bottom_outro : "",
    }
  end

  def parse_image(image)
    { id: image.id, url: image.file.url, details: image.file.details }
  end

end