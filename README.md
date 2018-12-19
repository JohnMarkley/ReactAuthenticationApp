# ReactAuthenticationApp
This application keeps users out of a secure page until they sign in. The application was created with React, Bootstrap & Material-UI, and I used Okta (https://developer.okta.com/) to manage user authorization. 

# Demo 
![](Demo.gif)

The demo demonstrates locking the user out of a member exclusive area, prompting them to login. After login, they can access the member area where I pull the user's name and email address from tokens in local storage. It then shows a homepage that shows different information depending on if the user is authorized or not. 


# Things I would change
In order to change the background to light grey I used a div to cover the entire page by using 'vh' ("Relative to 1% of the height of the viewport"). From what I understand, this unit of measurement is absolute and is not a good solution when dealing with a variety of screen sizs, it also isn't supported on older versions of certain browsers. It also causes the page to be slightly scrollable even though it shouldn't be.

I tried using React Helmet (https://www.npmjs.com/package/react-helmet) but I couldn't get it to achieve what I wanted to do and other CSS tricks but none of them worked.

## Design choices
I also would change the mouse overlay color for the NavBar buttons, I just used the standard Material-UI options.
