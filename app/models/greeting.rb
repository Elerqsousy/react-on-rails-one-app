class Greeting < ApplicationRecord
  attribute :greeting, type: :text

  validates :greeting, presence: true, length: { maximum: 255 }
end
