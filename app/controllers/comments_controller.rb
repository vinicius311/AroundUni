class CommentsController < ApplicationController
  def create    
  #  render text: params[:post].inspect
    @comment = Comment.new(comment_params)
    @comment.user_id = session[:user_id]
    @comment.save
    redirect_to "/events/"+@comment.event_id
  end
  
private
    def comment_params
      params.require(:comment).permit(:text, :event_id)
    end

  
end
