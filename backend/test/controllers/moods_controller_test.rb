require 'test_helper'

class MoodsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mood = moods(:one)
  end

  test "should get index" do
    get moods_url, as: :json
    assert_response :success
  end

  test "should create mood" do
    assert_difference('Mood.count') do
      post moods_url, params: { mood: { mood_type: @mood.mood_type } }, as: :json
    end

    assert_response 201
  end

  test "should show mood" do
    get mood_url(@mood), as: :json
    assert_response :success
  end

  test "should update mood" do
    patch mood_url(@mood), params: { mood: { mood_type: @mood.mood_type } }, as: :json
    assert_response 200
  end

  test "should destroy mood" do
    assert_difference('Mood.count', -1) do
      delete mood_url(@mood), as: :json
    end

    assert_response 204
  end
end
