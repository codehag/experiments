# Summaries of things

## Metrics to measure for
* cognitive load
* error proneness
* code churn (only post)
* Developer sentiment

## how to measure
* ask subjects
* timing task completion
* assessing correctness of implementations

## Types of studies
* eye tracking studies
  * collectable data:
    * pause time on word -> correlates with cognative load
    * error proneness
  * cost
    * high
    * small scale studies only, high time investment

* Codebase histories
  * collectable data:
    * error proneness
    * code churn
  * cost
    * high, without an api
    * small scale studies only, high time investment

* teachability
  * collectable data:
    * beginner perspective
    * error proneness
  * cost
    * high
    * small scale studies only, high time investment

* Alternative domains that do not rely on programmers
  * collectable data:
    * cognative load
  * cost
    * low

* survey style experimentation
  * subtype: developer sentiment
    * collectable data:
      * developer sentiment
    * cost
      * low
  * subtype: bug hunt
    * collectable data:
      * cognative load
      * developer sentiment
    * cost
      * high for surveyed individual
  * subtype: implementation task
    * collectable data:
      * error proneness
      * cognative load
      * developer sentiment
    * cost
      * high for surveyed individual

* twitter thermometer
  * collectable data:
    * developer sentiment
  * cost
    * low

* github issue comments
  * collectable data:
    * developer sentiment
  * cost
    * low

* plenary discussion
  * collectable data:
    * developer sentiment
  * cost
    * ?

* VSCode plugin that allows immediate comparison within a known domain
  * collectable data:
    * error proneness
    * cognative load
    * developer sentiment
    * contextual usage
    * code churn
  * cost
    * high initial cost


## Current strategy

* twitter polls
* github polls
* community outreach groups

## Proposed additions

* standard experiments
* vscode plugin

## Prior Art

See: [Papers](./papers.md)

## Risks

* biased experiment that favor proposals
* biased experiment that favors abandoning proposal
* experiment data has no impact on decision
* experiment data is ignored
* experiment data is faulty and leads to a faulty decision
