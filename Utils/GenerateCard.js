export const generateCard = (food, additionalClass = "") => {
  return `<div class="food_card ${additionalClass}">
    <img 
    src="${food?.thumbnail}" 
    alt="thumbnail" 
    loading="lazy" 
    class="food_card_thumbnail"
    />
    ${
      food?.discount !== 0
        ? `<div class="food_card_discount">${food.discount}%</div>`
        : ``
    }

    <div class="food_card_details">
      <div class="food_card_heading">
        <p>${food?.name}</p>
        <p>₹${food?.price}</p>
      </div>

      <div class="food_card_heading">

        <div class="food_card_details_left">
          <div class="food_card_rating">
            <i class="fa-solid fa-star"></i>
            <p>${food?.rating}</p>
          </div>
          <div class="food_card_duration_outer">
            <div class="food_card_duration_inner">
              ${
                food?.min_duration +
                "-" +
                food?.max_duration +
                " " +
                food?.duration_param
              }
            </div>
          </div>
        </div>

        ${
          food.count > 0
            ? `<div class="food_count_contoller">
                    <div class="decrement_count decrease_food_counter" >
                      <i class="fa-solid fa-minus"></i>
                    </div>

                    <div class="food_count">
                        ${food.count}
                    </div>
                    
                    <div class="increment_count increase_food_counter">
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>`
            : `<div class="food_card_details_right increase_food_counter">
          <i class="fa-solid fa-plus"></i>
        </div>`
        }

      </div>
    </div>
  </div>`;
};

export const cartCard = (food, additionalClass = "") => {
  return ` <div class="cart_food_card ${additionalClass}">
              <img
                src="${food.thumbnail}"
                alt="thumbnail"
                class="cart_food_image"
                loading="lazy"
              />
              <div class="cart_food_card_content">
                <div class="cart_food_card_heading">${food.name}</div>
                <div class="cart_food_card_details">
                  <p>₹${food.price}</p>
                  <div class="food_count_contoller">
                    <div class="decrement_count decrease_food_counter" >
                      <i class="fa-solid fa-minus"></i>
                    </div>

                    <div class="food_count">
                        ${food.count}
                    </div>
                    
                    <div class="increment_count increase_food_counter">
                      <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
};
