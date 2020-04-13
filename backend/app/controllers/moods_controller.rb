class MoodsController < ApplicationController
  before_action :set_mood, only: [:show, :update, :destroy]

  # GET /moods
  def index
    @moods = Mood.all

    render json: @moods, include: :prompts
  end

  # GET /moods/1
  def show
    render json: @mood, include: :prompts
  end

  # POST /moods
  def create
    @mood = Mood.new(mood_params)

    if @mood.save
      render json: @mood, status: :created, location: @mood
    else
      render json: @mood.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /moods/1
  def update
    if @mood.update(mood_params)
      render json: @mood
    else
      render json: @mood.errors, status: :unprocessable_entity
    end
  end

  # DELETE /moods/1
  def destroy
    @mood.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mood
      @mood = Mood.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def mood_params
      params.require(:mood).permit(:mood_type)
    end
end
