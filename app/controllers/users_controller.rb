require 'json'
require 'bcrypt'

class UsersController < ApplicationController
	def create
		user = User.new(email: params["user"]["email"], password: params["user"]["password"], name: params["user"]["name"])
		if user.save
			render :status => 202
		else
			render :status => 400
		end
	end
end

