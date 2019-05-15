# Pipeline Proposal Experiment Outline

Question limit: 10

## Techniques:

- survey with randomized comparisons on the same topics
- correctness checks
- bug hunt
- timed tests
- single participant comparison
- intuitive grasp

## traits tested:
- argument length
- typo recognition
- control flow

## User experience tested
- readability (developer assessed, timing, correctness)
- cognative load (developer assessed, timing)
- sentiment (developer assessed, timing)
- x takes longer than y (timing)
- frequency of correct implimentations (survey result)
- frequency of correctly identified bug
- comparitive performance


# Types of tests:

## Base case - '?base=true'
- question: how does the user, once familiar with the concept, expect it to work?
- traits tested:
  - sentiment
  - exploratory

## Exploratory proposal - '?explore=true'
- question: how does the user, once familiar with the concept, expect it to work?
- traits tested:
  - sentiment
  - exploratory

## Base case vs Minimal proposal - '?base=true&minimal=true'
- question: how does the minimal proposal fair against the base case
- traits tested:
  - readability
  - cognative load
  - sentiment
  - frequency of correct implementations
  - frequency of correctly identified bug

## Base case vs Proposal 1 - '?base=true&proposal1=true'
- question: how does proposal 1 fair against the base case
- traits tested:
  - readability
  - cognative load
  - sentiment
  - frequency of correct implementations
  - frequency of correctly identified bug

## Base case vs Proposal 2 - '?base=true&proposal2=true'
- question: how does proposal 2 fair against the base case
- traits tested:
  - readability
  - cognative load
  - sentiment
  - frequency of correct implementations
  - frequency of correctly identified bug

## Base case vs Proposal 1 and 2 - '?all=true'
- question: what kind of information do we get from proposing both in relation to the base case
- traits tested:
  - readability
  - cognative load
  - sentiment
  - frequency of correct implementations
  - frequency of correctly identified bug

## Proposal 1 vs Proposal 2 - '?proposal1=true&proposal2=true'
- question: what kind of information do we get from proposing both only in relation to eachother
- traits tested:
  - readability
  - cognative load
  - sentiment
  - frequency of correct implementations
  - frequency of correctly identified bug


# Combined test ordering:
  - Comprehension test
  - select cases
  - which was most difficult to read?
  - which was your favorite syntax?
  - go to 2
  - is this something you would use?


# Code theme - pickling.

- math
- text
- pickles
- tvorog
- kimchi

