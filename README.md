# Vaccine Slot Finder

This website is built to provide a clean and easy to use interface for the average user. Just open the website, enter your pincode, hit submit, and BAM! you get neat tabular data to answer all your vaccine slot related queries. Searching for vaccine can't get simpler! 🤩


The Tech Stack of this website includes Node.js for backend and Embedded Javascript Templating (EJS) to give a consistent look across all the pages without repeating the header & footer code for every page. When the user submits the pincode, a well crafted query is sent as a GET request to the public Cowin API, which in return sends the JSON data about the vaccination centers. Then with due error handling, that data is parsed and displayed in a dynamic html table.
