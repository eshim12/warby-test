class CreateUserGlasses < ActiveRecord::Migration[5.1]
  def change
    create_table :user_glasses do |t|
      t.user :belongs_to
      t.glass :belongs_to

      t.timestamps
    end
  end
end
