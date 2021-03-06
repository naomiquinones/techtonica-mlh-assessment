# MLH Fellowship React Assessment
This project is part of the application for the Major League Hacking fellowship.

## Requirements

### Algorithm Display
Using a provided sample file containing data such as:
  ```
  {
    "name": "Bubble Sort",
    "moreDetailsUrl": "https://en.wikipedia.org/wiki/Bubble_sort",
    "imageUrl": "https://images.immediate.co.uk/production/volatile/sites/4/2018/07/GettyImages-175622118-5109db9.jpg?quality=90&resize=940%2C399",
    "pros": ["Extremely simple", "Good for students", "Cool name"],
    "cons": ["Reeeal slow 🐢"],
    "averagePerformance": "O(n²)",
    "stable": true,
    "addedOn": "31 DEC 1999",
    "description": "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order."
  },
  ```
Display the following:

  - [x] Name as a heading

  - [x] Include the moreDetailsUrl as a link

  - [x] The image. The one styling that is important is for the images to be relatively the same size on your page, regardless of the source file dimensions

  - [x] Description

  - [x] averagePerformance (Big O Notation)

  - [x] The addedOn date

  - [x] Pros & Cons lists

### Sorting/Filtering
The initial display reflects the order from the JSON file

#### Sorting

A group of radio buttons at the top that lets the user sort the list.

  - [x] A-Z

  - [x] Most Recently Added

  - [x] Default (The initial sort order)

#### Filtering

  - [x] A filter checkbox above the list labeled "Only Show Stable" toggles the view of the stable algorithms

## CSS styling
  - [x] A little

## Bonus features
Adding to this Readme in case I have time to do these
  - [ ] A way to hide the pros/cons list, either per-algorithm or page-wide

  - [x] Count at the top of the page showing how many algorithms exist in the data and how many are visible