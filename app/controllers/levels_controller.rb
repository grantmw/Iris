require 'json'


class LevelsController < ApplicationController
	def index
		p "*" * 1000
		checker = Level.where(screen_type: 1280)
		render json: checker
		# makeplayers			
		# players = Player.all
		# render json: players
	end
end
