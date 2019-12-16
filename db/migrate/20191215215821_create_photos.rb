class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :name
      t.string :url
      t.integer :cafe_id

      t.timestamps
    end

    add_index :photos, :cafe_id
  end
end
