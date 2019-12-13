# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_13_221807) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cafes", force: :cascade do |t|
    t.string "name", null: false
    t.string "animal", null: false
    t.text "description", null: false
    t.integer "cost", null: false
    t.float "average_rating"
    t.integer "number_reviews", default: 0
    t.string "address", null: false
    t.string "city", null: false
    t.string "country", null: false
    t.float "lat", null: false
    t.float "long", null: false
    t.integer "location_id", null: false
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["animal"], name: "index_cafes_on_animal"
    t.index ["city"], name: "index_cafes_on_city"
    t.index ["cost"], name: "index_cafes_on_cost"
    t.index ["country"], name: "index_cafes_on_country"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.float "lat", null: false
    t.float "long", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_locations_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "location_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
