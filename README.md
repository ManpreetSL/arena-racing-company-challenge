# Arena Racing Challenge task

## Things left to do
* Fix the CORS error when fetching events
    * For now, this task has been implemented for just one month using some hardcoded data
* Use different images for different screen sizes
    * Would try to implement this using a `srcSet` on the `img` tag
* Make the calendar loop around when going past the boundaries e.g. press next on the December view, and it'll go to January again
* Refresh the JWT token after 30 mins

## Possible extensions
* Could potentially store/catch events data that has already been fetched for a given month, and refresh that after a given time period
* Skip between months with a list of different months instead of just having previous/next buttons
* Added a filtering sidebar but didn't implement any functionality for it
