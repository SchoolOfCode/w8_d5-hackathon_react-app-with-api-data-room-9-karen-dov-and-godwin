# INITIAL SEARCH PAGE (App component)
 - make whole page as a single component with these inside:
    - text, input, button
 - use useState to store the fetched data for the username provided (userJson)
 - use useState to store text from input field (inputText)
    - make a function to update the state with onChange event
 - fetch data onClick
    - make a function to give to the onClick that will do the fetch and update state
- do some checks for invalid usernames and dosplay big red errors


# USER DISPLAY
 - Top half component (everything up to the Bio) with these components inside:
    - profile picture
    - links
    - name(login) contact email
 - Bottom half component with these components inside:
    - repo/follower links