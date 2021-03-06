class Api::SessionsController < ApplicationController
    before_action :require_logged_in!, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user 
            login!(@user)
            render 'api/users/show'
        else
            render json: [ "Invalid Username", " Invalid Password"], status: 404
        end
    end

    def destroy 
        @user = current_user 
        if @user 
            logout! 
            render "api/users/show"
        else
            render json: ["Not Signed In"], status: 404
        end
    end
end
