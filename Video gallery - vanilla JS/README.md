# Frontend work sample

This is a video gallery with thumbnails.

## How the application works

The application consists of one main video frame and five thumbnails. To play a video click on the main frame or a thumbnail. To pause/play click on the main video once. Once you click on a thumbnail it will change place with the video playing in the main frame.

## My decisions

I decided to pause autoplay 'onload' and add a play button (instead of the default video controls in HTML) to make the application more simplistic, and at the same time show the user they can pause/play the video by clicking inside the main frame. And I hid the play button when the video is playing.

_Lessons learned:_

- A mistake I made is that I haven't added a pause indicator (that transitions out) for the user to see that they have paused the video.

* I also haven't been able to figure out how to enable the user to click on the area where the play button is when it is hidden. This is a major flaw that would possibly confuse the user into thinking they can't pause the video, because they have to click or tap on the area outside of the hidden button. This would of course be especially difficult to do on a mobile device since the frame is much smaller.

- I also feel it might have been better and more user friendly to use vertical videos instead of horisontal, as it takes up more space (ie. easier to tap) on a mobile device.

## Deployment

To get the application up and running, it should be put on a Web server so it can be used either through the Internet or an intranet.

The application has browser compatability with Edge, Chrome, Firefox and Safari (two major versions backward).

## Built With

- HTML
- CSS
- Javascript

## Author

- **Rachel Richter** (https://github.com/Richterror)
