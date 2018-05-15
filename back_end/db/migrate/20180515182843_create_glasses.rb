class CreateGlasses < ActiveRecord::Migration[5.1]
  def change
    create_table :glasses do |t|
      t.string :key
      t.string :category

      t.timestamps
    end
  end
end
