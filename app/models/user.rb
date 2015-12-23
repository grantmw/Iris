require 'bcrypt'

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
	validates :email, presence: true, uniqueness: true
	validates :hash_password, presence: true

	# include BCrypt //not sure if needed with Devise

	# def password
	#   @password ||= Password.new(hash_password)
	# end

	# def password=(new_password)
	#   @password = Password.create(new_password)
	#   self.hash_password = @password
	# end
end
