class SessionsController < ApplicationController
	#login route

	skip_before_action :verify_authenticity_token

	def create
		if user = User.find_by(email: params["email"])
			if user.password == params[:password]
				session[:id] = user.id
				p session
				render json: user, status: :created
			else
				render nothing: true, status: 400
			end
		else
			render nothing: true, status: 404	
		end
	end

	def destroy
		# session.destroy
		p "*" * 30
		p session[:id]
		p "*" * 30
		render nothing: true, status: 200
	end
end
