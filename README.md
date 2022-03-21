# Pizza Moto - Annette Warimwe

#### This is a webpage of a pizza restarant that allows the user to make orders and have the orders delivered.

#### By **Annette Warimwe**

## Description

This project is a landing page of a pizza restaurant named Pizza Moto. It describes the history of pizza, the menu of the restaurant's offers and the restaurant's reviews.
<br>
At the end of the page, you will find a form that allows you to order pizza and set your location for delivery. You can also choose to pick at the restaurant.
<br>
You can access this site using this link: https://warimwe.github.io/pizza-moto

## Usage

- Fork the repo
- Create a new branch

```sh
git checkout -b improve-feature
```

- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes

```sh
git commit -am 'Improve feature'
```

- Push to the branch

```sh
git push origin improve-feature
```

- Create a Pull Request

## User stories

As a user I should be able to:

- Choose the size of pizza I want e.g Small, Medium, Large
- Choose what kind of crust I would like the pizza to have e.g Crispy, Stuffed, Gluten-free
- Choose the topping(s) I want on my pizza.
- Place an order for my Pizza and see the total charge for it.
- Have an option to order as many pizzas as I want.
- Have an option to have the pizza delivered or not. If delivered I want to be alerted how much the delivery charge will be.
- If I want my pizza to be delivered, I want to be prompted to enter where the delivery should be made and an alert saying '' your order will be delivered to your location"
- See a checkout button that when clicked shows the total amount charged for the orders.

## Behavior Driven Development

| Behavior                           | Input                      | Output                                                                                                                                                                   |
| ---------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Accepts the user's name            | 'John Doe'                 | name = 'John Doe'                                                                                                                                                        |
| Accepts the user's pizza choice    | 'Buffalo Chicken Pizza'    | flavour = 'Buffalo Chicken'                                                                                                                                              |
| Accepts the user's size choice     | 'Regular Pizza'            | size = 'regular'                                                                                                                                                         |
| Accepts the user's crust choice    | 'Thin Crust'               | crust = 'thin'                                                                                                                                                           |
| Accepts the user's toppings choice | 'Extra Cheese, Artichokes' | toppings = ['cheese', 'artichokes']                                                                                                                                      |
| Accepts the user's number choice   | '45'                       | number = 45                                                                                                                                                              |
| Accepts the user's delivery choice | 'yes'                      | delivery = true                                                                                                                                                          |
| Accepts the user's location        | 'Mombasa Road'             | location = 'Mombasa Road'                                                                                                                                                |
| Submits the details                | Submit button              | "Hello John Doe, your order of a regular Buffalo Chicken pizza has been received. You will pay a total of 8220. Your order will be delivered to Mombasa Road.Thank you." |

## Known Bugs

No known bugs at the moment.

## Technologies Used

HTML and CSS
Bootstrap
Javascript
jQuery
Font Awesome Icons

## To Do

Add Mailchimp to handle the messages.

## Support and contact details

You can email the developer through annettewarimwe@gmail.com

### License

[License](/license)
