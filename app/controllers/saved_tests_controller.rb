require 'json'


class SavedTestsController < ApplicationController
	def create
		p 'Balls' * 1000
		p params
		SavedTest.new(results_both: params['final_result'])
		p 'Balls' * 1000
	end
end
