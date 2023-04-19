class SessionsController < ApplicationController


    def create
        user = User.find_by(name: params[:name])
    
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ["Invalid name or password"] }, status: :unauthorized
        end
      end
end