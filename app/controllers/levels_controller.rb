require 'json'


class LevelsController < ApplicationController
	def index
		p "*" * 1000
		p params["screen_width"]
		p "*" * 1000
		checker = Level.where(screen_type: params["screen_width"])
		render json: checker
		# makeplayers			
		# players = Player.all
		# render json: players
	end
end
