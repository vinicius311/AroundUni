class CommentsController < ApplicationController
  def create    
    if session[:user_id] == nil
      redirect_to :root
    end
    @comment = Comment.new(comment_params)
    @comment.user_id = session[:user_id]
    @comment.save
    redirect_to "/events/"+@comment.event_id.to_s
  end
  
private
    def comment_params
      params.require(:comment).permit(:text, :event_id)
    end

  
end
