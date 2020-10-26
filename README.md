# Aliens-R-Real: JavaScript and DOM Manipulation Homework <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Output](#output)
- [Background](#background)
- [Your Task](#your-task)
  - [Level 1: Automatic Table and Date Search](#level-1-automatic-table-and-date-search)
  - [Level 2: Multiple Search Categories](#level-2-multiple-search-categories)
- [Results](#results)

## Output

Homework can be found at my [JavaScript Challenge](https://derrikdennis.github.io/javascript-challenge) webpage.

## Background

In this exercise, I am working for `ALIENS-R-REAL`, a non-profit dedicated to getting the truth out there based on information collected from eye-witness reports.

There's a bit of a problem: the collection of data is too large to search through manually.  It needs to be put into a table that can be searched through.

The assignment for this week is to write code that is based on a [dataset](/static/js/data.js).  There needs to be a filter for specific values.  

There's a catch though - it can only be done using d3.js, JavaScript, CSS and HTML.  The instructions of what to do are found below.

## Your Task

### Level 1: Automatic Table and Date Search

* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

## Results

Results can be found at: <https://derrikdennis.github.io/javascript-challenge>
