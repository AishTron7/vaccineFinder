# Vaccine Slot Finder

This website is built to provide a clean and easy to use interface for the average user. Just open the website, enter your pincode, hit submit, and BAM! you get neat tabular data to answer all your vaccine slot related queries. Searching for vaccine can't get simpler! 🤩


The Tech Stack of this website includes Node.js for backend and Embedded Javascript Templating (EJS) to give a consistent look across all the pages without repeating the header & footer code for every page. Additional measures have been taken (such as using media queries in CSS) to ensure responsive design due to which phones (portrait oriented) and big screens render different looks of the same website. When the user submits their area pincode, a well crafted query is sent as a GET request to the public Cowin API, which in return sends the JSON data about the vaccination centers. Then with due error handling, that data is parsed and displayed in a dynamic html table. Visit the website [here.](https://bit.ly/aishvaccine)
