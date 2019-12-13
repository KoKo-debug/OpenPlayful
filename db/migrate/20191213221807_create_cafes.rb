class CreateCafes < ActiveRecord::Migration[5.2]
  def change
    create_table :cafes do |t|
      t.string :name, null: false
      t.string :animal, null: false
      t.text :description, null: false
      t.integer :cost, null: false
      t.float :average_rating
      t.integer :number_reviews, default: 0
      t.string :address, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.integer :location_id, null: false
      t.string :phone_number

      t.timestamps
    end
    add_index :cafes, :cost
    add_index :cafes, :animal
    add_index :cafes, :city
    add_index :cafes, :country
  end
end
