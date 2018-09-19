class Task < ApplicationRecord
  belongs_to :project
  has_many :comments
  accepts_nested_attributes_for :comments, allow_destroy: true, reject_if: :all_blank
end
