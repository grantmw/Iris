require 'rest_client'
require 'json'

class UsersController < ApplicationController

	def create
		p "*" * 1000
		p session
		p "*" * 1000

		user = User.new(email: params['email'], password: params['password'])
		if user.save
			session["id"] = user.id
			render json: user, status: :created
		else
			render nothing: true, status: 406
		end

	end
end
