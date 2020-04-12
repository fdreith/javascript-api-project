require 'test_helper'

class PromptsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prompt = prompts(:one)
  end

  test "should get index" do
    get prompts_url, as: :json
    assert_response :success
  end

  test "should create prompt" do
    assert_difference('Prompt.count') do
      post prompts_url, params: { prompt: { belongs_to: @prompt.belongs_to, question: @prompt.question } }, as: :json
    end

    assert_response 201
  end

  test "should show prompt" do
    get prompt_url(@prompt), as: :json
    assert_response :success
  end

  test "should update prompt" do
    patch prompt_url(@prompt), params: { prompt: { belongs_to: @prompt.belongs_to, question: @prompt.question } }, as: :json
    assert_response 200
  end

  test "should destroy prompt" do
    assert_difference('Prompt.count', -1) do
      delete prompt_url(@prompt), as: :json
    end

    assert_response 204
  end
end
