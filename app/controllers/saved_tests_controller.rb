require 'json'


class SavedTestsController < ApplicationController
	def create
		user = User.find_by(email: params['email'])
		result = SavedTest.new(user_id: user.id, results_both: params['final_result'])
		if result.save
			test_results = SavedTest.where(user_id: user.id)
			render json: test_results, status: :created
		else
			render nothing: true, status: 406
		end
	end

	def index
		user = User.find_by(email: params['email'])
		test_results = SavedTest.where(user_id: user.id)
		render json: test_results, status: 200
	end
end
