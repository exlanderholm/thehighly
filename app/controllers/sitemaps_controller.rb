class SitemapsController < ApplicationController
  def show
    render xml: {termsAndConditions: "test test test"}
    end
end