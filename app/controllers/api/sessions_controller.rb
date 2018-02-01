class Api::SessionsController < ApplicationController

  def create
    @user = User.find_user_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"]
    end
  end

  def destroy
    logout
  end
end
