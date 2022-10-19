<img src="https://socsportal.cit.ie/assets/images/logowhite.jpg" alt="Cork Institute of Technology" width="25%" />

#### CR106 - BSc Honours Software Development

# SOFT6007 - Web Development Fundamentals Project 2

[![Demo](https://repository-images.githubusercontent.com/357985915/1135928b-51fe-47bd-b0b4-9c2d307ab02f)](https://szpricky.github.io/disney-character-game)

[Demo](https://szpricky.github.io/disney-character-game)

## Disney Character Game

Create a dynamic web page using JavaScript which will allow the user to play a game to randomly select a Disney character, and for a short biography of that character to appear on the page.

-   A Disney character should be randomly selected when the user clicks a button on screen to play the game.
-   Information about the character should also display on the page,
    -   For example: name, image of character, movie(s) they are in, friend or nemesis, song they may sing, quote they are known for, etc.
    -   This information should be displayed below the button and styled up using CSS.
    -   You may add additional biographical information if you wish.
    -   Your chosen characters can be a selection of Disney characters or they can all be from the same movie, especially if you have a favourite Disney film.

### The web page should consist of:

-   A main heading
-   A menu button to expand the menu showing two additional links
    -   These links should point to at least two websites relating to Disney
    -   The menu button and the links can be styled up in CSS to your preferences, those shown above are only samples.
    -   The menu should expand on either clicking or moving the mouse over the button to activate the expansion.
-   An image in the first column on the left that when you move the mouse over the image it changes and when you remove the mouse from over it, the image reverts back to the original.
-   An input box to allow the user to enter their favourite character from a list of characters that you provide – these should match the character names that you have selected to use in the random game.
-   A button to allow the user to choose a Disney character, e.g. →
    -   You should have at least 4 Disney characters that can be randomly selected when the user clicks the button.
        -   A JavaScript event listener will call the function to randomly select a number between 1 – 4 (or more), then based on that number will display the information about one of the Disney characters.
    -   When the random number is selected by the function, it should contain data to fill in relevant sections on the webpage to provide the biography for the selected character. Remember that you can mark the areas of HTML where you want the information to be entered using `id=""`, and if necessary enclosing the id in a `<span>` or `<div>`.
    -   An image of the character should also appear beside the biographical information. Hint: resize all the character images to the same dimensions (width x height).
-   An input range bar should be inserted into the first column below the menu
    button, to allow the user to Rate their love of Disney. - A function should be called when the pointer changes, and you should code in about 3 – 4 different responses for the user.
-   You have the option of adding in a comparison button to compare the character value that you entered in at the top of the page against the randomly generated character and have a win message appear on the screen if they match.

### Requirements

1. It is preferred to enter the JavaScript code in an External JS file instead of embedding the code in the HTML.
2. All HTML content must be marked up using HTML5.
3. Addressing to resources (e.g. Images) must use relative addressing.
4. Pages must be **HTML5 compliant**. Validate your pages with http://validator.w3.org.
5. CSS should be added using External Stylesheets as in the previous assignment.
    - The background image, background colours font colours and types are all your choice. These can reflect the colour scheme that may be associated with the characters/ movie that you have chosen.
6. Your web page should contain a "**housekeeping**" section e.g. contains copyright information and contact details (e.g. email address) for the website developer.
7. If you are looking for icons, please refer to reliable websites such as http://iconspedia.com paying particular attention to the licenses. For example, if the license requires attribution for the icon, then please include it in your website. Do not use Google's Image Search to search for icons because you cannot be sure of the associated licenses.
8. Any images used should be referenced in the comments of your code. Please ensure to use the **actual website** the image is from and not just Google Images.
9. As the Disney title is licensed and copyrighted material, please include the copyright information for Disney in the footer.

Zip your project folder into one file and upload it through Canvas
using the link for your class group.

##### Patrik Richard Szilagyi, 2020
