# TableCheck Take Home Test Documentation

## Overview

- **Project Name:** [William Brammer TableCheck Take Home Test]
- **Repository URL:** [https://github.com/NabbeunNabi/TakeHomeForTC]

## Test Understanding

As I understand it this test focused on hydration in server side rendering, learning how to read tests and create an OpenAPI spec that could be reached by the tests, and implementing a reservation system that is realistic to what a restaurant would need.

## Incomplete Task / Immer issue

I looked for a while and in the second test spec for following group order the testing suite was encountering an error with Immer. The error read " Immer only supports setting array indices and the 'length' property". I looked many places and could not see what part of the spec.json I did not change to fix it. From the generated data that I did see in the test spec, I implemented the logic that should pass the tests, but was not able to concretely see that they passed. The logic implemented was to on first render check if there is a menu. Then go through and see if any of the menu items have group order. If they do then a function is called that looks for the maximum order and the minimum order. That becomes the default for minimum and maximum amount of people for the reservation. The only thing keeping me from completing the task is the immer error. If I were to get the test data properly. I should be able to refactor the code to make the tests pass if they are not already passing from the logic I implemented.

## Completed Tasks

Other than not being able to see if the tests pass as they should due to the immer error all the other tests are passing and the producer function parameter is set to optional.

## Conclusion

Thanks for giving me the opportunity to do this Take Home Test. It was an amazing exercise where I was able to showcase my knowledge of JavaScript but learn at the same time.