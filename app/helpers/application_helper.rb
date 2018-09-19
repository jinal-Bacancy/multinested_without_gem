module ApplicationHelper
  def nested_content(association,f, id)
  	f.simple_fields_for(association, Task.new, child_index: id) do |builder|
      render(association.to_s.singularize, f: builder)
    end.gsub("\n",'')
  end

  def nested_content_comment(association,f, id)
  	f.simple_fields_for(association, Comment.new, child_index: id) do |builder|
      render(association.to_s.singularize, f: builder)
    end.gsub("\n",'')
  end
end
