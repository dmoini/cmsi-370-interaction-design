**CMSI 370** Interaction Design, Fall 2018

# Assignment 0920

The entire semester’s assignments follow the arc of envisioning, designing, and implementing a front end for a pre-existing web service API. As a first step, you are asked to envision and initially design this front end.

A key resource for this assignment is the [Programmable Web](https://www.programmableweb.com) blog, in particular its [API Directory](https://www.programmableweb.com/category/all/apis). This site lists a large collection of available APIs—these will supply the _utility_ for your front end. The front end itself, of course, handles the _usability_ of the overall application.

## Background Reading
If the course texts are available to you, the following readings will shore up the current material.
- Norman Chapter 1
- Shneiderman/Plaisant Chapter 2

## For Submission: Front End Design and White Paper
The title pretty much says it: envision and describe a front end for a pre-existing web service API. Many such APIs are freely and publicly available, although many do require some degree of signup. The [Programmable Web](http://www.programmableweb.com) blog, especially its [API Directory](http://www.programmableweb.com/category/all/apis), is a good starting point for your “API shopping.” For this assignment, you are to:

- Choose a web service API (the concept of a web service will be described in class, with implementation details to come later)
- Describe and design a simple front end that invokes the API’s services

Specific functionality will vary depending on the API, of course, but for proper scale, we are looking for the implementation of _at least three (3)_ non-trivial web service functions. A [template for the design/white paper document](./front-end-design-template.md) is included with this repository, specifying the content that you are expected to provide.

### Technology Stack
You don’t need to make any final decisions about the technology platform of the application yet, except perhaps whether the front end will be a web app vs. a native mobile app. There is no restriction on the particular technology stack to use later on, although I will be able to provide the most guidance for the following:

- a traditional styled web app
- a React web app
- a native iOS application written in Swift

For systems that offer not only web services but also “drop-in” widgets (e.g., Pinterest, Twitch, Twitter, etc.), you may use the widgets in your front end, but these widgets _do not count_ toward the three (3) web service functions that you plan to use.

We do want a good user interface, but don’t worry about fancy graphics—we know that those require a different skill set. Instead, look to make good choices in user interface elements, layout, and behaviors. Some visuals are sufficiently easy with [Bootstrap](http://getbootstrap.com), [Material Design](https://material.io), native iOS components, and maybe some custom CSS or other code; you are not obligated to go beyond that.

Presumably, you will find something among these options that is to your liking and will keep you excited. If you have any qustions about your choice, don’t hesitate to run it by me.

### If None of the Third-Party APIs Work for You…
A “home-grown” option is available in the form of the LMU Diabolical web service that was developed by the CMSI 486 class of fall, 2012, with support from a Google education grant. The service and some documentation are located at [http://lmu-diabolical.appspot.com](http://lmu-diabolical.appspot.com). (_Note:_ The sample code on the site uses an older method for making API requests; when we start talking about implementation, be on the look out for a newer approach that uses the `fetch` function.)

If you choose LMU Diabolical as your back-end service, your front end should implement the following:

- _Display a list of current characters_
- _Spawn/create a new character_
- _View a character_
- _Modify a character_
- _Delete a character_ (make sure the user does not delete one by accident)

For other web service APIs, it is highly recommended that you check with me first on the three or more operations for which you plan to supply a front end. Better safe than sorry.

### How to Turn it In
Commit your front end design/white paper as a file called _front-end-design.md_ in this repository. As can be seen from the filename, [Markdown format](https://guides.github.com/features/mastering-markdown/) should be used.

## Specific Point Allocations
This assignment is scored according to outcomes _1a_, _1b_, _2a_, and _4c_ to _4f_ in the [syllabus](http://dondi.lmu.build/fall2018/cmsi370/cmsi370-fall2018-syllabus.pdf), as well as the degree to which the content delivered aligns with the content requested in the [outline/template](./front-end-design-template.md). For this particular assignment, graded categories are as follows:

| Category | Points | Outcomes |
| -------- | -----: | -------- |
| Application Description | 12 | _1a_, _4d_ |
| Web Service(s) Used (at least 3) | 12 | _1a_, _4d_ |
| Top-Level Design/Layout | 16 | _1a_, _1b_, _2a_ |
| Usage Scenario 1 | 12 | _1a_, _1b_, _2a_ |
| Usage Scenario 2 | 12 | _1a_, _1b_, _2a_ |
| Design Rationale | 12 | _1a_, _1b_, _2a_ |
| Usability Metric Forecast | 12 | _1a_, _1b_, _2a_ |
| References | 12 | _4d_ |
| Writing | deduction only | _4c_ |
| Version Control | deduction only | _4e_ |
| Punctuality | deduction only | _4f_ |
| **Total** | **100** |

As a writing assignment, outcome _4c_ is interpreted here as writing clarity and correctness instead of code readability. The last three graded categories are “deduction only,” meaning that you will only get points taken off if there are significant issues with those categories. Such issues include but are not limited to: unclear, unproofread, or erroneous writing (_4c_), insufficiently granular or unmessaged commits (_4e_), and late commits (_4f_).
