class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :isCompleted
end
