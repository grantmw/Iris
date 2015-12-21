require 'json'
require 'bcrypt'

class UsersController < ApplicationController
	def create
		p params
		p '*' * 100
		p params["user"]
		User.create(email: params["user"]["email"], password: params["user"]["password"], name: params["user"]["name"])
	end

	def new #Login Route
		if User.find_by(email: params["user"]["email"])
			user = User.find_by()	
		end
	end
end
