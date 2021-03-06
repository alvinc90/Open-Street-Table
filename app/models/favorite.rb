# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Favorite < ApplicationRecord

    validates :user_id, :restaurant_id, presence: true

    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
